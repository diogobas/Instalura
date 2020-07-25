import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from './src/Components/Views/Feed/Feed';
import Login from './src/Components/Views/Login/Login';
import { Platform } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ 
            title: 'Login',
            headerShown: Boolean(Platform.OS === 'ios')
          }}
        />
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={({ route }) => {
            return { 
              title: route.params.user,
              headerShown: Boolean(Platform.OS === 'ios')
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
