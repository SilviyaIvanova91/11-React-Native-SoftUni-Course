import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import PlaceCard from './PlaceCard';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Animated, { useAnimatedStyle, interpolate, Extrapolation } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../constants/colors';

function SwipeAction({ icon, label, color, onPress, progress }) {
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: progress.value }],
        // opacity: interpolate(
        //     progress.value,
        //     [0, 1],
        //     [0, 1],
        //     Extrapolation.CLAMP
        // ),
    }));

    return (
        <Animated.View
            style={[styles.action, { backgroundColor: color }, animatedStyle]}
        >
            <Pressable
                onPress={onPress}
            >
                <View style={styles.iconCircle}>
                    <Ionicons name={icon} size={20} color={colors.white} />
                </View>
                <Text style={styles.actionLabel}>{label}</Text>
            </Pressable>
        </Animated.View>
    );
}

export default function SwipeableCard({ onEdit, onDelete, ...props }) {
    const renderRightActions = (progress) => (
        <View style={styles.actions}>
            <SwipeAction icon="create-outline" label="Edit" progress={progress} color={colors.primary} onPress={onEdit} />
            <SwipeAction icon="trash-outline" label="Delete" progress={progress} color={colors.danger} onPress={onDelete} />
        </View>
    );

    return (
        <Swipeable renderRightActions={renderRightActions} overshootRight={false}>
            <PlaceCard {...props} />
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    actions: {
        width: 96,
        marginLeft: 10,
        marginBottom: 16, // matches PlaceCard's marginBottom so the actions line up with the card
        gap: 10,
    },
    action: {
        flex: 1,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3,
    },
    iconCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionLabel: {
        marginTop: 6,
        fontSize: 12,
        fontWeight: '600',
        color: colors.white,
        letterSpacing: 0.3,
    },
});
