import React, {memo} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

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
  navigate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
const Hot = (props: any) => {
  const {navigation} = props;
  return (
    <View style={styles.contain}>
      <Text style={styles.text}>This is hot page!</Text>
      <TouchableOpacity
        style={styles.navigate}
        onPress={() => {
          navigation.navigate('my');
        }}>
        <Text>Go to Next Page </Text>
        <Icon name="arrowright" size={20} color="#5DADE2" />
      </TouchableOpacity>
    </View>
  );
};

export default memo(Hot);
