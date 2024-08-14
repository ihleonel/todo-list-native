import { PaperProvider, MD3LightTheme as DefaultTheme } from "react-native-paper"

export default function Layout({children}) {
  return (
    <PaperProvider theme={DefaultTheme}>
      {children}
    </PaperProvider>
  )
}
