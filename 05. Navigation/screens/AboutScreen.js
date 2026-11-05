import { Pressable, StyleSheet, Text, View } from "react-native";
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

export default function AboutScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
      <Button screen="Home">Home</Button>

      <Pressable
        onPress={() => navigation.goBack()}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#d1d1d173" : "#cacaca",
        })}
      >
        <Text>Go Back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
