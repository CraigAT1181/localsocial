import { useColorScheme, TextInput } from "react-native";
import { theme } from "../constants/theme";

const ThemedTextInput = ({ style, ...props }) => {
  const scheme = useColorScheme() || "light";
  const t = theme[scheme];

  return (
    <TextInput
      style={[
        {
          backgroundColor: t.colors.overlay,
          color: t.colors.text,
          paddingHorizontal: 20,
          borderRadius: 6,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedTextInput;
