import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon} from './Icon';
import {HomeTab} from './Home';

const Tab = createBottomTabNavigator();

const App = () => {
  const tabOptions = {
    headerShown: false,
  };

  const children: JSX.Element[] = [
    <Tab.Screen
      name="HomeTab"
      component={HomeTab}
      options={{
        title: 'Home',
        tabBarIcon: props => <HomeIcon {...props} />,
      }}
    />,
  ];

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={tabOptions}>{children}</Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
