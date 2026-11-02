import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

export default function App() {
  console.log("Window width:", Dimensions.get("window").width);
  console.log("Screen width:", Dimensions.get("window").height);
  const { width, height } = useWindowDimensions();

  const isLandscape = width >= height;

  console.log("useWindowWidth: ", width);
  console.log("useWindowHeight: ", height);
  console.log("Mode: ", isLandscape);
  console.log(Platform.OS);

  return (
    <View style={styles.container}>
      <View style={{ height: "50%", backgroundColor: "blue" }}></View>
      <Text>Responsive and Adaptive Layouts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    // backgroundColor: Platform.OS === "ios" ? "gray" : "green",
    ...Platform.select({
      android: {
        backgroundColor: "green",
      },
      ios: {
        backgroundColor: "grey",
      },
    }),
    padding: 60,
    height: "100%",
  },
});
