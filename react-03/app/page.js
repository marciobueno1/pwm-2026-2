"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [tarefas, setTarefas] = useState([]);
  const [descricao, setDescricao] = useState("");
  async function handleCarregarClick() {
    const response = await fetch('https://parseapi.back4app.com/classes/Tarefa', {
      headers: {
        'X-Parse-Application-Id': 't4wZSEfltZ4QtFBZX5LY9hyyx4I45uAbjsrwzCAi',
        'X-Parse-REST-API-Key': 'ZXx7xAlvFOyZith0HDnSpWdlHxnnATKsdgakYg4Q'
      }
    });
    const data = await response.json();
    setTarefas(data.results);
  }
  async function handleNovaTarefaClick() {
    const response = await fetch('https://parseapi.back4app.com/classes/Tarefa', {
      method: 'POST',
      headers: {
        'X-Parse-Application-Id': 't4wZSEfltZ4QtFBZX5LY9hyyx4I45uAbjsrwzCAi',
        'X-Parse-REST-API-Key': 'ZXx7xAlvFOyZith0HDnSpWdlHxnnATKsdgakYg4Q',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        descricao: descricao
      })
    });
    if (response.ok) {
      setDescricao("");
      handleCarregarClick();
    } else {
      const data = await response.json();
      alert(`Erro ao tentar cadastrar tarefa: ${data.error}`);
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Exemplo de utilização de Back-End (Tarefas)</h1>
        <button onClick={handleCarregarClick}>Carregar tarefas</button>
        <hr />
        <input 
          placeholder="Digite a descrição da tarefa"
          value={descricao}
          onChange={evt => setDescricao(evt.target.value)}
        />
        <button onClick={handleNovaTarefaClick}>Adicionar</button>
        <hr />
        <ul>
          {tarefas.map(tarefa => <li key={tarefa.objectId}>{tarefa.descricao}</li>)}
        </ul>
      </main>
    </div>
  );
}
