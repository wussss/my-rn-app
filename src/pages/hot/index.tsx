import React, {memo, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {StyleSheet, Text} from 'react-native';

import {FlexView, Input, Button} from '../../components/StyledComp';
import {fetchGet} from '../../fetch';
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
  const [search, setSearch] = useState('');
  const [res, setRes] = useState<any>('');
  const goNext = () => {
    navigation.navigate('trend');
  };
  const goSearch = async () => {
    try {
      const data = await fetchGet('/search/repositories', {search});
      setRes(data.items[0].description);
    } catch (err: any) {
      setRes(err.message);
    }
  };
  return (
    <FlexView isPageContainer={true}>
      <FlexView dir="row">
        <Input
          value={search}
          onChangeText={setSearch}
          placeholder=" Search or jump to..."
          clearTextOnFocus={true}
        />
        <Icon name="arrowright" size={20} color="#333" />
      </FlexView>
      <Text>{res}</Text>
      <Button title={'查询'} onPress={goSearch}></Button>
    </FlexView>
  );
};

export default memo(Hot);
