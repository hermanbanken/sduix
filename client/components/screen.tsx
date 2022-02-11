import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Spacings} from 'react-native-ui-lib';

export const Screen = ({children}: {children: JSX.Element}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.view} showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  view: {padding: Spacings.s4, flexGrow: 4},
});
