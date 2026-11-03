import { useContext, useEffect, useState } from "react";
import { Keyboard, View } from "react-native";
import { Modal, Text, TextInput, Button } from "react-native-paper";
import { TodoContext } from "../../contexts/TodoContext";

const CreateTodo = ({}) => {
  const { addTodo, handleDismiss, showCreateTodo, selectedTodo } =
    useContext(TodoContext);
  const [text, setText] = useState("");
  const containerStyle = { backgroundColor: "white", padding: 20 };

  useEffect(() => {
    if (selectedTodo) {
      setText(selectedTodo.text);
    }
  }, [selectedTodo]);

  const addTodoHandler = () => {
    addTodo(text);
    setText("");
    Keyboard.dismiss();
    handleDismiss();
  };

  return (
    <Modal
      visible={showCreateTodo}
      onDismiss={handleDismiss}
      contentContainerStyle={containerStyle}
    >
      <Text>Create a new todo</Text>

      <View
        style={{
          flexDirection: "row",
          gap: 10,
          justifyContent: "space-between",
        }}
      >
        <TextInput
          label="Name"
          value={text}
          style={{ flex: 1 }}
          type="outlined"
          onChangeText={(text) => setText(text)}
          onSubmitEditing={addTodoHandler}
        />

        <Button
          style={{ justifyContent: "center" }}
          icon="plus"
          mode="contained"
          onPress={addTodoHandler}
        >
          Add
        </Button>
      </View>
    </Modal>
  );
};

export default CreateTodo;
