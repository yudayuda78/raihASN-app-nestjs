import { useState } from "react"


export function RegisterPages() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  
  
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Kata sandi tidak cocok");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Registrasi berhasil! Silakan login.");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setIsSuccess(true);
      } else {
        setMessage(data.message || "Gagal mendaftar");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Terjadi kesalahan server");
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <img className="mx-auto h-16" src="/raihlogo.png" alt="RaihASN Logo" />
        <h1 className="text-3xl font-bold text-center text-[#5c40c2]">
          Daftar ke <span className="text-gray-800">RaihASN</span>
        </h1>

        <p className="text-center text-gray-600">
          Buat akunmu dan mulai perjalanan menuju ASN impian.
        </p>

        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama lengkap kamu"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#5c40c2] focus:outline-none"
            />
          </div>

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
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#5c40c2] focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Konfirmasi Kata Sandi
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Ulangi kata sandi"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#5c40c2] focus:outline-none"
            />
          </div>

         <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#5c40c2] text-white font-semibold py-2 rounded-lg hover:bg-[#4a2fb0] transition-all"
          >
            {loading ? "Mendaftar..." : "Daftar"}
          </button>
        </form>

        {message && (
          <p
            className={`text-center text-sm mt-2 ${
              isSuccess ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-center text-sm text-gray-600">
          Sudah punya akun?{" "}
          <a
            href="/login"
            className="text-[#5c40c2] font-semibold hover:underline"
          >
            Masuk di sini
          </a>
        </p>
      </div>
    </section>
  );
}
