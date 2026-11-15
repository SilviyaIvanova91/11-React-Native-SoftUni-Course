import {
  Button,
  StyleSheet,
  Text,
  View,
  Share,
  ActivityIndicator,
  Image,
} from "react-native";
import { CameraView, useCameraPermissions, Camera } from "expo-camera";
import { useState, useRef } from "react";

export default function CameraDemo() {
  const [face, setFace] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);
  console.log("permission", permission);

  if (!permission) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Camera Demo
      </Text>

      {!permission.granted && (
        <View style={{ gap: 20 }}>
          <Text>We need your permission to use the camera</Text>
          <Button title="Grant Permission" onPress={requestPermission} />
        </View>
      )}

      {permission.granted && (
        <View>
          <Text>Camera permission granted! You can now use the camera. </Text>
          <CameraView
            ref={cameraRef}
            style={{ width: 300, height: 400 }}
            facing={face}
          />
          <Button
            title="Take Photo"
            onPress={async () => {
              // Logic to take picture goes here
              const photo = await cameraRef.current.takePictureAsync({
                quality: 0.5,
              });
              console.log(photo);
              setPhoto(photo.uri);
            }}
          />
          <Button
            title="Flip Camera"
            onPress={() => {
              // Logic to flip camera goes here
              setFace(face === "back" ? "front" : "back");
            }}
          />
          {photo && (
            <View style={{ marginTop: 20 }}>
              <Text>Photo taken! URI:</Text>
              <Image
                source={{ uri: photo }}
                style={{ width: 200, height: 300, marginTop: 10 }}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
}
