import * as SecureStore from 'expo-secure-store';
import { useState, useEffect } from "react";

export default function useSecureState(key, initialValue) {
    const [state, setState] = useState(initialValue);

    // Load state from SecureStore on mount
    useEffect(() => {
        const loadState = async () => {
            try {
                const storedState = await SecureStore.getItemAsync(key);
                if (storedState !== null) {
                    setState(JSON.parse(storedState));
                }
            } catch (error) {
                console.error("Failed to load state from SecureStore", error);
            }
        };

        loadState();
    }, [key]);

    // Save state to SecureStore whenever it changes
    useEffect(() => {
        const saveState = async () => {
            try {
                await SecureStore.setItemAsync(key, JSON.stringify(state));
            } catch (error) {
                console.error("Failed to save state to SecureStore", error);
            }
        };

        saveState();
    }, [key, state]);

    return [state, setState];
}
