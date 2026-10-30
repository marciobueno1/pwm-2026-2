import { addTarefas, deleteTarefas, getTarefas, updateTarefas } from "@/api";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Tarefa from "@/components/Tarefa";
import { Link } from "expo-router";
import { useTarefasStore } from "@/zustand";
import {
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

export default function ListaTarefas() {
  const queryClient = useQueryClient();

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["tarefas"],
    queryFn: getTarefas,
  });

  const { filtrarConcluidas, toggleFiltrarConcluidas } = useTarefasStore(
    (state) => state,
  );
  let tarefas = data?.results ?? [];
  if (filtrarConcluidas) {
    tarefas = tarefas.filter((tarefa) => !tarefa.concluida);
  }

  const addMutation = useMutation({
    mutationFn: addTarefas,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tarefas"] });
      setDescricao("");
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateTarefas,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tarefas"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTarefas,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tarefas"] });
    },
  });

  const anyError = error || addMutation.error;

  const [descricao, setDescricao] = useState("");

  return (
    <View style={styles.page}>
      <View style={styles.main}>
        <Link href="/">Voltar</Link>
        <Text style={styles.title}>
          Exemplo de utilização de Back-End (Tarefas)
          {(isFetching || isPending) && "..."}
        </Text>
        {!!anyError && (
          <Text style={styles.subtitle}>Erro: {anyError.message}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Digite a descrição da tarefa"
          value={descricao}
          onChangeText={setDescricao}
        />
        <Button
          onPress={() => addMutation.mutate(descricao)}
          title="Adicionar"
        />
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={filtrarConcluidas ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleFiltrarConcluidas}
          value={filtrarConcluidas}
        />
        <Text>Só as não concluídas</Text>
        <View style={styles.hr} />
        {tarefas.map((tarefa) => (
          <Tarefa
            key={tarefa.objectId}
            tarefa={tarefa}
            onUpdate={updateMutation.mutate}
            onDelete={deleteMutation.mutate}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {},
  main: {},
  title: {
    fontSize: 40,
  },
  subtitle: {
    fontSize: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  hr: {
    height: 2,
    backgroundColor: "black",
  },
});
