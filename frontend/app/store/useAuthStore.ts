import { create } from "zustand";

type RegisterPayload = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type LoginPayload = {
  email: string;
  password: string;
};

type AuthState = {
  loading: boolean;
  message: string;
  isSuccess: boolean | null;

  register: (payload: RegisterPayload) => Promise<boolean>;
  login: (payload: LoginPayload) => Promise<boolean>;
};

export const useAuthStore = create<AuthState>((set) => ({
  loading: false,
  message: "",
  isSuccess: null,

  register: async ({ name, email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      set({
        message: "Kata sandi tidak cocok",
        isSuccess: false,
      });
      return false;
    }

    set({ loading: true, message: "", isSuccess: null });

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        set({
          message: data.message || "Gagal mendaftar",
          isSuccess: false,
          loading: false,
        });
        return false;
      }

      set({
        message: "Registrasi berhasil! Silakan login.",
        isSuccess: true,
        loading: false,
      });

      return true;
    } catch (error) {
      set({
        message: "Terjadi kesalahan server",
        isSuccess: false,
        loading: false,
      });
      return false;
    }
  },

  login: async ({ email, password }) => {
    if (!email || !password) {
      set({
        message: "Email dan password wajib diisi",
        isSuccess: false,
      });
      return false;
    }

    set({ loading: true, message: "", isSuccess: null });

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        set({
          message: data.message || "Login gagal",
          isSuccess: false,
          loading: false,
        });
        return false;
      }

      set({
        message: "Login berhasil",
        isSuccess: true,
        loading: false,
      });

      return true;
    } catch (error) {
      set({
        message: "Terjadi kesalahan server",
        isSuccess: false,
        loading: false,
      });
      return false;
    }
  },
}));
