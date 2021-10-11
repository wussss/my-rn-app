import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold' as 'bold',
  },
});
const My = () => {
  return (
    <View style={styles.contain}>
      <Text style={styles.text}>This is my page!</Text>
    </View>
  );
};

export default memo(My);
