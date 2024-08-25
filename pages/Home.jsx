import { Appbar } from "react-native-paper"
import { useRouter } from "expo-router"

export default function Index() {
  const router = useRouter()

  return (
    <Appbar.Header>
      <Appbar.Action icon="menu"/>
      <Appbar.Content title="Menu"/>
      <Appbar.Action icon="bookmark" onPress={() => router.push('/tasks')}/>
      <Appbar.Action icon="account-circle"/>
    </Appbar.Header>
  )
}
