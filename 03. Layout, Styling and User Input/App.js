import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
} from "react-native";

export default function App() {
  const [isDarkTheme, setDarktheme] = useState(true);
  const [username, setUsername] = useState("");
  const [show, setShow] = useState(false);

  const themeChangeHandler = (value) => {
    setDarktheme(value);
  };

  const usernamechangeHandler = (value) => {
    setUsername(value);
  };

  const showModalhandler = () => {
    setShow(true);
  };

  const submitHandler = () => {
    console.log(username);

    //Empty text input
    setUsername("");

    // Hide keyboard on submit
    Keyboard.dismiss();

    alert(`Welcome ${username}`);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
    >
      <Text>User Input</Text>

      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Text>{isDarkTheme ? "Light" : "Dark"} Theme </Text>
        <Switch value={isDarkTheme} onValueChange={themeChangeHandler} />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Text>Username: </Text>
        <TextInput
          placeholder="John"
          value={username}
          onChangeText={usernamechangeHandler}
          numberOfLines={3}
          keyboardType="name-phone-pad"
          onSubmitEditing={submitHandler}
        />
        <Button title="login" onPress={submitHandler} />
      </View>

      <Button title="Show Modal" onPress={showModalhandler} />

      <Modal
        visible={show}
        onRequestClose={() => setShow(false)}
        animationType="slide"
        style={{ padding: 60 }}
      >
        <Text>This is Modal</Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 10,
            marginBottom: 50,
          }}
        >
          <Button title="Cancel" onPress={() => setShow(false)} />
          <Button title="Confirm" onPress={() => setShow(false)} />
        </View>

        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}
        >
          <TouchableOpacity onPress={() => setShow(false)}>
            <View
              style={{ backgroundColor: "red", padding: 30, borderRadius: 5 }}
            >
              <Text style={{ color: "white" }}>CANCEL</Text>
            </View>
          </TouchableOpacity>

          <TouchableHighlight onPress={() => setShow(false)}>
            <View
              style={{ backgroundColor: "green", padding: 30, borderRadius: 5 }}
            >
              <Text style={{ color: "white" }}>CONFIRM</Text>
            </View>
          </TouchableHighlight>

          <Pressable
            onPress={() => setShow(false)}
            style={({ pressed }) => ({
              backgroundColor: pressed ? "lightblue" : "blue",
            })}
          >
            <View style={{ padding: 30, borderRadius: 5 }}>
              <Text style={{ color: "white" }}>PRESSABLE</Text>
            </View>
          </Pressable>
        </View>
      </Modal>
      <View />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
