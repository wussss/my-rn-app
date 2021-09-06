/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const data = [
    {id: 1, text: '通协小区'},
    {id: 2, text: '广友小区'},
    {id: 3, text: '红梅小区'},
    {id: 31, text: '通协小区'},
    {id: 40, text: '广友小区'},
    {id: 33, text: '红梅小区'},
    {id: 12, text: '通协小区'},
    {id: 32, text: '广友小区'},
    {id: 53, text: '红梅小区'},
    {id: 16, text: '通协小区'},
    {id: 72, text: '广友小区'},
    {id: 83, text: '红梅小区'},
    {id: 21, text: '通协小区'},
    {id: 42, text: '广友小区'},
    {id: 56, text: '红梅小区'},
    {id: 71, text: '通协小区'},
    {id: 82, text: '广友小区'},
    {id: 35, text: '红梅小区'},
    {id: 13, text: '通协小区'},
    {id: 22, text: '广友小区'},
    {id: 36, text: '红梅小区'},
    {id: 19, text: '通协小区'},
    {id: 23, text: '广友小区'},
    {id: 30, text: '红梅小区'},
  ];
  type Item = {
    id: number;
    text: string;
  };
  const render = (record: {item: Item}) => <Text>{record.item.text}</Text>;
  const [refreshing, setRefreshing] = useState(false);
  return (
    <View style={{marginTop: 100}}>
      <Text style={{fontSize: 20}}>hello world</Text>
      <FlatList
        data={data}
        renderItem={render}
        refreshing={refreshing}
        keyExtractor={item => String(item.id)}
        onRefresh={() => {
          setRefreshing(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
