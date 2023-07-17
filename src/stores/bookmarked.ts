import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Movie } from '../types/api';

type BookedStore = Movie & {

  setId: (value: number) => void;
  setTitle: (value: string) => void;
  setBackdrop_path: (value: string | null) => void;
  setPoster_path: (value: string|null) => void;
  setMovieId: (value: number) => void;
 
  
};

export const useBookedStore = create<BookedStore>()(
  persist(
    set => ({ 
      setId: value => set({ id: value }),
      setTitle: value => set({ movieId: value }),
      setBackdrop_path: value => set({ path: value }),
      setPoster_path: value => set({ path: value }),
      setMovieId: value => set({ movieId: value }),
    }),
    {
      name: 'booked-store',
    }
  )
);
