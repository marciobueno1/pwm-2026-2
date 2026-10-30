"use client";

import { use } from "react";

export default function PageTarefa({ params, searchParams }) {
  const { idTarefa } = use(params);
  const { filtro } = use(searchParams);
  return (
    <div>
      <h1>
        Tarefa: {idTarefa} - filtro: {filtro}
      </h1>
    </div>
  );
}
