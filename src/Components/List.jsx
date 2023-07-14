import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';

import ListItems from '/ListItems';


const List = ({ items, handleSelect }) => {
  const renderItem = ({ item }) => {
    return <ListItems item={item} handleSelect={handleSelect} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});