import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import loginlogo from '../assets/loginlogo.svg'
import ListIcon from '../assets/list.svg'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    const handleSignup = async() => {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log('user', user);
    
    };

    const handleLogin = () => {
        console.log(error.message);
    };
    
    return (
        <View style={styles.container}>
            <ListIcon />
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="이메일"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="비밀번호"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}>
                        <Text style={styles.buttonText}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignup}
                    style={[styles.button, styles.buttonOutline]}>
                        <Text style={styles.buttonOutlin}>회원가입</Text>
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