// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import { FontAwesome } from '@expo/vector-icons';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// const HomePage = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />

//       <View style={styles.navbar}>
//         <Text style={styles.navbarTitle}>My App</Text>

//         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//           <FontAwesome name="sign-out" size={24} color="white" />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.content}>
//         <Text style={styles.title}>Welcome to My App</Text>
//         <Text style={styles.subtitle}>Explore the app and find what you need</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   navbar: {
//     flexDirection: 'row',
//     backgroundColor: '#fb5b5a',
//     height: 80,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//   },
//   navbarTitle: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 24,
//   },
//   content: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 18,
//     color: '#777',
//     textAlign: 'center',
//   },
// });

// export default HomePage;
import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import AllTab from './Home';
import PopularTab from './User';

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#999',
                tabBarIndicatorStyle: {
                    backgroundColor: '#000',
                    height: 3,
                },
                tabBarTabStyle: {
                    paddingVertical: 10,
                },
                tabBarLabelStyle: {
                    fontSize: 16,
                },
            }}
        >
            <Tab.Screen
                name="All"
                component={AllTab}
                options={{
                    tabBarLabel: 'All',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="ios-list" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Popular"
                component={PopularTab}
                options={{
                    tabBarLabel: 'Popular',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="ios-flame" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#fff',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    tabIndicator: {
        backgroundColor: '#fb5b5a',
    },
});

export default MyTabs;