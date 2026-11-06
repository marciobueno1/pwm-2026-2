import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Providers } from "@/components/Providers";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Providers>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f8f9fa",
            },
            headerTintColor: "#007AFF",
            headerTitleStyle: {
              fontWeight: "600",
              fontSize: 18,
            },
            headerBackTitle: "Voltar",
          }}
        >
          <Stack.Screen name="index" options={{ title: "Início" }} />
          <Stack.Screen
            name="listaTarefas/index"
            options={{ title: "Lista de Tarefas" }}
          />
          <Stack.Screen
            name="listaTarefas/[idTarefa]/index"
            options={{ title: "Detalhe da Tarefa" }}
          />
          <Stack.Screen
            name="auth/index"
            options={{ title: "Autenticação" }}
          />
          <Stack.Screen
            name="auth/login"
            options={{ title: "Entrar" }}
          />
          <Stack.Screen
            name="auth/signup"
            options={{ title: "Cadastrar" }}
          />
          <Stack.Screen
            name="auth/profile"
            options={{ title: "Perfil" }}
          />
          <Stack.Screen
            name="auth/logout"
            options={{ title: "Sair" }}
          />
          <Stack.Screen
            name="scrollTest"
            options={{ title: "Teste de Scroll" }}
          />
        </Stack>
      </Providers>
    </SafeAreaProvider>
  );
}
