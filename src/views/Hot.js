import React from "react"
import { StyleSheet, View } from "react-native";
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
  Button
} from "native-base"
export default function Hot({navigation}) {

  return (
    <View style={styles.view}>
      <Box style={styles.container} p="5" rounded="none" bg="cyan.700">
        <HStack>
          <Text style={styles.text}>
            Hot
          </Text>
        </HStack>
        <HStack>
          <Text style={styles.text}>
            test
          </Text>
        </HStack>
      </Box>
    </View>
      
  )
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: '#1A1D24',
    flex: 1
  },
  container: {
    flexDirection: "column",
    width: '100%',
    margin: 7
  },
  text: {
    color: 'white'
  }
});