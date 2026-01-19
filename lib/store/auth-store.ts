// lib/store/auth-store.ts
import { create } from 'zustand';
import { User } from '../types/user';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email, password) => { /* API call */ },
  logout: () => set({ user: null, isAuthenticated: false }),
}));