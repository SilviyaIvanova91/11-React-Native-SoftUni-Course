import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors } from '../constants/colors';

export default function PrimaryButton({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 8,
        shadowColor: colors.primary,
        shadowOpacity: 0.3,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
    },
    text: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.white,
    },
});
