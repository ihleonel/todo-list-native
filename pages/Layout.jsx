import { View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Provider as PaperProvider, Appbar } from "react-native-paper"

export default function Layout({children}) {
  const safeAreaInsets = useSafeAreaInsets()
  return (
    <PaperProvider>
      <StatusBar style="dark"/>

      <SafeAreaProvider>
        <View>
          { children }
        </View>
      </SafeAreaProvider>
    </PaperProvider>
  )
}
