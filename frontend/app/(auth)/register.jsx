import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

// Components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import Spacer from "../../components/Spacer";

const Register = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText variant="title" color="text">
        Register working!
      </ThemedText>
      <Spacer height="100" />
      <ThemedText variant="text" color="text">
        Already have an account?
      </ThemedText>
      <Link href={"/login"} asChild>
        <ThemedButton bg="muted">
          <Text style={{ color: "#ffffff" }}>Login</Text>
        </ThemedButton>
      </Link>
    </ThemedView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
