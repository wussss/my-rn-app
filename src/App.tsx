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
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/FontAwesome';

import routes from './routes';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="welcome"
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName = '';
            if (route.name === 'my') {
              return <FIcon name="user" size={size} color={color} />;
            }
            if (route.name === 'hot') {
              iconName = 'whatshot';
            } else if (route.name === 'trend') {
              iconName = 'trending-up';
            } else if (route.name === 'star') {
              iconName = 'star';
            }
            return <MIcon name={iconName} size={size} color={color} />;
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
