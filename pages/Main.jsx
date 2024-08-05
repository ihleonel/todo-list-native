import { StyleSheet, Text, View, ScrollView } from "react-native"
import { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import Layout from "./Layout";

export default function Main() {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState([])
  const addTask = (text) => {
    if (text === '') return
    setTasks([...tasks, text])
    setText('')
  }
  return (
    <Layout>
      <ScrollView>
        <View>
          {tasks.map((task, index) => (
            <Text
              key={index}
            >
              # {task}
            </Text>
          ))}
        </View>
      </ScrollView>
      <View>
        <TextInput
          label="Task"
          value={text}
          onChangeText={setText}
        />
        <Button mode="outlined" onPress={() => addTask(text)}>
          +
        </Button>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  inputText: {
    borderColor: '#dedede',
    borderWidth: 2,
    borderRadius: 5,
    color: '#dedede',
    padding: 5,
    fontSize: 20,
    width: 350,
  },
  button: {
    backgroundColor: '#09d',
    padding: 10,
    borderRadius: 5,
    width: 40,
    marginHorizontal: 5
  }
});
