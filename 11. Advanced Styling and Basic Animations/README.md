> npx expo install expo-system-ui

{
"expo": {
"backgroundColor": "#ffffff",
"userInterfaceStyle": "light", --> authomatic
"ios": {
"backgroundColor": "#ffffff"
},
"android": {
"userInterfaceStyle": "light"
},
"plugins": ["expo-system-ui"]
}
}

{
"expo": {
"userInterfaceStyle": "automatic"
}
}

> npx expo install react-native-gesture-handler

> npx expo install react-native-reanimated react-native-worklets

> npx expo install @react-native-community/netinfo

Unit Testing

> npx expo install jest-expo jest @types/jest --dev

{
"scripts": {
"test": "jest --watchAll"
... }}
{
"jest": {
"preset": "jest-expo"
}
}

> npx expo install @testing-library/react-native --dev --legacy-peer-deps
> // npm i -D @testing-library/react-native --legacy-peer-deps
