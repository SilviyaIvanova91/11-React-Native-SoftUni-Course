import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator";
import CartProvider from "./contexts/cart-context/CartProvider";

export default function App() {
  return (
    <CartProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}
