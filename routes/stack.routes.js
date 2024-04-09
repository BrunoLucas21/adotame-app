import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/Welcome";
import TabRoutes from "./tab.routes";
import DetailsScreen from "../screens/Details";
import AddPetScreen from "../screens/AddPet";
import DonationScreen from "../screens/Donation";
import DrawerRoutes from "./drawer.routes";
import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/Register";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
            <Stack.Screen 
                name="Welcome"
                component={WelcomeScreen}
            />
            <Stack.Screen 
                name="Home"
                component={TabRoutes}
            />
            <Stack.Screen 
                name="Details"
                component={DetailsScreen}
            />
            <Stack.Screen 
                name="AddPet"
                component={AddPetScreen}
            />
            <Stack.Screen 
                name="Donation"
                component={DonationScreen}
            />
            <Stack.Screen 
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen 
                name="Register"
                component={RegisterScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}