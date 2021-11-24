import React from "react"
import { StyleSheet, Text, View } from "react-native";
import {
  NativeBaseProvider,
} from "native-base"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Hottest from "./src/views/Hottest";
import Hot from "./src/views/Hot";
import New from "./src/views/New";
import MostCommented from "./src/views/MostCommented";
import { useSafeArea } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export default function MainScreen() {
const insets = useSafeArea();
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

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      card: "#1A1D24",
      primary: "#ff4d00",
      text: "white"
    },
  };

  return (
    <NativeBaseProvider>
        <NavigationContainer theme={MyTheme}>
            <Tab.Navigator tabBarOptions={{
                style: {
                    marginTop: insets.top,
                },
                labelStyle: {
                  fontSize: 12,
                  fontWeight: 'bold'
                },
            }}>
                <Tab.Screen 
                  name="Hottest"
                  component={Hottest}
                  />
                <Tab.Screen 
                  name="Hot"
                  component={Hot}
                  />
                <Tab.Screen 
                  name="New"
                  component={New}
                  />
                <Tab.Screen 
                  name={`Commented`}
                  component={MostCommented}
                  options={{
                    
                  }}
                />
            </Tab.Navigator>
        </NavigationContainer>
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