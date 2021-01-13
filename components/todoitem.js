import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, pressHandler, todoPressHandler }) {

    return (
        <TouchableOpacity style={styles.item} onPress={() => {
            pressHandler(item.key);
        }}>
            <Text style={styles.text}>{item.text}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderRadius: 10,
        backgroundColor: '#e00065',
    },
    text: {
        color: '#fff',
    },
    description: {
        color: '#fff',
        marginTop: 10,
        display: 'none',
    },
});