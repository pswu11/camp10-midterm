import { create } from 'zustand';

type AuthStore = {
  token: string;
  setToken: (token: string) => void;
  user: { id: string; email: string; firstName: string; lastName: string };
  setUser: (data: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  }) => void;
};

const useAuthStore = create<AuthStore>(function (set) {
  return {
    token: '',
    setToken: token => {
      set(state => ({ token }));
    },
    user: {
      id: '',
      email: '',
      firstName: '',
      lastName: '',
    },
    setUser: user => {
      set(state => ({
        user,
      }));
    },
  };
});

export default useAuthStore;
