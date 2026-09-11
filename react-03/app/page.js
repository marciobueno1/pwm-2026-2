"use client";

import { addTarefas, deleteTarefas, getTarefas, updateTarefas } from "@/api";
import styles from "./page.module.css";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Tarefa from "@/components/Tarefa";

export default function Home() {
  const queryClient = useQueryClient();

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["tarefas"],
    queryFn: getTarefas,
  });
  const tarefas = data?.results ?? [];

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
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>
          Exemplo de utilização de Back-End (Tarefas)
          {(isFetching || isPending) && "..."}
        </h1>
        {!!anyError && (
          <>
            <h2>Erro: {anyError.message}</h2>
            <hr />
          </>
        )}
        <input
          placeholder="Digite a descrição da tarefa"
          value={descricao}
          onChange={(evt) => setDescricao(evt.target.value)}
        />
        <button onClick={() => addMutation.mutate(descricao)}>Adicionar</button>
        <hr />
        <ul>
          {tarefas.map((tarefa) => (
            <Tarefa
              key={tarefa.objectId}
              tarefa={tarefa}
              onUpdate={updateMutation.mutate}
              onDelete={deleteMutation.mutate}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}
