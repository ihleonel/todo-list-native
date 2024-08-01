import { View, StyleSheet } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function Layout({children}) {
  const safeAreaInsets = useSafeAreaInsets()
  return (
    <SafeAreaProvider>
      <View style={{
        flex: 1,
        backgroundColor: '#3e3e3e',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: safeAreaInsets.top,
        paddingBottom: safeAreaInsets.bottom,
      }}>
        <StatusBar style="light"/>
        { children }
      </View>
    </SafeAreaProvider>
  )
}
