import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CameraDemo from "./screens/CameraDemo";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ImagePickerCameraDemo from "./screens/ImagePickerCameraDemo";
import ImagePicker from "./screens/ImagePicker";
import DocumentPicker from "./screens/DocumentPicker";

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <Drawer.Navigator>
        <Drawer.Screen name="Camera" component={CameraDemo} />
        <Drawer.Screen
          name="ImagePickerCamera"
          component={ImagePickerCameraDemo}
          options={{ title: "ImagePickerCamera" }}
        />
        <Drawer.Screen
          name="ImagePicker"
          component={ImagePicker}
          options={{ title: "ImagePicker" }}
        />
        <Drawer.Screen
          name="DocumentPicker"
          component={DocumentPicker}
          options={{ title: "Document Picker" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
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
