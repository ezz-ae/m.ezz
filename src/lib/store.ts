import { create } from 'zustand';

type StudioState = {
  query: string;
  setQuery: (query: string) => void;
};

export const useStudioStore = create<StudioState>((set) => ({
  query: '',
  setQuery: (query) => set({ query }),
}));
