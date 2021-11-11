import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AdvertTile from "./component/AdvertTile";

export default function App() {
  return (
    <View style={styles.container}>
      <AdvertTile/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040412',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
