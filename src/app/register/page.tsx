"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

export default function RegisterPage() {
  const { register, user, error, loading } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (user) router.replace("/");
  }, [user, router]);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        router.push("/login");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [success, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    if (!email || !password || !username) {
      setFormError("Email, password, and username are required");
      return;
    }
    if (password.length < 6) {
      setFormError("Password must be at least 6 characters");
      return;
    }
    const success = await register(email, password, username);
    if (success) {
      setSuccess(true);
    }
  };

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="bg-white dark:bg-black p-8 rounded shadow-md w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4 text-green-600">Registration Complete!</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Your account has been created successfully. Redirecting to login page...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-black p-8 rounded shadow-md w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Username</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        {(formError || error) && (
          <div className="text-red-500 text-sm">{formError || error}</div>
        )}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
        <div className="text-sm text-center mt-2">
          Already have an account? <a href="/login" className="underline">Login</a>
        </div>
      </form>
    </div>
  );
}