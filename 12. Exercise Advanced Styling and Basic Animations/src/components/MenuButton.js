import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors } from '../constants/colors';

export default function MenuButton({ icon, title, subtitle, variant = 'default', onPress }) {
    const isPrimary = variant === 'primary';

    return (
        <TouchableOpacity
            style={[styles.button, isPrimary && styles.buttonPrimary]}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <View style={[styles.iconWrapper, isPrimary && styles.iconWrapperPrimary]}>
                <Text style={styles.icon}>{icon}</Text>
            </View>

            <View style={styles.textWrapper}>
                <Text style={[styles.title, isPrimary && styles.textPrimary]}>{title}</Text>
                <Text style={[styles.subtitle, isPrimary && styles.subtitlePrimary]}>{subtitle}</Text>
            </View>

            <Text style={[styles.chevron, isPrimary && styles.textPrimary]}>›</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    buttonPrimary: {
        backgroundColor: colors.primary,
    },
    iconWrapper: {
        width: 46,
        height: 46,
        borderRadius: 12,
        backgroundColor: colors.accentSoft,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
    },
    iconWrapperPrimary: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    icon: {
        fontSize: 22,
    },
    textWrapper: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.text,
    },
    subtitle: {
        fontSize: 13,
        color: colors.textMuted,
        marginTop: 2,
    },
    textPrimary: {
        color: colors.white,
    },
    subtitlePrimary: {
        color: 'rgba(255, 255, 255, 0.8)',
    },
    chevron: {
        fontSize: 28,
        color: colors.textMuted,
        marginLeft: 8,
    },
});
