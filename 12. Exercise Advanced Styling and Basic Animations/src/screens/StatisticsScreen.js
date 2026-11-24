import { ScrollView, StyleSheet, Text, View } from 'react-native';

import ScreenHeader from '../components/ScreenHeader';
import StatCard from '../components/StatCard';
import RatingStars from '../components/RatingStars';
import { colors } from '../constants/colors';

// Static demo numbers - they will be calculated from real data later.
const countries = [
    { name: 'Bulgaria', flag: '🇧🇬', count: 12 },
    { name: 'Italy', flag: '🇮🇹', count: 5 },
    { name: 'Greece', flag: '🇬🇷', count: 3 },
    { name: 'France', flag: '🇫🇷', count: 2 },
    { name: 'Spain', flag: '🇪🇸', count: 2 },
];

const monthly = [
    { month: 'Jun', count: 2 },
    { month: 'Jul', count: 5 },
    { month: 'Aug', count: 7 },
    { month: 'Sep', count: 3 },
    { month: 'Oct', count: 4 },
    { month: 'Nov', count: 3 },
];

const categoryStats = [
    { name: 'Nature', emoji: '🌲', count: 8 },
    { name: 'City', emoji: '🏙️', count: 6 },
    { name: 'History', emoji: '🏛️', count: 4 },
    { name: 'Beach', emoji: '🏖️', count: 4 },
    { name: 'Food', emoji: '🍝', count: 2 },
];

const maxCountry = Math.max(...countries.map((c) => c.count));
const maxMonthly = Math.max(...monthly.map((m) => m.count));
const CHART_BAR_MAX_HEIGHT = 100;

export default function StatisticsScreen() {
    return (
        <View style={styles.screen}>
            <ScreenHeader title="Statistics" subtitle="Your travel in numbers" />

            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                {/* Summary */}
                <View style={styles.statsRow}>
                    <StatCard icon="📍" value="24" label="Places" />
                    <StatCard icon="🌍" value="7" label="Countries" />
                    <StatCard icon="⭐" value="4.6" label="Avg. rating" />
                </View>

                {/* Monthly activity */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Places added per month</Text>
                    <View style={styles.chart}>
                        {monthly.map((item, index) => {
                            const isCurrent = index === monthly.length - 1;
                            return (
                                <View key={item.month} style={styles.chartColumn}>
                                    <Text style={styles.chartValue}>{item.count}</Text>
                                    <View
                                        style={[
                                            styles.chartBar,
                                            { height: (item.count / maxMonthly) * CHART_BAR_MAX_HEIGHT },
                                            isCurrent && styles.chartBarActive,
                                        ]}
                                    />
                                    <Text style={styles.chartLabel}>{item.month}</Text>
                                </View>
                            );
                        })}
                    </View>
                </View>

                {/* Countries */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Top countries</Text>
                    {countries.map((country) => (
                        <View key={country.name} style={styles.barRow}>
                            <Text style={styles.flag}>{country.flag}</Text>
                            <View style={styles.barInfo}>
                                <View style={styles.barLabelRow}>
                                    <Text style={styles.barLabel}>{country.name}</Text>
                                    <Text style={styles.barCount}>{country.count}</Text>
                                </View>
                                <View style={styles.barTrack}>
                                    <View
                                        style={[
                                            styles.barFill,
                                            { width: `${(country.count / maxCountry) * 100}%` },
                                        ]}
                                    />
                                </View>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Categories */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>By category</Text>
                    <View style={styles.categoryGrid}>
                        {categoryStats.map((category) => (
                            <View key={category.name} style={styles.categoryItem}>
                                <Text style={styles.categoryEmoji}>{category.emoji}</Text>
                                <Text style={styles.categoryCount}>{category.count}</Text>
                                <Text style={styles.categoryName}>{category.name}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Highlights */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Highlights</Text>

                    <View style={styles.highlightRow}>
                        <Text style={styles.highlightIcon}>🏆</Text>
                        <View style={styles.highlightInfo}>
                            <Text style={styles.highlightLabel}>Top rated place</Text>
                            <Text style={styles.highlightValue}>Seven Rila Lakes</Text>
                        </View>
                        <RatingStars rating={5} size={12} />
                    </View>

                    <View style={styles.highlightRow}>
                        <Text style={styles.highlightIcon}>🔥</Text>
                        <View style={styles.highlightInfo}>
                            <Text style={styles.highlightLabel}>Most active month</Text>
                            <Text style={styles.highlightValue}>August 2026</Text>
                        </View>
                        <Text style={styles.highlightBadge}>7 places</Text>
                    </View>

                    <View style={[styles.highlightRow, styles.highlightRowLast]}>
                        <Text style={styles.highlightIcon}>🗓️</Text>
                        <View style={styles.highlightInfo}>
                            <Text style={styles.highlightLabel}>First place added</Text>
                            <Text style={styles.highlightValue}>Acropolis</Text>
                        </View>
                        <Text style={styles.highlightBadge}>May 2026</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const cardShadow = {
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        padding: 20,
        paddingBottom: 40,
    },
    statsRow: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 16,
    },
    card: {
        backgroundColor: colors.surface,
        borderRadius: 18,
        padding: 18,
        marginBottom: 16,
        ...cardShadow,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.text,
        marginBottom: 16,
    },

    // Monthly chart
    chart: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: 150,
    },
    chartColumn: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    chartValue: {
        fontSize: 12,
        fontWeight: '600',
        color: colors.textMuted,
        marginBottom: 4,
    },
    chartBar: {
        width: 22,
        borderRadius: 8,
        backgroundColor: colors.accentSoft,
    },
    chartBarActive: {
        backgroundColor: colors.primary,
    },
    chartLabel: {
        fontSize: 12,
        color: colors.textMuted,
        marginTop: 6,
    },

    // Country bars
    barRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14,
    },
    flag: {
        fontSize: 24,
        marginRight: 12,
    },
    barInfo: {
        flex: 1,
    },
    barLabelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    barLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.text,
    },
    barCount: {
        fontSize: 13,
        color: colors.textMuted,
    },
    barTrack: {
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.background,
        overflow: 'hidden',
    },
    barFill: {
        height: '100%',
        borderRadius: 4,
        backgroundColor: colors.primary,
    },

    // Categories
    categoryGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    categoryItem: {
        width: '31%',
        flexGrow: 1,
        backgroundColor: colors.background,
        borderRadius: 14,
        paddingVertical: 14,
        alignItems: 'center',
    },
    categoryEmoji: {
        fontSize: 24,
    },
    categoryCount: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.text,
        marginTop: 4,
    },
    categoryName: {
        fontSize: 12,
        color: colors.textMuted,
    },

    // Highlights
    highlightRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.border,
    },
    highlightRowLast: {
        borderBottomWidth: 0,
        paddingBottom: 0,
    },
    highlightIcon: {
        fontSize: 22,
        marginRight: 12,
    },
    highlightInfo: {
        flex: 1,
    },
    highlightLabel: {
        fontSize: 12,
        color: colors.textMuted,
    },
    highlightValue: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.text,
        marginTop: 2,
    },
    highlightBadge: {
        fontSize: 12,
        fontWeight: '600',
        color: colors.primary,
        backgroundColor: colors.accentSoft,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
});
