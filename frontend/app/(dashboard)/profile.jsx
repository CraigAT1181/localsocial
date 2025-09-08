import { StyleSheet, Text } from "react-native";

// Hooks
import { useUser } from "../../hooks/useUser";

// Comonents
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";
import ThemedText from "../../components/ThemedText";

const Profile = () => {
  const { user, logout } = useUser();

  const handleLogOut = async () => {
    await logout();
  };

  return (
    <ThemedView safe="true" style={styles.container}>
      <Text>{user.email}</Text>
      <Spacer />
      <ThemedButton onPress={handleLogOut}>
        <ThemedText variant="text" color="textOnPrimary">
          Log Out
        </ThemedText>
      </ThemedButton>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
