import { Appbar } from "react-native-paper";
import { StyleSheet, View, ScrollView } from "react-native"
import { useRouter } from "expo-router";
import { useState } from 'react';
import InputText from "../components/inputs/InputText";
import Task from "../components/tasks/Task";

export default function Main() {

  const router = useRouter()

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

  const onRemove = (task) => {
    if (task === '') {
      return
    }
    setTasks(tasks.filter(el => el !== task))
  }
  return (
    <>
      <Appbar.Header>
        <Appbar.Action icon="arrow-left" onPress={() => router.push('/')} />
        <Appbar.Content title="Tasks" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={{padding: 16}}>
          {tasks.map((task, index) => (
            <View key={index}>
              <Task task={task} remove={onRemove} />
            </View>
          ))}
      </ScrollView>
      <View style={{marginHorizontal: 10}}>
        <InputText setTasks={setTasks} error={error} />
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
