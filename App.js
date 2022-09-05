import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Header from "./Components/Header";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy Coffee", key: "1" },
    { text: "Create an app", key: "2" },
    { text: "Play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      console.log(prevTodos);
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  const addTodoHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        console.log(todos);
        return [{ text: text, key: Math.random().toString }, ...prevTodos];
      });
    } else {
      Alert.alert("Opps!", "Todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      <View style={styles.content}>
        {/* to Form */}
        <AddTodo addTodoHandler={addTodoHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
  },
  list: {
    marginTop: 20,
  },
});
