import { TextInput, HelperText } from 'react-native-paper';

export default function InputText({ addTask, error }) {
  const [text, setText] = useState('')

  return (
    <>
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
    </>
  )
}
