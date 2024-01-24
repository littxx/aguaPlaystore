import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../screens/Splash';

const Stack = createStackNavigator();

const Screen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Splash} options={} />
    </Stack.Navigator>
  );
};

export default Screen;
