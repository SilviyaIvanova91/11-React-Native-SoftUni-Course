import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../constants/colors';

export default function ScreenHeader({ title, subtitle, rightIcon }) {
    const navigation = useNavigation();
    
    return (
        <View style={styles.header}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.iconButton} activeOpacity={0.7} onPress={() => navigation.goBack()}>
                    <Text style={styles.backIcon}>‹</Text>
                </TouchableOpacity>

                <View style={styles.titleWrapper}>
                    <Text style={styles.title} numberOfLines={1}>{title}</Text>
                    {subtitle && <Text style={styles.subtitle} numberOfLines={1}>{subtitle}</Text>}
                </View>

                {rightIcon ? (
                    <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                        <Text style={styles.rightIcon}>{rightIcon}</Text>
                    </TouchableOpacity>
                ) : (
                    <View style={styles.iconPlaceholder} />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primary,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 12 : 56,
        paddingBottom: 18,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.18)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconPlaceholder: {
        width: 40,
        height: 40,
    },
    backIcon: {
        fontSize: 28,
        lineHeight: 30,
        color: colors.white,
        marginTop: -2,
    },
    rightIcon: {
        fontSize: 18,
        color: colors.white,
    },
    titleWrapper: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.white,
    },
    subtitle: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.75)',
        marginTop: 2,
    },
});
