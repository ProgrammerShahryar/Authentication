import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { showData } from './ShowDataMethod';
import styles from './styles';

const DataList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    showData(setData);
  }, []);

  return (
    <View style={styles.sLayout}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.sItem}>
            <Text style={styles.sTitle}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};
  
export default DataList;