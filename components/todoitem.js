import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableHighlight } from 'react-native';

export default function TodoItem({ item, pressHandler, todoPressHandler }) {
    const [descVisible, setDescVisible] = useState(false);

    const Description = () => {
        return (
            <View style={displayDescription()}>
                <Text style={styles.description}>{item.description}</Text>
                <TouchableHighlight style={styles.todoDone} onPress={() => {
                    pressHandler(item.key);
                }}>
                    <Text style={styles.submit}>Done</Text>
                </TouchableHighlight>
            </View>
        );
    }

    const displayDescription = () => {
        if (descVisible)
        {
            return {
                backgroundColor: '#fff',
                borderRadius: 10,
                marginTop: 10,
                color: '#fff',
            }
        } else {
            return {
                display: 'none',
            }
        }
    }

    return (
        <TouchableOpacity style={styles.item} onPress={() => {
            setDescVisible(() => {
                return !descVisible;
            })
        }}>
            <Text style={styles.text}>{item.text}</Text>
            <Description />
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
        paddingTop: 10,
        paddingLeft: 10,
    },
    todoDone: {
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 10,
        backgroundColor: '#e00065',
        borderRadius: 10,
        width: 50,
        paddingVertical: 6,
        justifyContent: 'flex-end',
    },
    submit: {
        textAlign: 'center',
        color: '#fff',
    }
});