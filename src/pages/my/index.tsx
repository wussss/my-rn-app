import React, {memo, useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {asyncBatch} from '../../store/action';
import {RootState, Dispatch} from '../../store';

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
interface Props {
  times: number;
  asyncBatch: () => void;
}
const My = (props: Props) => {
  return (
    <View style={styles.contain}>
      <Text style={styles.text}>This is my page!</Text>
      <Text>{props.times}</Text>
      <TouchableOpacity onPress={props.asyncBatch}>
        <Text>batch</Text>
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = (state: RootState) => ({
  times: state.my.times,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  asyncBatch: () => {
    dispatch(asyncBatch() as any);
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(memo(My));
