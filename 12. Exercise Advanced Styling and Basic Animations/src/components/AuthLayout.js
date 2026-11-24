import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { colors } from '../constants/colors';

export default function AuthLayout({ title, subtitle, children, footer }) {
    return (
        <KeyboardAvoidingView
            style={styles.screen}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                {/* Branding */}
                <View style={styles.brand}>
                    <View style={styles.logo}>
                        <Text style={styles.logoEmoji}>📍</Text>
                    </View>
                    <Text style={styles.appName}>Favourite Places</Text>
                    <Text style={styles.tagline}>Every place you love, in one spot</Text>
                </View>

                {/* Form card */}
                <View style={styles.card}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>

                    {children}
                </View>

                {/* Footer (switch between login / register) */}
                <View style={styles.footer}>{footer}</View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 70,
        paddingBottom: 40,
    },
    brand: {
        alignItems: 'center',
        marginBottom: 28,
    },
    logo: {
        width: 72,
        height: 72,
        borderRadius: 22,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 14,
    },
    logoEmoji: {
        fontSize: 36,
    },
    appName: {
        fontSize: 26,
        fontWeight: '800',
        color: colors.white,
    },
    tagline: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 4,
    },
    card: {
        backgroundColor: colors.surface,
        borderRadius: 24,
        padding: 24,
        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 6 },
        elevation: 6,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: colors.text,
    },
    subtitle: {
        fontSize: 14,
        color: colors.textMuted,
        marginTop: 4,
        marginBottom: 22,
    },
    footer: {
        marginTop: 24,
        alignItems: 'center',
    },
});
