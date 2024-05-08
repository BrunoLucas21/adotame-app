import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import HomeScreen from "../screens/Home";
import FavoriteScreen from "../screens/Favorite";
import SettingScreen from "../screens/Setting";
import ProfileScreen from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarLabel: "",
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 55,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            position: 'absolute',
          },
          tabBarIconStyle: {
            marginTop: 10
          },
          tabBarActiveTintColor: "#934fec",
          tabBarInactiveTintColor: "#d4baf8",
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign
              name="heart"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "",
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 55,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            position: 'absolute',
          },
          tabBarIconStyle: {
            marginTop: 10
          },
          tabBarActiveTintColor: "#934fec",
          tabBarInactiveTintColor: "#d4baf8",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
          tabBarLabel: "",
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 55,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            position: 'absolute',
          },
          tabBarIconStyle: {
            marginTop: 10
          },
          tabBarActiveTintColor: "#934fec",
          tabBarInactiveTintColor: "#d4baf8",
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
            backgroundColor: "#fff",
            height: 55,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            position: 'absolute',
          },
          tabBarIconStyle: {
            marginTop: 10,
          },
          tabBarActiveTintColor: "#934fec",
          tabBarInactiveTintColor: "#d4baf8",
        }}
      />
    </Tab.Navigator>
  );
}
