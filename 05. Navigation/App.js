import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CatalogScreen from "./screens/CatalogScreen";
import DetailsScreen from "./screens/DetailsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  SafeAreaView,
  useSafeAreaInsets,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "rgb(60, 164, 149)",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home Page",
          // headerTitle: () => <Text>Display Title</Text>
          headerShown: true,
          headerTintColor: "#ebebeb", // Override option

          // orientation: 'landscape',
          headerSearchBarOptions: {
            placeholder: "Search...",
          },
          headerRight: () => (
            <Text style={{ color: "white", fontWeight: "bold" }}>Right</Text>
          ),
        }}
      />

      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Catalog" component={CatalogScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

const NestedStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Catalog" component={CatalogScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

const BottomTabs = createBottomTabNavigator();
const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="about" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="CatalogTab"
        component={NestedStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="images-outline" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </BottomTabs.Navigator>
  );
};

const TopTabs = createMaterialTopTabNavigator();
const TopTabsNavigation = () => {
  const insets = useSafeAreaInsets();

  return (
    <TopTabs.Navigator
      screenOptions={{ tabBarStyle: { paddingTop: insets.top } }}
    >
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={
          {
            // tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />
          }
        }
      />
      <BottomTabs.Screen
        name="About"
        component={AboutScreen}
        options={
          {
            // tabBarIcon: ({ color, size }) => <Ionicons name="about" size={size} color={color} />
          }
        }
      />
      <BottomTabs.Screen
        name="Catalog"
        component={CatalogScreen}
        options={
          {
            // tabBarIcon: ({ color, size }) => <Ionicons name="images-outline" size={size} color={color} />,
          }
        }
      />
    </TopTabs.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Catalog" component={CatalogScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        {/* <StackNavigator /> */}
        <BottomTabsNavigator />
        {/* <TopTabsNavigation /> */}
        {/* <DrawerNavigator /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
