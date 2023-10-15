import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

import WelcomeScreen from './component/ScreenPage';
import SignUp from './component/SignUP-IN/SignUp';
import SignIn from './component/SignUP-IN/SignIn';
import PlayerHome from './component/PlayerHome';

const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator  
      screenOptions={{ headerShown: false  }}
    initialRouteName="PlayerHome"
    >        
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="PlayerHome" component={PlayerHome}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
