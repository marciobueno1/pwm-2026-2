import { addTarefas, deleteTarefas, getTarefas, updateTarefas } from "@/api";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Tarefa from "@/components/Tarefa";
import { useTarefasStore } from "@/zustand";
import {
  Button,
  FlatList,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView edges={["bottom", "left", "right"]} style={styles.safeArea}>
      {/* Seção Fixa no Topo */}
      <View style={styles.fixedHeader}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Gerenciador de Tarefas
            {(isFetching || isPending) && "..."}
          </Text>
          {!!anyError && (
            <Text style={styles.errorText}>Erro: {anyError.message}</Text>
          )}
        </View>

        <View style={styles.inputCard}>
          <TextInput
            style={styles.input}
            placeholder="Digite a descrição da tarefa"
            placeholderTextColor="#8e8e93"
            value={descricao}
            onChangeText={setDescricao}
          />
          <Button
            onPress={() => {
              if (descricao.trim()) {
                addMutation.mutate(descricao.trim());
              }
            }}
            title="Adicionar"
            disabled={!descricao.trim() || addMutation.isPending}
          />
        </View>

        <View style={styles.filterRow}>
          <Text style={styles.filterText}>Exibir apenas não concluídas</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={filtrarConcluidas ? "#007AFF" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleFiltrarConcluidas}
            value={filtrarConcluidas}
          />
        </View>
      </View>

      {/* Lista Otimizada com FlatList */}
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.objectId}
        contentContainerStyle={styles.listContainer}
        refreshing={isFetching && !isPending}
        onRefresh={() =>
          queryClient.invalidateQueries({ queryKey: ["tarefas"] })
        }
        renderItem={({ item }) => (
          <Tarefa
            tarefa={item}
            onUpdate={updateMutation.mutate}
            onDelete={deleteMutation.mutate}
          />
        )}
        ListEmptyComponent={
          !isFetching && !isPending ? (
            <Text style={styles.emptyText}>Nenhuma tarefa encontrada.</Text>
          ) : null
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f2f2f7",
  },
  fixedHeader: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: "#f2f2f7",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#d1d1d6",
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1c1c1e",
  },
  errorText: {
    fontSize: 14,
    color: "#ff3b30",
    marginTop: 4,
  },
  inputCard: {
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e5ea",
    marginBottom: 10,
    gap: 8,
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: "#c7c7cc",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#ffffff",
    fontSize: 16,
  },
  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e5e5ea",
  },
  filterText: {
    fontSize: 15,
    color: "#3a3a3c",
    fontWeight: "500",
  },
  listContainer: {
    padding: 16,
    paddingTop: 12,
  },
  emptyText: {
    textAlign: "center",
    color: "#8e8e93",
    fontSize: 15,
    marginTop: 40,
  },
});
