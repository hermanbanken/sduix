import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Spacings, Text, View} from 'react-native-ui-lib';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

export const HomeTab = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerLargeTitle: true,
      }}
      initialParams={{}}
    />
  </Stack.Navigator>
);

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.view} showsVerticalScrollIndicator={false}>
        <Text>Hello World</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  view: {padding: Spacings.s4, flexGrow: 4},
});
