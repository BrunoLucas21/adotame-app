import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
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
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarLabel: "",
          tabBarStyle: {
            backgroundColor: "#978dcc",
            height: 60,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            margin: 8,
            position: "absolute",
          },
          tabBarLabelStyle: {
            color: "#fff",
            bottom: 4,
          },
          tabBarIconStyle: {
            marginTop: 10
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray"
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign
              name="message1"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "",
          tabBarStyle: {
            backgroundColor: "#978dcc",
            height: 60,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            margin: 8,
            position: "absolute",
          },
          tabBarLabelStyle: {
            color: "#fff",
            bottom: 4,
          },
          tabBarIconStyle: {
            marginTop: 10
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray"
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
          tabBarLabel: "",
          tabBarStyle: {
            backgroundColor: "#978dcc",
            height: 60,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            margin: 8,
            position: "absolute",
          },
          tabBarLabelStyle: {
            color: "#fff",
            bottom: 4,
          },
          tabBarIconStyle: {
            marginTop: 10
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray"
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="setting" size={size} color={color} />
          ),
          tabBarLabel: "",
          tabBarStyle: {
            backgroundColor: "#978dcc",
            height: 60,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            margin: 8,
            position: "absolute",
          },
          tabBarLabelStyle: {
            color: "#fff",
            bottom: 4,
          },
          tabBarIconStyle: {
            marginTop: 10,
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray"
        }}
      />
    </Tab.Navigator>
  );
}
