import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import Home from '../screens/Home';
import Register from '../screens/Register';
import PetsStack from './Stack';

// Colors
import { COLORS } from '../../assets/styles/Colors';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pets" component={PetsStack} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
