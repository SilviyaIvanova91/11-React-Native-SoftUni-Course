import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../constants/colors';

export default function PlaceListItem({ emoji, title, location, date, isLast = false }) {
    return (
        <View style={[styles.item, !isLast && styles.itemBorder]}>
            <View style={styles.thumb}>
                <Text style={styles.emoji}>{emoji}</Text>
            </View>

            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Text style={styles.location} numberOfLines={1}>📍 {location}</Text>
            </View>

            <Text style={styles.date}>{date}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
    },
    itemBorder: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.border,
    },
    thumb: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    emoji: {
        fontSize: 22,
    },
    info: {
        flex: 1,
    },
    title: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.text,
    },
    location: {
        fontSize: 12,
        color: colors.textMuted,
        marginTop: 2,
    },
    date: {
        fontSize: 12,
        color: colors.textMuted,
        marginLeft: 8,
    },
});
