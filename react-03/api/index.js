import axios from "axios";

const headerJson = { "Content-Type": "application/json" };

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com",
  timeout: 5000,
  headers: {
    "X-Parse-Application-Id": "t4wZSEfltZ4QtFBZX5LY9hyyx4I45uAbjsrwzCAi",
    "X-Parse-REST-API-Key": "ZXx7xAlvFOyZith0HDnSpWdlHxnnATKsdgakYg4Q",
  },
});

export async function getTarefas() {
  const response = await instance.get("/classes/Tarefa");
  return response.data;
}

export async function addTarefas(descricao) {
  return await instance.post(
    "/classes/Tarefa",
    {
      descricao: descricao,
    },
    {
      headers: headerJson,
    },
  );
}
