import { Provider as PaperProvider, DefaultTheme, MD3DarkTheme } from "react-native-paper"

export default function Layout({children}) {
  return (
    <PaperProvider theme={DefaultTheme}>
      {children}
    </PaperProvider>
  )
}
