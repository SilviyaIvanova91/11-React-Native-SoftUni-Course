import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors } from '../constants/colors';

export default function Chip({
    label,
    active = false,
    onPress,
}) {
    return (
        <TouchableOpacity
            style={[styles.chip, active && styles.chipActive]}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <Text style={[styles.label, active && styles.labelActive]}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    chip: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        marginRight: 8,
    },
    chipActive: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
    },
    label: {
        fontSize: 13,
        fontWeight: '600',
        color: colors.textMuted,
    },
    labelActive: {
        color: colors.white,
    },
});
