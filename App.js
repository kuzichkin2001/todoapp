import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

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

  const Drawer = createDrawerNavigator();

  function Feed({ navigation }) {
    return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed keyboard');
      }}>
        <View style={styles.container}>
          <Header navigation={ navigation } />
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
      </TouchableWithoutFeedback>
    );
  }
  
  function Notifications({ navigation }) {
    return (
      <View style={styles.container}>
        <Header navigation={ navigation } />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#211f1c' }}>
        <Text style={{color: '#fff', fontSize: 16}}>Notifications Screen</Text>
      </View>
      </View>
    );
  }

  function AboutUs({ navigation }) {
    return (
      <View style={styles.container}>
        <Header navigation={ navigation } />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#211f1c'}}>
          <Text style={{fontSize: 16, color: '#fff'}}>This app was done by Pasha and Ilia</Text>
        </View>
      </View>
    )
  }
  
  
function MyDrawer() {
  return (
    <Drawer.Navigator drawerStyle={{backgroundColor: '#211f1c'}} drawerContentOptions={{labelStyle: {color: '#fff'}, activeBackgroundColor: '#e00065'}}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="About Us" component={AboutUs} />
    </Drawer.Navigator>
  );
}

  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navi: {
    backgroundColor: '#000'
  },
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