import { ActivityIndicator, useColorScheme } from "react-native";
import { theme } from "../constants/theme";
import ThemedView from "./ThemedView";

const ThemedLoader = () => {
  const scheme = useColorScheme() || "light";
  const t = theme[scheme];

  const colorValue = t.colors.primary;

  return (
    <ThemedView>
      <ActivityIndicator size="large" color={colorValue} />
    </ThemedView>
  );
};

export default ThemedLoader;
