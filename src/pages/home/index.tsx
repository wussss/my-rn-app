import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return (
    <View style={styles.contain}>
      <Text style={styles.text}>hello world</Text>
    </View>
  );
};

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

export default Home;
