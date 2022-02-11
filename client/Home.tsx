import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SDUI } from './SDUI';

const Stack = createNativeStackNavigator();

export const HomeTab = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={SDUI}
      options={{
        headerLargeTitle: true,
      }}
      initialParams={{}}
    />
  </Stack.Navigator>
);
