import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors } from '../constants/colors';

export default function UserHeader({ name, email, onLogout }) {
    const initials = name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
        <View style={styles.header}>
            <View style={styles.userRow}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{initials}</Text>
                </View>

                <View style={styles.userInfo}>
                    <Text style={styles.greeting}>Welcome back,</Text>
                    <Text style={styles.name} numberOfLines={1}>{name}</Text>
                    <Text style={styles.email} numberOfLines={1}>{email}</Text>
                </View>

                <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7} onPress={onLogout}>
                    <Text style={styles.logoutIcon}>⎋</Text>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primary,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 16 : 60,
        paddingBottom: 24,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    userRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
    },
    avatarText: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.primary,
    },
    userInfo: {
        flex: 1,
    },
    greeting: {
        fontSize: 13,
        color: 'rgba(255, 255, 255, 0.75)',
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.white,
    },
    email: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.75)',
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.18)',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        marginLeft: 8,
    },
    logoutIcon: {
        fontSize: 14,
        color: colors.white,
        marginRight: 4,
    },
    logoutText: {
        fontSize: 13,
        fontWeight: '600',
        color: colors.white,
    },
});
