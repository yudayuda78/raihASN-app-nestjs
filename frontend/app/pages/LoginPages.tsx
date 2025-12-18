import { useAuthStore } from "~/store/useAuthStore";
import { useState } from "react";
import { useNavigate } from "react-router";

export function LoginPages() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <img className="mx-auto h-16" src="/raihlogo.png" alt="RaihASN Logo" />
        <h1 className="text-3xl font-bold text-center text-[#5c40c2]">
          Masuk ke <span className="text-gray-800">RaihASN</span>
        </h1>

        <p className="text-center text-gray-600">
          Silakan masuk untuk melanjutkan ke dashboard Anda.
        </p>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="contoh@email.com"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#5c40c2] focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#5c40c2] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#5c40c2] text-white font-semibold py-2 rounded-lg hover:bg-[#4a2fb0] transition-all"
          >
            Masuk
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Belum punya akun?{" "}
          <a
            href="/register"
            className="text-[#5c40c2] font-semibold hover:underline"
          >
            Daftar di sini
          </a>
        </p>
      </div>
    </section>
  );
}
