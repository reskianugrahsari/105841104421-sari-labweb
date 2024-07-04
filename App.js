// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import ForgetPasswordPage from './ForgetPasswordPage';
import signupPage from './signupPage';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='ke halaman login' onPress={() => navigation.navigate('Login')} />
      <Button title='ke halaman forget password' onPress={() => navigation.navigate('ForgetPassword')} />
      <Button title='ke halaman sign up' onPress={() => navigation.navigate('Sign up')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordPage} />
        <Stack.Screen name="Sign up" component={signupPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;