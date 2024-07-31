import { StyleSheet, Text, Pressable, View } from "react-native"
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Main() {
  const [counter, setCounter] = useState(0)
  const safeAreaInsets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: safeAreaInsets.top, paddingButton: safeAreaInsets}}>
      <Text style={styles.title}>React Native</Text>
      <Pressable onPress={() => setCounter(counter + 1)} style={styles.button}>
        <Text style={{color: 'white', textAlign: 'center',}}>Counter: {counter}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 30,
  },
  button: {
    backgroundColor: '#09d',
    padding: 10,
    borderRadius: 5,
  }
});
