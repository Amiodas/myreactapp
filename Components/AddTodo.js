import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function AddTodo({addTodoHandler}) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New todo..."
        onChangeText={changeHandler}
      />
      <Button onPress={()=> addTodoHandler(text)} title='Add Todo' color='coral' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
