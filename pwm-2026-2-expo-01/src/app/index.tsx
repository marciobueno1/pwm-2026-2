import { Link } from "expo-router";
import { Text, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Olá, Turma!</Text>
      <Link href="/scrollTest">Exemplo de ScrollView</Link>
      <Link href="/listaTarefas">Lista de Tarefas</Link>
      <Link href="/auth">Autenticação</Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    marginTop: 100,
  },
  title: {
    fontSize: 40,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputView: {
    flexDirection: "row",
  },
});
