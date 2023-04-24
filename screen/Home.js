import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage = ({ navigation }) => {
    const [user, setUser] = useState(null);
    console.log(user)
    useEffect(() => {
        const getUserData = async () => {
            const userData = await AsyncStorage.getItem('user');
            setUser(JSON.parse(userData));
        };
        getUserData();
    }, []);
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.navbar}>
                <Text style={styles.navbarTitle}>My App</Text>
                {user ? <Text>{user.name}</Text> : null}
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <FontAwesome name="sign-out" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome to My App</Text>
                <Text style={styles.subtitle}>Explore the app and find what you need</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    navbar: {
        flexDirection: 'row',
        backgroundColor: '#fb5b5a',
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    navbarTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: '#777',
        textAlign: 'center',
    },
});

export default HomePage;