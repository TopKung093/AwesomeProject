// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import { FontAwesome } from '@expo/vector-icons';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import MyComponent from '../Components/List';

// const HomePage = ({ navigation }) => {
//     const [user, setUser] = useState(null);
//     useEffect(() => {
//         const getUserData = async () => {
//             const userData = await AsyncStorage.getItem('user');
//             setUser(JSON.parse(userData));
//         };
//         getUserData();
//     }, []);
//     return (
//         <View style={styles.container}>
//             <StatusBar style="auto" />
//             <View style={styles.navbar}>
//                 <Text style={styles.navbarTitle}>My App</Text>
//                 {user ? <Text>{user.name}</Text> : null}
//                 <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//                     <FontAwesome name="sign-out" size={24} color="white" />
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.content}>
//                 <MyComponent />
//                 <Text style={styles.title}>Welcome to My App</Text>
//                 <Text style={styles.subtitle}>Explore the app and find what you need</Text>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     navbar: {
//         flexDirection: 'row',
//         backgroundColor: '#fb5b5a',
//         height: 80,
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingHorizontal: 20,
//     },
//     navbarTitle: {
//         color: 'white',
//         fontWeight: 'bold',
//         fontSize: 24,
//     },
//     content: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingHorizontal: 20,
//     },
//     title: {
//         fontSize: 32,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         textAlign: 'center',
//     },
//     subtitle: {
//         fontSize: 18,
//         color: '#777',
//         textAlign: 'center',
//     },
// });

// export default HomePage;
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, TextInput, } from "react-native";
import MyIcon from "../Components/MyIcon";
import { useNavigation } from "@react-navigation/native";

export default function HomeIconMenu() {
    const navigation = useNavigation();
    return (
        <View style={{ marginHorizontal: 20, marginTop: -50, padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 20, backgroundColor: 'white' }}>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <MyIcon title="Home" icon='home' size={30} color="black" />
                <MyIcon title="User" icon="user" size={30} color="black" onPress={() => { navigation.navigate("User"); }} />
                <MyIcon title="Cart" icon="shopping-cart" size={30} color="black" onPress={() => { navigation.navigate("Product"); }} />
                <MyIcon title="xxx" name="question" size={30} color="orange" />
            </View>
        </View>
    );
}