import * as Clipboard from "expo-clipboard";
import { Button, StyleSheet, Text, View, Share } from "react-native";
import { useState } from "react";

export default function ClipboardDemo() {
  const [random, setRandom] = useState(() => Math.random());

  const clipcoardhandler = async () => {
    await Clipboard.setStringAsync(random.toString());

    alert(`Copied to clipboard!`);
  };

  const pasteClipboardHandler = async () => {
    const clipboardContent = await Clipboard.getStringAsync();
    alert(`Clipboard content: ${clipboardContent}`);
  };

  return (
    <View style={{ gap: 10, alignItems: "center" }}>
      <Text>Clipboard Component</Text>
      <Text>{random}</Text>
      <Button
        title="Generate Random"
        onPress={() => setRandom(Math.random())}
      />
      <Button title="Copy to Clipboard" onPress={clipcoardhandler} />
      <Button title="Paste from Clipboard" onPress={pasteClipboardHandler} />
    </View>
  );
}
