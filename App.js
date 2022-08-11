import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./components/home"
import { createAppContainer, MainNavigator } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import Books from "./components/books"
import Select from "./components/select"
import React from 'react';
import Blist from './components/blist'

export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style={{ flex: 1 }}>

      <NavigationContainer>
        <MainNavigator.Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
          <MainNavigator.Screen name="home" component={Home} />
          <MainNavigator.Screen name="books" component={Books} />
          <MainNavigator.Screen name="select" component={Select} />
          <MainNavigator.Screen name="blist" component={Blist} />

        </MainNavigator.Navigator>
      </NavigationContainer>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});





