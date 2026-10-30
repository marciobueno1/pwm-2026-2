import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useTarefasStore = create(
  persist(
    (set) => ({
      filtrarConcluidas: false,
      toggleFiltrarConcluidas: () =>
        set((state) => ({ filtrarConcluidas: !state.filtrarConcluidas })),
    }),
    {
      name: "tarefa-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
