import { View, StyleSheet } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Provider as PaperProvider, DefaultTheme, MD3DarkTheme } from "react-native-paper"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default function Layout({children}) {
  const safeAreaInsets = useSafeAreaInsets()
  return (
    <View style={ styles.container }>
      <PaperProvider theme={DefaultTheme}>
          <View>
            { children }
          </View>
      </PaperProvider>
    </View>
  )
}
