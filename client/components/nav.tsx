/**
 * WIP
 * 
 * Think about:
 * - donut holes: create hole that renders SDUI from different urls
 * - actions: expose & hydrate dynamic actions from SDUI
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon} from '../Icon';
import {HomeTab} from '../Home';

const Tab = createBottomTabNavigator();

export type TabNavProps = {
  tabs: Record<string,TabProp>
}

export type TabProp = {
  // TODO
}

export const TabNav = () => {
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
