import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import loginlogo from '../assets/loginlogo.svg'
import ListIcon from '../assets/list.svg'

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <ListIcon />
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="email"
                    value="email"
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="password"
                    value="password"
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                />
                <TouchableOpacity
                    style={styles.button}>
                        <Text style={styles.buttonText}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.buttonOutline]}>
                        <Text style={styles.buttonOutlineText}>회원가입</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

 
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        marginTop: 15
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    button: {
        backgroundColor: 'black',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: 'black',
        fontWeight: '500',
        fontSize: 16
    }


})