import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 60 }}>
      <Text>Flexbox Layout</Text>

      <View style={styles.flexContainer}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#d3fffb",
            alignSelf: "center",
          }}
        >
          <Text>1</Text>
        </View>

        <View style={{ width: 50, height: 50, backgroundColor: "#d3fffb" }}>
          <Text>2</Text>
        </View>

        <View style={{ width: 50, height: 50, backgroundColor: "#d3fffb" }}>
          <Text>3</Text>
        </View>

        {/* <View style={{ width: 50, height: 50, backgroundColor: "#d3fffb" }}>
          <Text>4</Text>
        </View>

        <View style={{ width: 50, height: 50, backgroundColor: "#d3fffb" }}>
          <Text>5</Text>
        </View>

        <View style={{ width: 50, height: 50, backgroundColor: "#d3fffb" }}>
          <Text>6</Text>
        </View>

        <View style={{ width: 50, height: 50, backgroundColor: "#d3fffb" }}>
          <Text>7</Text>
        </View>

        <View style={{ width: 50, height: 50, backgroundColor: "#d3fffb" }}>
          <Text>8</Text>
        </View>

        <View style={{ width: 50, height: 50, backgroundColor: "#d3fffb" }}>
          <Text>9</Text>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 20,
    // alignContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#ccffd2",
    padding: 10,
    height: 400,
  },
});
