import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/Home";
import ChatScreen from "../screens/Chat";
import FavoriteScreen from "../screens/Favorite";
import SettingScreen from "../screens/Setting";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color="white" />
          ),
          tabBarLabel: "Início",
          tabBarStyle: {
            backgroundColor: "#56409e",
            height: 60,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            margin: 10,
            position: "absolute",
          },
          tabBarLabelStyle: {
            color: "#fff",
            bottom: 4,
          },
          tabBarIconStyle: {
            top: 3,
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={size}
              color="white"
            />
          ),
          tabBarLabel: "Chat",
          tabBarStyle: {
            backgroundColor: "#56409e",
            height: 60,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            margin: 10,
            position: "absolute",
          },
          tabBarLabelStyle: {
            color: "#fff",
            bottom: 4,
          },
          tabBarIconStyle: {
            top: 3,
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="heart" size={size} color="white" />
          ),
          tabBarLabel: "Favoritos",
          tabBarStyle: {
            backgroundColor: "#56409e",
            height: 60,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            margin: 10,
            position: "absolute",
          },
          tabBarLabelStyle: {
            color: "#fff",
            bottom: 4,
          },
          tabBarIconStyle: {
            top: 3,
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="settings" size={size} color="white" />
          ),
          tabBarLabel: "Configuração",
          tabBarStyle: {
            backgroundColor: "#56409e",
            height: 60,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            margin: 10,
            position: "absolute",
          },
          tabBarLabelStyle: {
            color: "#fff",
            bottom: 4,
          },
          tabBarIconStyle: {
            top: 3,
          },
        }}
      />
    </Tab.Navigator>
  );
}
