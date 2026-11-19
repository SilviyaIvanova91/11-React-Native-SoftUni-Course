import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import RatingStars from './RatingStars';
import { colors } from '../constants/colors';

export default function PlaceCard({ place }) {
    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.85}>
            {/* Image placeholder - a real photo will be used later */}
            <View style={styles.image}>
                {/* <Text style={styles.imageEmoji}>{place.emoji}</Text> */}
                <Image source={{ uri: place.image_url }} style={{ width: '100%', height: '100%' }} />
                <View style={styles.categoryBadge}>
                    <Text style={styles.categoryText}>{place.category}</Text>
                </View>
            </View>

            <View style={styles.body}>
                <View style={styles.titleRow}>
                    <Text style={styles.title} numberOfLines={1}>{place.title}</Text>
                    <RatingStars rating={place.rating} size={13} />
                </View>

                <Text style={styles.location} numberOfLines={1}>📍 {place.location}</Text>
                <Text style={styles.description} numberOfLines={2}>{place.description}</Text>

                <Text style={styles.date}>Visited on {place.date}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.surface,
        borderRadius: 18,
        marginBottom: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3,
    },
    image: {
        height: 130,
        backgroundColor: colors.accentSoft,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageEmoji: {
        fontSize: 56,
    },
    categoryBadge: {
        position: 'absolute',
        top: 12,
        left: 12,
        backgroundColor: colors.surface,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 12,
    },
    categoryText: {
        fontSize: 12,
        fontWeight: '600',
        color: colors.primary,
    },
    body: {
        padding: 16,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        flex: 1,
        fontSize: 17,
        fontWeight: '700',
        color: colors.text,
        marginRight: 8,
    },
    location: {
        fontSize: 13,
        color: colors.textMuted,
        marginTop: 4,
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        color: colors.text,
        marginTop: 10,
    },
    date: {
        fontSize: 12,
        color: colors.textMuted,
        marginTop: 12,
    },
});
