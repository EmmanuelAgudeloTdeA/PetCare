import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Details from '../screens/pets/Details';
import List from '../screens/pets/List';

const PetsStackNavigator = createStackNavigator();

const PetsStack = () => {
  return (
    <PetsStackNavigator.Navigator
      initialRouteName="List"
      options={{
        headerBackTitleVisible: false,
      }}
    >
      <PetsStackNavigator.Screen name="List" component={List} />
      <PetsStackNavigator.Screen
        name="Details"
        component={Details}
        options={{
          headerBackTitle: true,
          headerTitle: 'Details',
        }}
      />
    </PetsStackNavigator.Navigator>
  );
};

export default PetsStack;
