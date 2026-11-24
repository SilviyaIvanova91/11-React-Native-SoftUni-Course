import { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import ScreenHeader from '../components/ScreenHeader';
import RatingStars from '../components/RatingStars';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../constants/colors';
import { placeApi } from '../api';
import { getErrorMessage } from '../utils/error.utils';

const formatDate = (value) => {
    if (!value) return '—';

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return String(value);

    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
};

export default function PlaceDetailsScreen({ route, navigation }) {
    const { placeId } = route.params;

    const [place, setPlace] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() => {
        let isActive = true;

        const fetchPlace = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const data = await placeApi.getOne(placeId);
                if (!isActive) return;

                if (data) {
                    setPlace(data);
                } else {
                    setError('This place could not be found.');
                }
            } catch (err) {
                if (isActive) setError(getErrorMessage(err));
            } finally {
                if (isActive) setIsLoading(false);
            }
        };

        fetchPlace();

        return () => {
            isActive = false;
        };
    }, [placeId, reloadKey]);

    if (isLoading) {
        return (
            <View style={styles.screen}>
                <ScreenHeader title="Place details" />
                <View style={styles.centered}>
                    <ActivityIndicator size="large" color={colors.primary} />
                </View>
            </View>
        );
    }

    if (error || !place) {
        return (
            <View style={styles.screen}>
                <ScreenHeader title="Place details" />
                <View style={styles.centered}>
                    <Text style={styles.errorEmoji}>😕</Text>
                    <Text style={styles.errorText}>{error ?? 'Something went wrong.'}</Text>
                    <View style={styles.retryWrapper}>
                        <PrimaryButton title="Try again" onPress={() => setReloadKey((key) => key + 1)} />
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.screen}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Hero image */}
                <View style={styles.hero}>
                    {place.image_url ? (
                        <Image source={{ uri: place.image_url }} style={styles.heroImage} resizeMode="cover" />
                    ) : (
                        <Text style={styles.heroEmoji}>{place.emoji ?? '📍'}</Text>
                    )}

                    <View style={styles.heroOverlay} />

                    <TouchableOpacity
                        style={styles.backButton}
                        activeOpacity={0.7}
                        onPress={() => navigation.goBack()}
                        accessibilityRole="button"
                        accessibilityLabel="Go back"
                    >
                        <Text style={styles.backIcon}>‹</Text>
                    </TouchableOpacity>

                    {place.category && (
                        <View style={styles.categoryBadge}>
                            <Text style={styles.categoryText}>{place.category}</Text>
                        </View>
                    )}
                </View>

                {/* Main info card */}
                <View style={[styles.card, styles.cardOverlap]}>
                    <Text style={styles.title}>{place.title}</Text>

                    <View style={styles.ratingRow}>
                        <RatingStars rating={place.rating ?? 0} size={20} />
                        <Text style={styles.ratingText}>{place.rating ?? 0}/5</Text>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.infoRow}>
                        <View style={styles.infoIcon}>
                            <Text style={styles.infoEmoji}>📍</Text>
                        </View>
                        <View style={styles.infoBody}>
                            <Text style={styles.infoLabel}>Location</Text>
                            <Text style={styles.infoValue}>{place.location || '—'}</Text>
                        </View>
                    </View>

                    <View style={styles.infoRow}>
                        <View style={styles.infoIcon}>
                            <Text style={styles.infoEmoji}>📅</Text>
                        </View>
                        <View style={styles.infoBody}>
                            <Text style={styles.infoLabel}>Date of visit</Text>
                            <Text style={styles.infoValue}>{formatDate(place.date)}</Text>
                        </View>
                    </View>
                </View>

                {/* Description */}
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>About this place</Text>
                    <Text style={styles.description}>
                        {place.description || 'No description added yet.'}
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const HERO_HEIGHT = 300;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scrollContent: {
        paddingBottom: 40,
    },
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    errorEmoji: {
        fontSize: 48,
        marginBottom: 12,
    },
    errorText: {
        fontSize: 15,
        color: colors.textMuted,
        textAlign: 'center',
        marginBottom: 16,
    },
    retryWrapper: {
        alignSelf: 'stretch',
    },
    hero: {
        height: HERO_HEIGHT,
        backgroundColor: colors.accentSoft,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heroImage: {
        ...StyleSheet.absoluteFill,
        width: '100%',
        height: '100%',
    },
    heroEmoji: {
        fontSize: 96,
    },
    heroOverlay: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
    },
    backButton: {
        position: 'absolute',
        top: Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) + 12 : 56,
        left: 16,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backIcon: {
        fontSize: 28,
        lineHeight: 30,
        color: colors.white,
        marginTop: -2,
    },
    categoryBadge: {
        position: 'absolute',
        bottom: 36,
        left: 20,
        backgroundColor: colors.surface,
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 14,
    },
    categoryText: {
        fontSize: 13,
        fontWeight: '600',
        color: colors.primary,
    },
    card: {
        backgroundColor: colors.surface,
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 20,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3,
    },
    cardOverlap: {
        marginTop: -24,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: colors.text,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    ratingText: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.textMuted,
        marginLeft: 8,
    },
    divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: colors.border,
        marginVertical: 16,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    infoIcon: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: colors.accentSoft,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    infoEmoji: {
        fontSize: 18,
    },
    infoBody: {
        flex: 1,
    },
    infoLabel: {
        fontSize: 12,
        color: colors.textMuted,
    },
    infoValue: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.text,
        marginTop: 2,
    },
    sectionTitle: {
        fontSize: 17,
        fontWeight: '700',
        color: colors.text,
        marginBottom: 10,
    },
    description: {
        fontSize: 15,
        lineHeight: 23,
        color: colors.text,
    },
});
