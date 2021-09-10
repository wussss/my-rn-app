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
import {StyleSheet, Text, View, SectionList} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const mock = [
    {title: '淞虹路', data: ['通协小区', '红梅小区']},
    {title: '北新泾', data: ['广友小区', '虹康三期']},
    {title: '北新泾', data: ['广友小区', '虹康三期']},
    {title: '北新泾', data: ['广友小区', '虹康三期']},
    {title: '北新泾', data: ['广友小区', '虹康三期']},
    {title: '北新泾', data: ['广友小区', '虹康三期']},
  ];
  type Item = {
    title: number;
    data: string;
  };
  const render = (record: {item: Item}) => <Text>{record.item.data}</Text>;
  const [refreshing, setRefreshing] = useState(false);
  return (
    <View style={{margin: 100}}>
      <SectionList
        sections={mock}
        renderItem={({item}) => <Text>{item}</Text>}
        renderSectionHeader={({section: {title}}) => (
          <Text
            style={{
              fontSize: 20,
              marginVertical: 10,
              fontWeight: 'bold',
              paddingVertical: 10,
            }}>
            {title}
          </Text>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              borderTopColor: 'rbga(0,0,0,0.03)',
              borderWidth: 0.5,
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
