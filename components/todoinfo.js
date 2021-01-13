import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';

export default function TodoInfo() {
    const [description, setDescription] = useState('');

    return (
        <Text>{description}</Text>
    );

}

const styles = StyleSheet.create({
    description: {
        display: 'none',
        padding: 16,
    }
});