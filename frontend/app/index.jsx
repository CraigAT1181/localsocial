import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

// Components
import Spacer from "../components/Spacer";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import ThemedButton from "../components/ThemedButton";

const Index = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText variant="title" color="text">
        Local Social
      </ThemedText>
      <Spacer height="40" />
      <Link href={"/login"} asChild>
        <ThemedButton>
          <Text>Login</Text>
        </ThemedButton>
      </Link>
      <Spacer />
      <Link href={"/register"} asChild>
        <ThemedButton bg="muted">
          <Text>Register</Text>
        </ThemedButton>
      </Link>
      <Spacer height="100" />

      <Link href="/town">
        <ThemedText>Our new Home page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
