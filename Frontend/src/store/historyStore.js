import { create } from "zustand"

export const useHistoryStore = create((set) => ({
  history: JSON.parse(localStorage.getItem("api-history")) || [],

  addHistory: (request) =>
    set((state) => {
      const updated = [request, ...state.history]

      localStorage.setItem("api-history", JSON.stringify(updated))

      return { history: updated }
    })
}))