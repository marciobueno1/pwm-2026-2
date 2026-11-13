import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMutation } from "@tanstack/react-query";
import { requestPasswordReset } from "@/api";

export default function LogInPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
  });

  const handleChange = (field) => (value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const mutation = useMutation({
    mutationFn: requestPasswordReset,
    onSuccess: () => {
      router.back();
    },
    onError: (error) => {
      console.log("Error: ", error);
      console.log("Error message: ", error.message);
      Alert.alert("Erro", `Erro ao acessar o back-end: ${error.message}`);
    },
  });

  const handleReset = () => {
    console.log("Dados de login:", user);
    mutation.mutate(user);
  };

  const isButtonDisabled = !user.email.trim();

  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <Text style={styles.title}>Esqueci minha senha</Text>
          <Text style={styles.subtitle}>
            Digite suas credenciais para acessar.
          </Text>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>e-mail</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                placeholderTextColor="#8e8e93"
                autoCapitalize="none"
                value={user.email}
                onChangeText={handleChange("email")}
              />
            </View>

            <Pressable
              style={({ pressed }) => [
                styles.button,
                isButtonDisabled && styles.buttonDisabled,
                pressed && !isButtonDisabled && styles.buttonPressed,
              ]}
              onPress={handleReset}
              disabled={isButtonDisabled}
              android_ripple={{ color: "rgba(255, 255, 255, 0.2)" }}
            >
              <Text style={styles.buttonText}>Enviar</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f2f2f7",
  },
  scrollContainer: {
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
  form: {
    gap: 16,
  },
  inputGroup: {
    gap: 6,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1c1c1e",
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: "#c7c7cc",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#ffffff",
    fontSize: 16,
    color: "#1c1c1e",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
    overflow: "hidden",
  },
  buttonDisabled: {
    opacity: 0.4,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
