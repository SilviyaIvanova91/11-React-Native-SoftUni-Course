import { createContext, useState } from "react";
import uuid from "react-native-uuid";

export const TodoContext = createContext({
  showCreateTodo: false,
  handleDismiss: () => {},
  openCreateTodoHandler: () => {},
  addTodo: (text) => {},
  toggleTodo: (id) => {},
  deleteTodo: (id) => {},
  mode: "view",
  /**
   * @param {"view"|"edit"|"delete"} mode
   */
  switchMode: (mode = "view") => {},
  editTodo: (id) => {},
});

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    {
      id: uuid.v4(),
      text: "Do the dishes",
      completed: false,
    },
    {
      id: uuid.v4(),
      text: "Go to the gym",
      completed: false,
    },
    {
      id: uuid.v4(),
      text: "Buy groceries",
      completed: false,
    },
  ]);
  const [showCreateTodo, setShowCreateTodo] = useState(false);
  const [mode, setMode] = useState("view");
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleDismiss = () => {
    setShowCreateTodo(false);
  };

  const openCreateTodoHandler = () => {
    setShowCreateTodo(true);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const addTodo = (text) => {
    // edit existing todo if selectedTodo is set
    if (selectedTodo) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === selectedTodo.id ? { ...todo, text } : todo,
        ),
      );
      setSelectedTodo(null);
      return;
    }

    // create a new todo if no selectedTodo is set
    const newTodo = {
      id: uuid.v4(),
      text,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setSelectedTodo(todos.find((todo) => todo.id === id));
    setShowCreateTodo(true);
  };

  const switchMode = (newMode = "view") => {
    const validModes = ["view", "edit", "delete"];

    if (!validModes.includes(newMode)) {
      return;
    }

    setMode(newMode === mode ? "view" : newMode);
  };

  const value = {
    todos,
    showCreateTodo,
    handleDismiss,
    openCreateTodoHandler,
    addTodo,
    toggleTodo,
    deleteTodo,
    mode,
    switchMode,
    editTodo,
    selectedTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
