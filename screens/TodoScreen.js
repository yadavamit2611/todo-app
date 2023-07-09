import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const TodoScreen = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodo = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text, completed: false } });
      setText('');
    }
  };

  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const Item = ({element}) => {
    return(
    <View style={styles.task}>
      <Text onPress={() => toggleTodo(element.id)} style={{ textDecorationLine: element.completed ? 'line-through' : 'none'}}>
          {element.text}
        </Text>
    </View>
    );
    }

  return (
    <View style={styles.container}>
      <br/>
      <TextInput
        style={styles.inputstyle}
        onChangeText={(value) => setText(value)}
        value={text}
        placeholder='Enter a todo task!'
      />
      <br/>
      <Button onPress={addTodo} title="Add Todo" />
      <br/>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
            <Item element={item}/>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
    },
    inputstyle: 
    {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1, width: '80%',
      alignSelf:'center',
      textAlign:'center',
      color:'white' 
    },
    task: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      marginBottom: 5,
      },
  });

export default TodoScreen;