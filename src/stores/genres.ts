import { Genre } from "../types/api";
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type GenresStore = {
  selectedGenres: Genre[]
  setSelectedGenres: (value: Genre[]) => void;
};

export const useGenresStore = create<GenresStore>()(
  persist(
    set => ({
      selectedGenres: [],
      setSelectedGenres: value => set({selectedGenres: value}),
    }),
    {
      name: 'genres-store',
    }
  )
);
