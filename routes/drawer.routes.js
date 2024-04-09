import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather, Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/Home";
import DonationScreen from "../screens/Donation";
import AddPetScreen from "../screens/AddPet";
import ProfileScreen from "../screens/Profile";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false,  }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
          drawerLabel: 'Início'
        }}
      />
      <Drawer.Screen
        name="Donation"
        component={DonationScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Feather name="heart" size={size} color={color} />
          ),
          drawerLabel: 'Doação'
        }}
      />
      <Drawer.Screen
        name="AddPet"
        component={AddPetScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Feather name="plus" size={size} color={color} />
          ),
          drawerLabel: 'Adicionar Animal'
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
          drawerLabel: 'Perfil'
        }}
      />
    </Drawer.Navigator>
  );
}
