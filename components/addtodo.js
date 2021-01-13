import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                placeholderTextColor='#fff'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='add todo' color='#e00065'  />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        color: '#fff',
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#e00065',
    },
});