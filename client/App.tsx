import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HomeIcon } from './Icon';
import { HomeTab } from './Home';

const Tab = createBottomTabNavigator();

const App = () => {
  const tabOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={tabOptions}>
        <Tab.Screen
          name="HomeTab"
          component={HomeTab}
          options={{
            title: 'Home',
            tabBarIcon: props => <HomeIcon {...props} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
