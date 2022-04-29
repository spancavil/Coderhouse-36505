import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../Styles/colors'
import { auth } from '../../Firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginView, setLoginView] = useState(false);

    const handleSignup = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential)
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            })
            .finally(()=> {
                setEmail("");
                setPassword("");
            })
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
            .finally(()=> {
                setEmail("");
                setPassword("");
            })
    }

    return (
        <View style={styles.container}>
            <View>
                <Text>{loginView ? 'Login' : 'Registro de usuario'}</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Ingrese email"
                ></TextInput>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Ingrese password"
                ></TextInput>
                {loginView ?
                    <TouchableOpacity onPress={handleLogin}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={handleSignup}>
                        <Text>Sign up</Text>
                    </TouchableOpacity>
                }
                <View>
                    <Text>{loginView ? 'No tienes usuario?' : 'Ya tienes usuario?'}</Text>
                    <TouchableOpacity
                        onPress={() => setLoginView(!loginView)}>
                        <Text>
                            {loginView ? 'sign up' : 'sign in'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Auth

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightViolet
    },
    input: {

    },
})