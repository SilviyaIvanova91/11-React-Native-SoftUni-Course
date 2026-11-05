import { View, Text } from "react-native";
import CatalogItem from "../components/Catalogitem";
import { items } from "../data";

export default function DetailsScreen({ route, navigation }) {
  const item = items.find((i) => i.id === route.params.itemId);

  return (
    <View
      style={{
        flexDirection: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 20,
        padding: 20,
      }}
    >
      <Text>Details Screen</Text>
      <Text>Item name: {item.name}</Text>
      <Text>Item description: {item.description}</Text>
    </View>
  );
}
