import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../screens/Splash';

const Stack = createStackNavigator();

const PConfig = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Splash} name="Splash" options={{}} />
    </Stack.Navigator>
  );
};

export default PConfig;
