import { StyleSheet, useColorScheme } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../constants/theme";

// Views
import UserView from "../../components/auth/UserView";

const DashboardLayout = () => {
  const scheme = useColorScheme() || "light";
  const t = theme[scheme];

  return (
    <UserView>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            borderTopColor: t.tabBarBorder,
            paddingTop: 10,
            height: 100,
          },
          tabBarActiveTintColor: t.tabBarActive,
          tabBarInactiveTintColor: t.tabBarInactive,
        }}
      >
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                name={focused ? "home" : "home-outline"}
                color={focused ? t.colors.iconColorFocused : t.colors.iconColor}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="town"
          options={{
            title: "Town",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                name={focused ? "person" : "person-outline"}
                color={focused ? t.colors.iconColorFocused : t.colors.iconColor}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="county"
          options={{
            title: "County",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                name={focused ? "people" : "people-outline"}
                color={focused ? t.colors.iconColorFocused : t.colors.iconColor}
              />
            ),
          }}
        />
      </Tabs>
    </UserView>
  );
};

export default DashboardLayout;

const styles = StyleSheet.create({});
