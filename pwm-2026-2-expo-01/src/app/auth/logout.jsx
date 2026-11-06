import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUserStore } from "@/zustand";
import { useRouter } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import { loggingOut } from "@/api";

export default function LogOutPage() {
  const router = useRouter();
  const { user, setUser: setAuthUser } = useUserStore((state) => state);

  const mutation = useMutation({
    mutationFn: loggingOut,
    onSuccess: () => {
      setAuthUser(null);
      router.back();
    },
    onError: (error) => {
      console.log("Error: ", error);
      console.log("Error message: ", error.message);
    },
  });

  const handleLogout = () => {
    console.log("Clicou no botão de logout");
    Alert.alert(
      "Confirmar saída",
      "Você realmente deseja deslogar da sua conta?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sair",
          style: "destructive",
          onPress: () => {
            console.log("Usuário confirmou o logout");
            mutation.mutate(user);
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Desconectar</Text>
          <Text style={styles.subtitle}>
            Clique no botão abaixo para encerrar a sessão da sua conta.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={handleLogout}
            disabled={!user}
          >
            <Text style={styles.buttonText}>Deslogar</Text>
          </TouchableOpacity>
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
  button: {
    backgroundColor: "#ff3b30",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
