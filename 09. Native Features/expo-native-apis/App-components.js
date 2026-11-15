import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Share } from "react-native";
// import CameraDemo from "./components/CameraDemo";
// import ClipboardDemo from "./components/Clipboard";
// import HapticsDemo from "./components/HapticsDemo";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />

      {/* <Text>Native features</Text> */}
      {/* <Button
        title="Share"
        onPress={() =>
          Share.share({
            title: "Share Title",
            message: "Check this out!",
            // url: "https://example.com",
          })
        }
      /> */}
      {/* <ClipboardDemo /> */}
      {/* <HapticsDemo /> */}

      {/* <CameraDemo /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
