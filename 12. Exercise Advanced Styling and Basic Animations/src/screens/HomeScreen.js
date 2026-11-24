import { ScrollView, StyleSheet, Text, View } from 'react-native';

import UserHeader from '../components/UserHeader';
import StatCard from '../components/StatCard';
import MenuButton from '../components/MenuButton';
import PlaceListItem from '../components/PlaceListItem';
import { colors } from '../constants/colors';
import useAuth from '../contexts/auth-context/useAuth';

export default function HomeScreen({ navigation }) {
    const { logout } = useAuth();


    return (
        <View style={styles.screen}>
            <UserHeader name="Alex Traveler" email="alex@favplaces.app" onLogout={logout} />

            <ScrollView
                style={styles.content}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                {/* Hero card */}
                <View style={styles.hero}>
                    <Text style={styles.heroEmoji}>🗺️</Text>
                    <Text style={styles.heroTitle}>Where to next?</Text>
                    <Text style={styles.heroSubtitle}>
                        Keep track of the places you love and never forget a great spot again.
                    </Text>
                </View>

                {/* Statistics */}
                <Text style={styles.sectionTitle}>Your stats</Text>
                <View style={styles.statsRow}>
                    <StatCard icon="📍" value="24" label="Places" />
                    <StatCard icon="🌍" value="7" label="Countries" />
                    <StatCard icon="⭐" value="4.6" label="Avg. rating" />
                </View>

                {/* Main actions */}
                <Text style={styles.sectionTitle}>Quick actions</Text>
                <MenuButton
                    icon="📚"
                    title="My Places"
                    subtitle="Browse all of your saved places"
                    variant="primary"
                    onPress={() => navigation.navigate("MyPlaces")}
                />
                <MenuButton
                    icon="➕"
                    title="Add New Place"
                    subtitle="Save a place you've just visited"
                    onPress={() => navigation.navigate("AddPlace")}
                />
                <MenuButton
                    icon="📊"
                    title="Statistics"
                    subtitle="See where you've been the most"
                    onPress={() => navigation.navigate("Statistics")}
                />

                {/* Recently added */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Recently added</Text>
                    <Text style={styles.sectionLink}>See all</Text>
                </View>
                <View style={styles.recentCard}>
                    <PlaceListItem emoji="🏰" title="Tsarevets Fortress" location="Veliko Tarnovo, Bulgaria" date="12 Nov" />
                    <PlaceListItem emoji="🏖️" title="Sunny Beach" location="Burgas, Bulgaria" date="28 Oct" />
                    <PlaceListItem emoji="⛰️" title="Seven Rila Lakes" location="Rila, Bulgaria" date="03 Oct" isLast />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        flex: 1,
    },
    contentContainer: {
        padding: 20,
        paddingBottom: 40,
    },
    hero: {
        backgroundColor: colors.accentSoft,
        borderRadius: 20,
        padding: 20,
        marginBottom: 24,
    },
    heroEmoji: {
        fontSize: 36,
        marginBottom: 8,
    },
    heroTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: colors.text,
        marginBottom: 6,
    },
    heroSubtitle: {
        fontSize: 14,
        lineHeight: 20,
        color: colors.textMuted,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    sectionTitle: {
        fontSize: 17,
        fontWeight: '700',
        color: colors.text,
        marginBottom: 12,
        marginTop: 4,
    },
    sectionLink: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.primary,
    },
    statsRow: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 24,
    },
    recentCard: {
        backgroundColor: colors.surface,
        borderRadius: 16,
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
});
