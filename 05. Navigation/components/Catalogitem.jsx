import { View, Text, Pressable } from "react-native";
import { Link, useNavigation } from "@react-navigation/native";

export default function CatalogItem({ id, name }) {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("Details", { itemId: id })}>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#ffb6b6",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <Text>{name}</Text>
        <Link screen="Details" params={{ itemId: id }}>
          Details
        </Link>
      </View>
    </Pressable>
  );
}
