import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';

import ScreenHeader from '../components/ScreenHeader';
import PlaceCard from '../components/PlaceCard';
import Chip from '../components/Chip';
import { colors } from '../constants/colors';
import { categories, places } from '../data/places';
import { placeApi } from '../api';

export default function MyPlacesScreen({
    navigation,
}) {
    const [myPlaces, setMyPlaces] = useState(places);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const data = await placeApi.getAll();
                setMyPlaces(data);
            } catch (error) {
                console.error('Failed to fetch places:', error);
            }
        };

        fetchPlaces();
    }, []);

    
    return (
        <View style={styles.screen}>
            <ScreenHeader title="My Places" subtitle={`${myPlaces.length} saved places`} rightIcon="⇅" />

            <FlatList
                data={myPlaces}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PlaceCard place={item} />}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <>
                        {/* Search */}
                        <View style={styles.searchBar}>
                            <Text style={styles.searchIcon}>🔍</Text>
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Search places..."
                                placeholderTextColor={colors.textMuted}
                            />
                        </View>

                        {/* Category filters */}
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={styles.chips}
                        >
                            {categories.map((category, index) => (
                                <Chip key={category} label={category} active={index === 0} />
                            ))}
                        </ScrollView>
                    </>
                }
            />

            {/* Floating "Add" button */}
            <TouchableOpacity style={styles.fab} activeOpacity={0.85} onPress={() => navigation.navigate('AddPlace')}>
                <Text style={styles.fabIcon}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
    },
    listContent: {
        padding: 20,
        paddingBottom: 100,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.surface,
        borderRadius: 14,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: colors.border,
    },
    searchIcon: {
        fontSize: 16,
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 13,
        fontSize: 15,
        color: colors.text,
    },
    chips: {
        marginTop: 14,
        marginBottom: 18,
        marginHorizontal: -20,
        paddingHorizontal: 20,
    },
    fab: {
        position: 'absolute',
        right: 20,
        bottom: 30,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.primary,
        shadowOpacity: 0.4,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 6,
    },
    fabIcon: {
        fontSize: 32,
        lineHeight: 34,
        color: colors.white,
        fontWeight: '300',
    },
});
