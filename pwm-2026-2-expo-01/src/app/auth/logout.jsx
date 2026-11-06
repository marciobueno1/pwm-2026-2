import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LogOutPage() {
  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={styles.safeArea}>
      <View style={styles.card}>
        <Text style={styles.title}>Desconectar</Text>
        <Text style={styles.subtitle}>Você saiu da sua conta com sucesso.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f2f2f7",
    padding: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e5ea",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1c1c1e",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#8e8e93",
  },
});
