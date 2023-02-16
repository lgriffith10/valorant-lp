import { create } from "zustand";

export const useStore = create((set) => ({
    agents: [],
    setAgents: (agents) => set({ agents }),
}));
