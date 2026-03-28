import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@react-native-vector-icons/ionicons';

import Details from '../../screens/pets/Details';
import List from '../../screens/pets/List';
import { COLORS } from '../../../assets/styles/colors';

const PetsStackNavigator = createStackNavigator();

const BackButton = ({ onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ marginLeft: 12, padding: 4 }}
    activeOpacity={0.7}
  >
    <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
  </TouchableOpacity>
);

const PetsStack = () => {
  return (
    <PetsStackNavigator.Navigator
      initialRouteName="List"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: COLORS.primary,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        headerBackTitleVisible: false,
        headerLeft: ({ canGoBack }) =>
          canGoBack ? <BackButton onPress={() => navigation.goBack()} /> : null,
      })}
    >
      <PetsStackNavigator.Screen
        name="List"
        component={List}
        options={{ headerShown: false }}
      />
      <PetsStackNavigator.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: 'Detalle' }}
      />
    </PetsStackNavigator.Navigator>
  );
};

export default PetsStack;
