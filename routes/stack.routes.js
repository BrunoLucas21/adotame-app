import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/Welcome";
import TabRoutes from "./tab.routes";
import DetailsScreen from "../screens/Details";
import DonationScreen from "../screens/Donation";
import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/Register";
import ProfileScreen from "../screens/Profile";
import NotificationScreen from "../screens/Notification";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={TabRoutes} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Donation" component={DonationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
