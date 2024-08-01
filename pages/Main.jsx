import { StyleSheet, Text, Pressable, View, TextInput, ScrollView } from "react-native"
import { useState } from 'react';
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
        <View style={{ flex: 1, justifyContent: 'flex-start'}}>
          {tasks.map((task, index) => (
            <Text style={{color: '#dedede', fontSize: 20, fontWeight: 'bold'}} key={index}> # {task}</Text>
          ))}
        </View>
      </ScrollView>
      <View style={{ padding: 10, flexDirection: 'row' }}>
        <TextInput style={styles.inputText} value={text} onChangeText={setText}/>
        <Pressable onPress={() => addTask(text)} style={styles.button}>
          <Text style={{color: '#fefefe', textAlign: 'center', fontWeight: 'bold', fontSize: 15}}>+</Text>
        </Pressable>
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
