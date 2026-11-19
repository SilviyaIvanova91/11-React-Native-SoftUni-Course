Instalation:

> npm install @react-navigation/native
> npx expo install react-native-screens react-native-safe-area-context
> npm install @react-navigation/stack
> npx expo install react-native-gesture-handler @react-native-masked-view/masked-view

> npx expo install expo-secure-store -> запазваме сесията правилно

    {

"expo": {
"plugins": [
[
"expo-secure-store",
{
"configureAndroidBackup": true,
"faceIDPermission": "Allow $(PRODUCT_NAME) to access your Face ID biometric data."
}
]
]
}
}

> npx expo install @react-native-community/datetimepicker

> npx expo install expo-location

> npx expo install expo-image-picker

> npx expo install expo-file-system

        {

"expo": {
"plugins": [
[
"expo-file-system",
{
"supportsOpeningDocumentsInPlace": true,
"enableFileSharing": true
}
]
]
}
}
