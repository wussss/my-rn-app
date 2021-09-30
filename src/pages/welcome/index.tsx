import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    marginVertical: 60,
    marginHorizontal: 10,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    color: 'pink',
    fontSize: 30,
    fontWeight: 'bold' as 'bold',
  },
});
const Welcome = () => {
  return (
    <View style={styles.contain}>
      <Text style={styles.text}>welcome</Text>
    </View>
  );
};

export default Welcome;
