"use client";

import { addTarefas, getTarefas } from "@/api";
import styles from "./page.module.css";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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
            <li key={tarefa.objectId}>{tarefa.descricao}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
