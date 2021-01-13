import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, pressHandler }) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    item: {
        color: '#fff',
        padding: 16,
        marginTop: 16,
        borderRadius: 10,
        backgroundColor: '#e00065',
    }
});