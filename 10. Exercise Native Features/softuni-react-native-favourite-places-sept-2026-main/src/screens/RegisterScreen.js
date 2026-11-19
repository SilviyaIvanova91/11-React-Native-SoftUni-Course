import { StyleSheet, Text, Pressable } from 'react-native';
import { useState } from 'react';
import useAuth from '../contexts/auth-context/useAuth';

import AuthLayout from '../components/AuthLayout';
import FormInput from '../components/FormInput';
import PrimaryButton from '../components/PrimaryButton';

export default function RegisterScreen({ navigation }) {
    const { register } = useAuth(); 

    const [values, setValues] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }); 
    
    const changeHandler = (name, value) => {
        setValues(state => ({
            ...state,
            [name]: value
        }));
    };

    const submitHandler = async () => {
        console.log('submitHandler');
        await register(values.email, values.password, values.fullName);
        
    };

    return (
        <AuthLayout
            title="Create account"
            subtitle="Start saving the places you love"
            footer={
                <Text style={styles.footerText}>
                    Already have an account? 
                    <Pressable onPress={() => navigation.goBack()}>
                        <Text style={styles.footerLink}>Log In</Text>
                    </Pressable>
                </Text>
            }
        >
            <FormInput
                label="Full name"
                icon="👤"
                placeholder="Alex Traveler"
                autoCapitalize="words"
                autoComplete="name"
                value={values.fullName}
                onChangeText={(text) => changeHandler('fullName', text)}
            />
            <FormInput
                label="Email"
                icon="✉️"
                placeholder="you@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                value={values.email}
                onChangeText={(text) => changeHandler('email', text)}
            />
            <FormInput
                label="Password"
                icon="🔒"
                placeholder="At least 6 characters"
                secureTextEntry
                autoComplete="new-password"
                value={values.password}
                onChangeText={(text) => changeHandler('password', text)}
            />
            <FormInput
                label="Confirm password"
                icon="🔒"
                placeholder="Repeat your password"
                secureTextEntry
                autoComplete="new-password"
                value={values.confirmPassword}
                onChangeText={(text) => changeHandler('confirmPassword', text)}
            />

            <PrimaryButton title="Create Account" onPress={submitHandler} />
        </AuthLayout>
    );
}

const styles = StyleSheet.create({
    footerText: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.85)',
    },
    footerLink: {
        fontWeight: '700',
        color: '#FFFFFF',
    },
});
