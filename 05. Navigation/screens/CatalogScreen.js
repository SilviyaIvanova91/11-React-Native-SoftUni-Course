import { StyleSheet, Text, View } from "react-native";
import CatalogItem from "../components/Catalogitem";
import { items } from "../data";

export default function CatalogScreen() {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <CatalogItem key={item.id} {...item} />
      ))}
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
