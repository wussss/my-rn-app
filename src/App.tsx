/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import routes from './routes';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="welcome"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = '';

            if (route.name === 'hot') {
              iconName = focused ? 'flame-outline' : 'flame-outline';
            } else if (route.name === 'trend') {
              iconName = focused ? 'airplane-outline' : 'airplane-outline';
            } else if (route.name === 'star') {
              iconName = focused ? 'at-outline' : 'at-outline';
            } else if (route.name === 'my') {
              iconName = focused
                ? 'chatbox-ellipses-outline'
                : 'chatbox-ellipses-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}>
        {routes.map(item => (
          <Tab.Screen {...item} key={item.name} />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
