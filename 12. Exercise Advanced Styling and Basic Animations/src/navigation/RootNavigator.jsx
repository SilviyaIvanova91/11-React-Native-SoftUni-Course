import { createStackNavigator } from '@react-navigation/stack';
import useAuth from '../contexts/auth-context/useAuth';  

import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';

const Stack = createStackNavigator();

export default function RootNavigator() {
    const { isAuthenticated } = useAuth();
    
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAuthenticated
                ? <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
                : <Stack.Screen name="Auth" component={AuthNavigator} />    
            }
        </Stack.Navigator>
    );
}
