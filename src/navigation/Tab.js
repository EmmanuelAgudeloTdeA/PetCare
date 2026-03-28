import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@react-native-vector-icons/ionicons';

import Home from '../screens/Home';
import Register from '../screens/Register';
import Tips from '../screens/Tips';
import PetsStack from '../navigation/stack/Stack';
import { COLORS } from '../../assets/styles/colors';

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Inicio: { active: 'home', inactive: 'home-outline' },
  Mascotas: { active: 'paw', inactive: 'paw-outline' },
  Registrar: { active: 'add-circle', inactive: 'add-circle-outline' },
  Consejos: { active: 'bulb', inactive: 'bulb-outline' },
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons = TAB_ICONS[route.name];
          const iconName = focused ? icons.active : icons.inactive;
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarStyle: {
          backgroundColor: COLORS.card,
          borderTopColor: COLORS.border,
          borderTopWidth: 1,
          paddingBottom: 6,
          paddingTop: 6,
          height: 62,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Mascotas" component={PetsStack} />
      <Tab.Screen name="Registrar" component={Register} />
      <Tab.Screen name="Consejos" component={Tips} />
    </Tab.Navigator>
  );
};

export default MyTabs;
