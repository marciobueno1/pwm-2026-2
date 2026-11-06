import { Link } from "expo-router";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthPage() {
  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.navGroup}>
          <Link href="/auth/profile" style={styles.linkButton}>
            <Text style={styles.linkText}>👤 Perfil</Text>
          </Link>
          <Link href="/auth/login" style={styles.linkButton}>
            <Text style={styles.linkText}>🔑 Entrar (Log In)</Text>
          </Link>
          <Link href="/auth/signup" style={styles.linkButton}>
            <Text style={styles.linkText}>📝 Cadastrar (Sign Up)</Text>
          </Link>
          <Link href="/auth/logout" style={styles.linkButton}>
            <Text style={styles.linkText}>🚪 Sair (Log Out)</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f2f2f7",
  },
  container: {
    padding: 20,
  },
  navGroup: {
    gap: 12,
  },
  linkButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e5ea",
  },
  linkText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007AFF",
    textAlign: "center",
  },
});
