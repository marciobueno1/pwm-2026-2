export default function Tarefa({ tarefa, onUpdate, onDelete }) {
  return (
    <p>
      <li>
        {tarefa.descricao}
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={() => onUpdate({ ...tarefa, concluida: !tarefa.concluida })}
        />
        <button onClick={() => onDelete(tarefa)}>🗑</button>
      </li>
    </p>
  );
}
