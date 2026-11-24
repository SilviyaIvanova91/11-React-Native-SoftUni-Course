import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import useAuth from '../contexts/auth-context/useAuth';

import AuthLayout from '../components/AuthLayout';
import FormInput from '../components/FormInput';
import PrimaryButton from '../components/PrimaryButton';

import { colors } from '../constants/colors';
import { Link } from '@react-navigation/native';

export default function LoginScreen() {
    const { login } = useAuth();

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const changeHandler = (name, value) => {
        setValues(state => ({
            ...state,
            [name]: value
        }));
    };

    const submitHandler = () => {
        console.log('submitHandler', values);
        login(values.email, values.password);
    };

    return (
        <AuthLayout
            title="Welcome back"
            subtitle="Log in to see your favourite places"
            footer={
                <Text style={styles.footerText}>
                    Don't have an account? <Link style={styles.footerLink} screen="Register">Register</Link>
                </Text>
            }
        >
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
                placeholder="Enter your password"
                secureTextEntry
                autoComplete="password"
                value={values.password}
                onChangeText={(text) => changeHandler('password', text)}
            />

            <TouchableOpacity style={styles.forgotWrapper} activeOpacity={0.7}>
                <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>

            <PrimaryButton title="Log In" onPress={submitHandler} />
        </AuthLayout>
    );
}

const styles = StyleSheet.create({
    forgotWrapper: {
        alignSelf: 'flex-end',
        marginTop: -4,
        marginBottom: 16,
    },
    forgotText: {
        fontSize: 13,
        fontWeight: '600',
        color: colors.primary,
    },
    footerText: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.85)',
    },
    footerLink: {
        fontWeight: '700',
        color: colors.white,
    },
});
