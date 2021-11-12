import React from "react"
import { StyleSheet, View, ScrollView, Platform, StatusBar } from "react-native";
import {
  Pressable,
  Text,
  Box,
  HStack,
  Spacer,
  Flex,
  Center,
  NativeBaseProvider,
  Container,
} from "native-base"
import AdsList from "./src/views/AdsList";
import { justifyContent, marginLeft } from "styled-system";
import { SafeAreaView } from "react-native-safe-area-context";


export default function App() {
  const array = [
    {

      title: 'example title 1',
      subtitle: 'example subtitle 1',
    },
    {
      title: 'example title 2',
      subtitle: 'example subtitle 2',
    },
    {
      title: 'example title 3',
      subtitle: 'example subtitle 3',
    },
    {
      title: 'example title 4',
      subtitle: 'example subtitle 4',
    },
    
  ];

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Box style={styles.navbar}>
          <Text style={styles.text}>NAVBAR</Text>
        </Box>
          <ScrollView >
            <Box style={styles.subContainer}>
            {array.map((data) => {
              return (
                <AdsList title={data.title}/>
              )
            })}
            </Box>
          </ScrollView>
      </SafeAreaView>
      
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1D24'
  },
  subContainer: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  navbar: {
    height: 50,
    backgroundColor: '#E57212'
  },
  text: {
    color: 'white',
    display: 'flex',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 15
  }
});