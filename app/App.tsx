import { useEffect } from "react";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from "./index"
const Stack = createNativeStackNavigator();
export default function RootLayout() {
  useEffect(() =>{
    console.log("Root layout")
  })
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
