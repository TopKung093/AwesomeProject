import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        try {
            const response = await fetch('http://192.168.1.40:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const userData = await response.json();
            console.log(userData)
            Alert.alert('Success', 'Login Success.');
            await AsyncStorage.setItem('user', JSON.stringify(userData));
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert('Failed', 'Invalid User.');
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Shopee</Text>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#fb5b5a',
        marginBottom: 40,
    },
    inputView: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
    },
    inputText: {
        height: 50,
        color: 'black',
    },
    loginBtn: {
        width: '80%',
        backgroundColor: '#fb5b5a',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
    },
});


export default LoginScreen;
// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

// const LoginScreen = ({ navigation }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async () => {
//         try {
//             await fetch('http://192.168.1.40:3000/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ username, password })
//             });
//             Alert.alert('Success', 'Login Success.');
//             navigation.navigate('User');
//         } catch (error) {
//             Alert.alert('Failed', 'Invalid User.');
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.logo}>My App</Text>

//             <View style={styles.inputView}>
//                 <TextInput
//                     style={styles.inputText}
//                     placeholder="Email"
//                     placeholderTextColor="#003f5c"
//                     value={email}
//                     onChangeText={(text) => setEmail(text)}
//                 />
//             </View>

//             <View style={styles.inputView}>
//                 <TextInput
//                     style={styles.inputText}
//                     placeholder="Password"
//                     placeholderTextColor="#003f5c"
//                     secureTextEntry={true}
//                     value={password}
//                     onChangeText={(text) => setPassword(text)}
//                 />
//             </View>

//             <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
//                 <Text style={styles.loginText}>LOGIN</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     logo: {
//         fontWeight: 'bold',
//         fontSize: 50,
//         color: '#fb5b5a',
//         marginBottom: 40,
//     },
//     inputView: {
//         width: '80%',
//         backgroundColor: '#fff',
//         borderRadius: 25,
//         height: 50,
//         marginBottom: 20,
//         justifyContent: 'center',
//         padding: 20,
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 8,
//         },
//         shadowOpacity: 0.46,
//         shadowRadius: 11.14,
//         elevation: 17,
//     },
//     inputText: {
//         height: 50,
//         color: 'black',
//     },
//     loginBtn: {
//         width: '80%',
//         backgroundColor: '#fb5b5a',
//         borderRadius: 25,
//         height: 50,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: 40,
//         marginBottom: 10,
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 8,
//         },
//         shadowOpacity: 0.46,
//         shadowRadius: 11.14,
//         elevation: 17,
//     },
//     loginText: {
//         color: 'white',
//         fontWeight: 'bold',
//     },
// });

// export default LoginScreen;