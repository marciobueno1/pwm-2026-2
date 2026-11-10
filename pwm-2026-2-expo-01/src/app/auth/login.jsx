import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMutation } from "@tanstack/react-query";
import { loggingIn } from "@/api";
import { useUserStore } from "@/zustand";

export default function LogInPage() {
  const router = useRouter();
  const setAuthUser = useUserStore((state) => state.setUser);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (field) => (value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const mutation = useMutation({
    mutationFn: loggingIn,
    onSuccess: (response) => {
      setAuthUser({ ...user, ...response.data });
      console.log("Sucesso: ", { ...user, ...response.data });
      router.back();
    },
    onError: (error) => {
      console.log("Error: ", error);
      console.log("Error message: ", error.message);
    },
  });

  const handleLogin = () => {
    console.log("Dados de login:", user);
    mutation.mutate(user);
  };

  const isButtonDisabled = !user.username.trim() || !user.password.trim();

  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <Text style={styles.title}>Entrar na sua conta</Text>
          <Text style={styles.subtitle}>
            Digite suas credenciais para acessar.
          </Text>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nome de usuário</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu nome de usuário"
                placeholderTextColor="#8e8e93"
                autoCapitalize="none"
                value={user.username}
                onChangeText={handleChange("username")}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Senha</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor="#8e8e93"
                secureTextEntry
                value={user.password}
                onChangeText={handleChange("password")}
              />
            </View>

            <Pressable
              style={({ pressed }) => [
                styles.button,
                isButtonDisabled && styles.buttonDisabled,
                pressed && !isButtonDisabled && styles.buttonPressed,
              ]}
              onPress={handleLogin}
              disabled={isButtonDisabled}
              android_ripple={{ color: "rgba(255, 255, 255, 0.2)" }}
            >
              <Text style={styles.buttonText}>Entrar</Text>
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
