import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { getErrorMessage } from "../utils/error.utils";
import * as Location from "expo-location";
import { File } from "expo-file-system";

import ScreenHeader from "../components/ScreenHeader";
import FormInput from "../components/FormInput";
import PrimaryButton from "../components/PrimaryButton";
import Chip from "../components/Chip";
import PhotoPicker from "../components/PhotoPicker";
import { colors } from "../constants/colors";
import { categories } from "../data/places";
import { useEffect, useState } from "react";
import { placeApi } from "../api";
import { isLocalFile } from "../utils/file.utils";
import DatePickerFormInput from "../components/DatePickerFormInput";

export default function AddPlaceScreen({ navigation, route }) {
  //SavePlaceScreen -> Add / Edit
  const isEdit = !!route?.params?.isEdit;
  const placeId = route?.params?.placeId;

  const [values, setValues] = useState({
    title: "",
    image_url: null,
    location: "",
    date: new Date(),
    description: "",
    category: "City",
    rating: 0,
  });

  useEffect(() => {
    if (isEdit && placeId) {
      const fetchPlace = async () => {
        try {
          const place = await placeApi.getById(placeId);
          setValues({
            ...place,
            date: new Date(place.date),
          });
        } catch (error) {
          console.error("Failed to fetch place:", getErrorMessage(error));
        }
      };
      fetchPlace();
    }
  }, [isEdit, placeId]);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const useCurrentLocationHandler = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Location permission not granted");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    console.log("Current location:", location);

    const reverseGeocode = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    handleChange(
      "location",
      `${reverseGeocode[0].city}, ${reverseGeocode[0].country}`,
    );
  };

  const handleSave = async () => {
    try {
      let imageUrl = values.image_url;

      if (isLocalFile(imageUrl)) {
        const file = new File(imageUrl);
        const fileName = `${values.title}-${Date.now()}.jpg`;

        imageUrl = await placeApi.saveImage(file, fileName);
      }

      if (isEdit) {
        await placeApi.update(placeId, {
          ...values,
          image_url: imageUrl,
        });
      } else {
        await placeApi.create({
          ...values,
          image_url: imageUrl,
        });
      }

      console.log("Place saved successfully");
      navigation.goBack();
    } catch (error) {
      console.error("Failed to save place:", getErrorMessage(error));
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScreenHeader title={isEdit ? "Edit Place" : "Add New Place"} />

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <PhotoPicker
          onChange={(uri) => handleChange("image_url", uri)}
          uri={values.image_url}
        />

        <View style={styles.card}>
          <FormInput
            label="Title"
            icon="🏷️"
            placeholder="e.g. Seven Rila Lakes"
            value={values.title}
            onChangeText={(text) => handleChange("title", text)}
          />

          <FormInput
            label="Location"
            icon="📍"
            placeholder="City, Country"
            value={values.location}
            onChangeText={(text) => handleChange("location", text)}
          />
          <TouchableOpacity
            style={styles.locationButton}
            activeOpacity={0.7}
            onPress={useCurrentLocationHandler}
          >
            <Text style={styles.locationButtonText}>
              🧭 Use my current location
            </Text>
          </TouchableOpacity>

          <DatePickerFormInput
            label="Date of visit"
            icon="📅"
            placeholder="DD.MM.YYYY"
            value={values.date}
            onChangeText={(date) => handleChange("date", date)}
          />

          <FormInput
            label="Description"
            icon="📝"
            placeholder="What made this place special?"
            multiline
            numberOfLines={4}
            value={values.description}
            onChangeText={(text) => handleChange("description", text)}
          />

          {/* Category */}
          <Text style={styles.label}>Category</Text>
          <View style={styles.chips}>
            {categories
              .filter((category) => category !== "All")
              .map((category, index) => (
                <View key={category} style={styles.chipWrapper}>
                  <Chip
                    label={category}
                    active={values.category === category}
                    onPress={() => handleChange("category", category)}
                  />
                </View>
              ))}
          </View>

          {/* Rating */}
          <Text style={styles.label}>Your rating</Text>
          <View style={styles.ratingRow}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                activeOpacity={0.7}
                onPress={() => handleChange("rating", star)}
              >
                <Text
                  style={[
                    styles.star,
                    star > values.rating && styles.starEmpty,
                  ]}
                >
                  ★
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <PrimaryButton
            title={isEdit ? "Update Place" : "Create Place"}
            onPress={handleSave}
          />

          <TouchableOpacity style={styles.cancelButton} activeOpacity={0.7}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  locationButton: {
    alignSelf: "flex-start",
    marginTop: -8,
    marginBottom: 16,
  },
  locationButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.primary,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 8,
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
  },
  chipWrapper: {
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  star: {
    fontSize: 34,
    color: "#F5A524",
    marginRight: 6,
  },
  starEmpty: {
    color: "#D9DEE7",
  },
  cancelButton: {
    alignItems: "center",
    paddingVertical: 14,
    marginTop: 4,
  },
  cancelText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.textMuted,
  },
});
