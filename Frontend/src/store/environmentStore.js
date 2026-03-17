import { create } from "zustand"

export const useEnvironmentStore = create((set) => ({
  variables: JSON.parse(localStorage.getItem("api-env") || "{}"),

  addVariable: (key, value) =>
    set((state) => {
      const updated = { ...state.variables, [key]: value }
      localStorage.setItem("api-env", JSON.stringify(updated))
      return { variables: updated }
    }),

  deleteVariable: (key) =>
    set((state) => {
      const updated = { ...state.variables }
      delete updated[key]
      localStorage.setItem("api-env", JSON.stringify(updated))
      return { variables: updated }
    }),
}))