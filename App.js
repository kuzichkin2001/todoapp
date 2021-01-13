import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, DrawerLayoutAndroid, Button, TouchableHighlight } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text : 'buy coffee', description: 'go to the shop and buy some tasty coffee for myself :)', key: '1' },
    { text : 'create an app', description: 'Create a todo app that Lesha will admire :>', key: '2' },
    { text: 'play some game', description: 'play some new games in your steam library...', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text, description) => {
    if (text.length > 1 &&  description.length != 0) {
      setTodos((prevTodos) => {
        return [
          { text: text, description: description, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS!', 'Todos must be at least 2 chars long', [
        { text: 'Understood', onPress: () => console.log('alert closed')}
      ]);
    }
  }

  const drawer = useRef(null);
  const drawerPosition = 'left';
  const navigationView = () => (
      <View style={[styles.drawer, styles.navigationContainer]}>
        <Text style={styles.drawerHeader}>PASHA AND ILIA APP</Text>
        <TouchableHighlight style={styles.buttons} onPress = {() => drawer.current.closeDrawer()}><Text style={styles.text}>My Todos</Text></TouchableHighlight>
        <TouchableHighlight style={styles.buttons} onPress = {() => drawer.current.closeDrawer()}><Text style={styles.text}>ToDos Done</Text></TouchableHighlight>
        <TouchableHighlight style={styles.buttons} onPress = {() => drawer.current.closeDrawer()}><Text style={styles.text}>About Us</Text></TouchableHighlight>
      </View>
    );

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}
      >
      <View style={styles.container}>
        <Header drawer={drawer} />
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={ item } pressHandler={pressHandler}/>
              )}
            />
          </View>
          <AddTodo submitHandler={submitHandler} />
        </View>
      </View>
      </DrawerLayoutAndroid>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211f1c',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
  navigationContainer: {
    backgroundColor: "#211f1c"
  },
  drawer: {
    flex: 1,
    padding: 16,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  },
  buttons: {
    padding: 16,
    marginBottom: 10,
    backgroundColor: "#e00065"
  },
  text: {
    color: "#fff",
  },
  drawerHeader: {
    color: "#fff",
    paddingBottom: 20,
    fontSize: 25,
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    fontWeight: 'bold',
  }
});
