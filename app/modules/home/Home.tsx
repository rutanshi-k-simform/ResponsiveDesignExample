import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Home = () => {
  const insets = useSafeAreaInsets();

  const [textValue, setTextValue] = useState('');
  const [list, setList] = useState<string[]>([]);

  const addTask = () => {
    if (textValue !== '') {
      setList(pre => [...pre, textValue]);
      setTextValue('');
    }
  };

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.taskContainer}>
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.headerPercentage,
          {paddingTop: insets.top, paddingBottom: insets.bottom},
        ]}>
        <Text style={styles.font}>My TaskList</Text>
      </View>
      <View style={styles.bodyPercentage}>
        <View style={styles.textInputContainer}>
          <TextInput
            value={textValue}
            onChangeText={setTextValue}
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.addButton} onPress={addTask}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList data={list} renderItem={renderItem} style={styles.flatList} />
      </View>
      <View style={styles.footerPercentage}>
        <Text style={styles.font}>Footer</Text>
      </View>
    </View>
  );
};

export default Home;
