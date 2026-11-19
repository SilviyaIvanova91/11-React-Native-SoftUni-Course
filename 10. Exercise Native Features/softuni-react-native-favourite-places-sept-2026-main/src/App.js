import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './navigation/RootNavigator';
import AuthProvider from './contexts/auth-context/AuthProvider';

export default function App() {
    return (
        <>
            <StatusBar style="light" />

            <NavigationContainer>
                <AuthProvider>
                    <RootNavigator />
                </AuthProvider>
            </NavigationContainer>
        </>
    );
}
