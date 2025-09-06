import { StyleSheet, useColorScheme } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../constants/theme";

const DashboardLayout = () => {
  const scheme = useColorScheme() || "light";
  const t = theme[scheme];

  return (
    <Tabs screenOptions={{}}>
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
  );
};

export default DashboardLayout;

const styles = StyleSheet.create({});
