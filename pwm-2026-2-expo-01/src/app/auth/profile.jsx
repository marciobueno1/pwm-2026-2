import { useAuthStore } from "@/zustand";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfilePage() {
  const { user } = useAuthStore();
  const { username, email, sessionToken } = user ?? {};

  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Perfil do Usuário</Text>
          <Text style={styles.subtitle}>Informações obtidas do Zustand.</Text>

          <View style={styles.infoList}>
            <View style={styles.infoItem}>
              <Text style={styles.label}>Nome de usuário</Text>
              <View style={styles.valueContainer}>
                <Text style={username ? styles.value : styles.emptyValue}>
                  {username || "(vazio)"}
                </Text>
              </View>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.label}>E-mail</Text>
              <View style={styles.valueContainer}>
                <Text style={email ? styles.value : styles.emptyValue}>
                  {email || "(vazio)"}
                </Text>
              </View>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.label}>Session Token</Text>
              <View style={styles.valueContainer}>
                <Text style={sessionToken ? styles.value : styles.emptyValue}>
                  {sessionToken || "(vazio)"}
                </Text>
              </View>
            </View>
          </View>
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
    marginBottom: 20,
  },
  infoList: {
    gap: 16,
  },
  infoItem: {
    gap: 6,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1c1c1e",
  },
  valueContainer: {
    minHeight: 44,
    borderWidth: 1,
    borderColor: "#e5e5ea",
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: "center",
    backgroundColor: "#f9f9fb",
  },
  value: {
    fontSize: 16,
    color: "#1c1c1e",
  },
  emptyValue: {
    fontSize: 16,
    color: "#8e8e93",
    fontStyle: "italic",
  },
});
