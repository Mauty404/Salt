import React from "react"
import { StyleSheet } from "react-native";
import {
  Pressable,
  Text,
  Box,
  HStack,
  Spacer,
  Flex,
  Center,
  NativeBaseProvider,
} from "native-base"
export default function AddsList({title, subtitle}) {
  return (
      <Box style={styles.container} p="5" rounded="none" bg="cyan.700">
        <HStack>
        <Text style={styles.text}>
          {title}
        </Text>
        </HStack>
        <HStack>
        <Text style={styles.text}>
          {subtitle}
        </Text>
        </HStack>
      </Box>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: '100%',
    marginBottom: 5
  },
  text: {
    color: 'white'
  }
});