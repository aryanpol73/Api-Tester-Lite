import { create } from "zustand"

export const useCollectionStore = create((set) => ({
  collections: (() => {
    try {
      return JSON.parse(localStorage.getItem("api-collections") || "[]")
    } catch {
      return []
    }
  })(),

  addCollection: (request) =>
    set((state) => {
      const updated = [request, ...state.collections]
      localStorage.setItem("api-collections", JSON.stringify(updated))
      return { collections: updated }
    }),

  deleteCollection: (indexToDelete) =>
    set((state) => {
      const updated = state.collections.filter((_, index) => index !== indexToDelete)
      localStorage.setItem("api-collections", JSON.stringify(updated))
      return { collections: updated }
    }),
}))