import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

// Components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import Spacer from "../../components/Spacer";

import ThemedLoader from "../../components/ThemedLoader";

const Login = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText variant="title" color="text">
        Login working!
      </ThemedText>
      <Spacer height="100" />
      <ThemedText variant="text" color="text">
        Don't have an account yet?
      </ThemedText>
      <Link href={"/register"} asChild>
        <ThemedButton bg="muted">
          <Text style={{ color: "#ffffff" }}>Register</Text>
        </ThemedButton>
      </Link>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
