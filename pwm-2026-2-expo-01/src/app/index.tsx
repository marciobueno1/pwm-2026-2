import { Link } from "expo-router";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Olá, Turma!</Text>

        <View style={styles.navGroup}>
          <Link href="/listaTarefas" style={styles.linkButton}>
            <Text style={styles.linkText}>📋 Lista de Tarefas</Text>
          </Link>
          <Link href={"/auth" as any} style={styles.linkButton}>
            <Text style={styles.linkText}>🔐 Autenticação</Text>
          </Link>
          <Link href="/scrollTest" style={styles.linkButton}>
            <Text style={styles.linkText}>📜 Exemplo de ScrollView</Text>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 24,
    color: "#1c1c1e",
  },
  navGroup: {
    width: "100%",
    gap: 12,
  },
  linkButton: {
    backgroundColor: "#f2f2f7",
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
