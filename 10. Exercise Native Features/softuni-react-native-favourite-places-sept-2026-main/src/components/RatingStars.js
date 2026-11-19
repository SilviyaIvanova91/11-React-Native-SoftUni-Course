import { StyleSheet, Text, View } from 'react-native';

export default function RatingStars({ rating, max = 5, size = 14 }) {
    return (
        <View style={styles.row}>
            {Array.from({ length: max }, (_, index) => (
                <Text
                    key={index}
                    style={[styles.star, { fontSize: size }, index >= rating && styles.starEmpty]}
                >
                    ★
                </Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    star: {
        color: '#F5A524',
        marginRight: 2,
    },
    starEmpty: {
        color: '#D9DEE7',
    },
});
