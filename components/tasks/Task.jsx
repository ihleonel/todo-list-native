import { Chip } from "react-native-paper"

export default function Task({ task, remove }) {
  return (
    <Chip
      mode="outlined"
      onClose={() => remove(task)}
    >
      {task}
    </Chip>
  )
}
