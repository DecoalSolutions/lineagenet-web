"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { auth, db } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export default function LoginPage() {
  const router = useRouter();

  const [mode, setMode] = useState<"login" | "signup" | "reset">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const getFriendlyError = (code: string) => {
    switch (code) {
      case "auth/user-not-found":
        return "No account found with this email.";
      case "auth/wrong-password":
        return "Incorrect password.";
      case "auth/email-already-in-use":
        return "An account already exists with this email.";
      case "auth/weak-password":
        return "Password should be at least 6 characters.";
      default:
        return "Something went wrong. Please try again.";
    }
  };

  const handleAuth = async () => {
    setError("");
    setMessage("");
    setLoading(true);

    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/dashboard");
      }

      if (mode === "signup") {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await setDoc(doc(db, "users", userCredential.user.uid), {
          email,
          createdAt: serverTimestamp(),
        });

        router.push("/dashboard");
      }

      if (mode === "reset") {
        await sendPasswordResetEmail(auth, email);
        setMessage("Password reset email sent. Please check your inbox.");
      }
    } catch (err: any) {
      setError(getFriendlyError(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1F1E] text-white">

      {/* HEADER */}
      <header className="w-full py-4 px-6 border-b border-white/10 backdrop-blur-xl bg-black/30 flex justify-between items-center">
        <button
          onClick={() => router.push("/")}
          className="text-teal-400 hover:text-teal-300 text-sm"
        >
          ← Back to About
        </button>

        <Image
          src="/logo-icon.png"
          alt="LineageNet"
          width={36}
          height={36}
        />
      </header>

      {/* MAIN CONTENT */}
      <div className="flex-grow flex items-center justify-center px-6 py-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl w-full max-w-md"
        >

          {/* Logo */}
          <div className="flex justify-center mb-5">
            <Image
              src="/logo-icon.png"
              alt="LineageNet"
              width={65}
              height={65}
            />
          </div>

          <h2 className="text-2xl text-center text-teal-400 mb-5">
            {mode === "login"
              ? "Login to LineageNet"
              : mode === "signup"
              ? "Create Your Account"
              : "Reset Your Password"}
          </h2>

          {error && (
            <p className="text-red-400 text-sm mb-3 text-center">
              {error}
            </p>
          )}

          {message && (
            <p className="text-green-400 text-sm mb-3 text-center">
              {message}
            </p>
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-3 rounded-xl bg-white/20 border border-white/20 focus:outline-none focus:border-teal-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {mode !== "reset" && (
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-5 p-3 rounded-xl bg-white/20 border border-white/20 focus:outline-none focus:border-teal-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          )}

          <button
            onClick={handleAuth}
            disabled={loading}
            className="w-full bg-teal-500 hover:bg-teal-600 py-3 rounded-xl transition disabled:opacity-50"
          >
            {loading
              ? "Please wait..."
              : mode === "login"
              ? "Login"
              : mode === "signup"
              ? "Sign Up"
              : "Send Reset Email"}
          </button>

          <div className="mt-5 text-center text-sm space-y-2">
            {mode === "login" && (
              <>
                <p
                  className="cursor-pointer hover:text-teal-400"
                  onClick={() => setMode("signup")}
                >
                  Don’t have an account? Sign Up
                </p>
                <p
                  className="cursor-pointer hover:text-teal-400"
                  onClick={() => setMode("reset")}
                >
                  Forgot Password?
                </p>
              </>
            )}

            {mode === "signup" && (
              <p
                className="cursor-pointer hover:text-teal-400"
                onClick={() => setMode("login")}
              >
                Already have an account? Login
              </p>
            )}

            {mode === "reset" && (
              <p
                className="cursor-pointer hover:text-teal-400"
                onClick={() => setMode("login")}
              >
                Back to Login
              </p>
            )}
          </div>

        </motion.div>

      </div>

      {/* FOOTER */}
      <footer className="py-5 text-center text-sm text-gray-400 border-t border-white/10 backdrop-blur-xl bg-black/30">
        Need help? Contact support at{" "}
        <a
          href="mailto:support@lineagenet.com"
          className="text-teal-400 hover:text-teal-300"
        >
          support@lineagenet.com
        </a>
      </footer>

    </div>
  );
}