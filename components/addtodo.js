import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, Modal, TouchableHighlight, Alert } from 'react-native';
 
export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');
    const [description, setDescription] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
 
    const titleChangeHandler = (val) => {
        setText(val);
    }
 
    const descriptionChangeHandler = (val) => {
        setDescription(val);
    }
 
    return (
        <View style={styles.addButton}>
            <Modal
                animationType=''
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}
            >
                <View style={styles.centeredModal}>
                    <View style={styles.modalView}>
                        <TextInput
                            placeholder='new todo...'
                            style={styles.input}
                            onChangeText={titleChangeHandler}
                        />
                        <TextInput 
                            placeholder='write some description...'
                            multiline={true}
                            style={styles.input}
                            onChangeText={descriptionChangeHandler}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableHighlight onPress={() => {
                                setModalVisible(!modalVisible);
                            }} style={styles.submit}>
                                <Text style={{ fontSize: 18, color: '#fff' }}>Cancel</Text>
                            </TouchableHighlight><TouchableHighlight onPress={() => {
                                if (text.length > 3 && description.length != 0)
                                {
                                    console.log('okey');
                                    setModalVisible(!modalVisible);
                                    submitHandler(text, description);
                                } else {
                                    Alert.alert('OOPS!', 'You wrote something incorrectly', [
                                        { text: 'Understood', onPress: () => console.log('alert closed')},
                                    ])
                                }
                            }} style={styles.submit}>
                                <Text style={{ fontSize: 18, color: '#fff' }}>Submit</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
            <TouchableHighlight onPress={() => {
                setModalVisible(true);
                setText('');
                setDescription('');
            }} style={styles.button}>
                <Text style={{ color: '#fff', fontSize: 40, fontWeight: '200', paddingBottom: 3 }}>+</Text>
            </TouchableHighlight>
        </View>
    );
}
 
const styles = StyleSheet.create({
    input: {
        width: 200,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#e00065',
    },
    addButton: {
        justifyContent: 'flex-end',
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: '#e00065',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 1000,
        elevation: 5,
    },
    submit: {
        marginTop: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 20,
        backgroundColor: '#e00065',
        borderRadius: 16,
    }
});