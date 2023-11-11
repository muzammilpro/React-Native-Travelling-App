import { StyleSheet } from 'react-native'
import { NativeBaseProvider, Text, Box } from "native-base"
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StartScreen1 from './src/screens/StartScreen1'
import Login from './src/screens/Login'
import StartScreen2 from './src/screens/StartScreen2'
import StartScreen3 from './src/screens/StartScreen3'
import StartScreen4 from './src/screens/StartScreen4'



const Stack = createNativeStackNavigator()

const App = () => {
    return (
        
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="StartScreen1" component={StartScreen1} />
                <Stack.Screen name="StartScreen2" component={StartScreen2} />
                <Stack.Screen name="StartScreen3" component={StartScreen3} />
                <Stack.Screen name="StartScreen4" component={StartScreen4} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default App

const styles = StyleSheet.create({})