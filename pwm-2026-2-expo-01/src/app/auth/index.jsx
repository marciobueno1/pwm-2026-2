import { Link } from "expo-router";
import { Text, StyleSheet, View } from "react-native";

export default function AuthPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Autenticação</Text>
      <Link href="/auth/profile">Profile</Link>
      <Link href="/auth/login">Log In</Link>
      <Link href="/auth/logout">Log Out</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  title: {
    fontSize: 40,
  },
});
