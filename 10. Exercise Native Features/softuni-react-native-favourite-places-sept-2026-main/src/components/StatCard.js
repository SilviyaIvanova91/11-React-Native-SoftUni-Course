import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../constants/colors';

export default function StatCard({ icon, value, label }) {
    return (
        <View style={styles.card}>
            <Text style={styles.icon}>{icon}</Text>
            <Text style={styles.value}>{value}</Text>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: colors.surface,
        borderRadius: 16,
        paddingVertical: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    icon: {
        fontSize: 22,
        marginBottom: 6,
    },
    value: {
        fontSize: 20,
        fontWeight: '700',
        color: colors.text,
    },
    label: {
        fontSize: 12,
        color: colors.textMuted,
        marginTop: 2,
    },
});
