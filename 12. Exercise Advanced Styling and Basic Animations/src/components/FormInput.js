import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';

import { colors } from '../constants/colors';

export default function FormInput({ label, icon, type = 'default', onAction, ...inputProps }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <View style={[styles.inputWrapper, inputProps.multiline && styles.inputWrapperMultiline]}>
                <Pressable onPress={onAction}><Text style={[styles.icon, inputProps.multiline && styles.iconMultiline]}>{icon}</Text></Pressable>
                <TextInput
                    style={[styles.input, inputProps.multiline && styles.inputMultiline]}
                    placeholderTextColor={colors.textMuted}
                    keyboardType={type}
                    {...inputProps}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 13,
        fontWeight: '600',
        color: colors.text,
        marginBottom: 6,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.background,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 12,
        paddingHorizontal: 14,
    },
    icon: {
        fontSize: 16,
        marginRight: 10,
    },
    inputWrapperMultiline: {
        alignItems: 'flex-start',
    },
    iconMultiline: {
        marginTop: 14,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
    input: {
        flex: 1,
        paddingVertical: 14,
        fontSize: 15,
        color: colors.text,
    },
});
