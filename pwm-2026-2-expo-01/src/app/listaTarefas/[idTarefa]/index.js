import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PageTarefa() {
  const { idTarefa, filtro } = useLocalSearchParams();
  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={styles.safeArea}>
      <View style={styles.card}>
        <Text style={styles.label}>ID da Tarefa:</Text>
        <Text style={styles.value}>{idTarefa}</Text>

        <Text style={[styles.label, styles.mt]}>Filtro Aplicado:</Text>
        <Text style={styles.value}>{filtro ?? "Nenhum"}</Text>
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
  label: {
    fontSize: 14,
    color: "#8e8e93",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  value: {
    fontSize: 18,
    color: "#1c1c1e",
    fontWeight: "500",
    marginTop: 4,
  },
  mt: {
    marginTop: 16,
  },
});
