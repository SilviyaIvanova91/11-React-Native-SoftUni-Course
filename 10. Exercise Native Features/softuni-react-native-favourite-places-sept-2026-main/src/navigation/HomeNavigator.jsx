import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import AddPlaceScreen from "../screens/AddPlaceScreen";
import MyPlacesScreen from "../screens/MyPlacesScreen";

const Stack = createStackNavigator();

export default function HomeNavigator() {
    
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="MyPlaces" component={MyPlacesScreen} />
            <Stack.Screen name="AddPlace" component={AddPlaceScreen} />
        </Stack.Navigator>
    );
}
