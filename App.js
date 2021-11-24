import { StatusBar } from "native-base";
import React from "react"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import MainScreen from "./MainScreen";

export default function App() {

  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor={'#222739'}/>
      <MainScreen/>
    </SafeAreaProvider>
  )
}
