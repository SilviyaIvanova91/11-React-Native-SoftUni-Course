import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export const reactnativeComponents = [
  "View",
  "Text",
  "Image",
  "ScrollView",
  "FlastList",
  "SectionList",

  "TextInput",
  "Pressable",
  "TouchableOpacity",
  "TouchableHighlight",
  "TouchableWithoutFeedback",

  "Button",
  "Switch",

  "ActivityIndicator",
  "StatusBar",

  "Modal",
  "KeyboardAvoidingView",

  "SafeAreaViw",
  "VirtualizedList",

  "RefreshControl",

  "ImageBackground",
];

export default function App() {
  const dynamicPropety = "backgroundColor";
  const dynamicValue = "#d8ffe9ff";

  return (
    <>
      <View style={{ paddingTop: 60, [dynamicPropety]: dynamicValue }}>
        <Text style={[styles.heading, { fontSize: 30 }]}>React Native</Text>
        <Text style={[styles.heading, { fontSize: 20 }]}>
          Best Mobile Framework
        </Text>
      </View>

      <ImageBackground
        resizeMode="cover"
        style={{ height: 600 }}
        source={{
          uri: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*PHUyljg7hpvQizZWeHLMjw.png",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "white",
            marginTop: 50,
          }}
        >
          <ScrollView contentContainerStyle={{ padding: 10 }}>
            {reactnativeComponents.map((componentName, index) => (
              <View key={index}>
                <Text
                  style={{ color: "white", fontSize: 20, marginBottom: 10 }}
                >
                  {componentName}
                </Text>
              </View>
            ))}
          </ScrollView>
        </Text>
      </ImageBackground>
      <StatusBar style="dark" />
    </>
  );
}

const styles = StyleSheet.create({
  heading: { textAlign: "center", fontWeight: "bold" },
});
