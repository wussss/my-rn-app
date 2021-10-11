import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

let timer: any = null;
const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 30,
  },
});
const Welcome = (props: any) => {
  useEffect(() => {
    timer = setTimeout(() => {
      props.navigation.navigate('hot');
    }, 2000);
    return () => {
      timer && clearTimeout(timer);
    };
  }, []);
  return (
    <View style={styles.contain}>
      <Text style={styles.text}>Welcome to my app!</Text>
      <Icon name="dog" size={50}></Icon>
    </View>
  );
};

export default Welcome;
