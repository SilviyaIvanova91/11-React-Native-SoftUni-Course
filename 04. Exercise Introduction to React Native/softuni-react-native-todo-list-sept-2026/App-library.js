// --> npm install -g create-expo
// --> npm start
// --> npx expo install @expo/ui
// --> npm start

// --> npx expo install react-native-safe-area-context

import { Host, Column, Button, Text } from "@expo/ui";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function UniversalExample() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Host style={{ flex: 1 }}>
          <Column spacing={12} alignment="center">
            <Text>Hello, world!</Text>
            <Button label="Press me" onPress={() => alert("Pressed")} />
          </Column>
        </Host>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
