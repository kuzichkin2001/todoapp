import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { DrawerActions } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

export default function Header({ navigation }) {

    const image = { uri: "https://assets.stickpng.com/images/588a64e0d06f6719692a2d10.png" };

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.button} onPress = {() => navigation.dispatch(DrawerActions.openDrawer())}><ImageBackground style={styles.image} source={image}></ImageBackground></TouchableOpacity>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#e00065',
        flexDirection: 'row',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
    },
    image: {
        width: 30,
        height: 30,
    },
    button: {
        flex: 0.6,
        paddingLeft: 20,
    }
});