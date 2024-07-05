import { useEffect } from "react";
import * as React from 'react';
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from "./index"
const Stack = createNativeStackNavigator();

export default function RootLayout() {

  const [fontsReady, fontsError] = useFonts({
    Trajan_ExtraLight: require("@/assets/fonts/TrajanPro3ExtraLight.ttf"),
    Trajan_Light: require("@/assets/fonts/TrajanPro3Light.ttf"),
    Trajan_Regular: require("@/assets/fonts/TrajanPro3Regular.ttf"),
    Trajan_SemiBold: require("@/assets/fonts/TrajanPro3SemiBold.ttf"),
    Trajan_Bold: require("@/assets/fonts/TrajanPro3Bold.ttf"),
  });

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
