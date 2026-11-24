import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView} from 'react-native-gesture-handler'

import RootNavigator from './navigation/RootNavigator';
import AuthProvider from './contexts/auth-context/AuthProvider';

export default function App() {
    return (
        <>
            <StatusBar style="light" />

            <GestureHandlerRootView style={{ flex: 1 }}>
                <NavigationContainer>
                    <AuthProvider>
                        <RootNavigator />
                    </AuthProvider>
                </NavigationContainer>
            </GestureHandlerRootView>
        </>
    );
}
