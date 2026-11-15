import { Button, Text, View } from "react-native";
import * as Haptics from "expo-haptics";

export default function HapticsDemo() {
  const hapticHandler = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    //  await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    // await Haptics.selectionAsync();
  };

  return (
    <View style={{ gap: 10, alignItems: "center" }}>
      <Text>Haptics Component</Text>

      <Button title="Trigger Haptics" onPress={hapticHandler} />
    </View>
  );
}
