import { Image, useColorScheme } from "react-native";

// Images
import DarkLogo from "../assets/darkBig.png";
import LightLogo from "../assets/lightBig.png";

const ThemedLogo = () => {
  const colorScheme = useColorScheme();

  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

  return <Image source={logo} />;
};

export default ThemedLogo;
