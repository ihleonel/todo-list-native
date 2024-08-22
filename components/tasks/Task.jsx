import { Chip } from "react-native-paper"

export default function Task({ task, remove }) {
  return (
    <Chip
      style={{ marginTop: 10}}
      mode="outlined"
      onClose={() => remove(task)}
    >
      {task}
    </Chip>
  )
}
