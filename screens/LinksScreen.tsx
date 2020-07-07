import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';

import StorybookUIRoot from '../storybook';
 
export default function TabTwoScreen() {
  return (
    // <View style={styles.container}>
      <StorybookUIRoot />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
