import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type BookmarkStore = {
  movieIds: number[];
  addMovieId: (movieId: number) => void;
  removeMovieId: (movieId: number) => void;
};

export const useBookmarkStore = create<BookmarkStore>()(
  persist(
    set => ({
      movieIds: [],
      addMovieId: movieId =>
        set(state => ({ movieIds: [...state.movieIds, movieId] })),
      removeMovieId: movieId =>
        set(state => ({
          movieIds: state.movieIds.filter(id => id !== movieId),
        })),
    }),
    {
      name: 'bookmark-store',
    }
  )
);