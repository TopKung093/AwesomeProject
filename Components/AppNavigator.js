import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screen/Login';
import UserScreen from '../screen/User';
import HomePage from '../screen/Homepage';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
    );
}

export default AppNavigator;