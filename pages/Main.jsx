import { StyleSheet, Text, View, ScrollView } from "react-native"
import { useState } from 'react';
import { TextInput, HelperText } from 'react-native-paper';
import { Appbar } from "react-native-paper";

export default function Main() {
  const [text, setText] = useState('')
  const [error, setError] = useState(false)
  const [tasks, setTasks] = useState([])
  const addTask = (text) => {
    if (text === '') {
      setError(true)
      return
    }
    setTasks([...tasks, text])
    setText('')
    setError(false)
  }
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Tasks" />
      </Appbar.Header>
      <ScrollView>
        <View style={{marginHorizontal: 10}}>
          {tasks.map((task, index) => (
            <Text
              key={index}
            >
              # {task}
            </Text>
          ))}
        </View>
      </ScrollView>
      <View style={{marginHorizontal: 10}}>
        <TextInput
          label="Task"
          value={text}
          onChangeText={setText}
          right={<TextInput.Icon icon="send" onPress={() => addTask(text)}/>}
          error={error}
        />
        <HelperText type="error" visible={error}>
          Task is required
        </HelperText>
      </View>
    </>
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
