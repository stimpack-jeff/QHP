"use client";

import { useState, useEffect, FormEvent } from "react";

/**
 * Client-side password gate for QHP Research.
 * 
 * Blocks all content until the correct password is entered.
 * Uses SHA-256 hashing — the password is never stored in plaintext in the bundle.
 * Auth persists in sessionStorage (clears when browser closes).
 * 
 * To change the password:
 *   1. Run: echo -n "your-new-password" | shasum -a 256
 *   2. Replace PASS_HASH below with the output
 */

// SHA-256 hash of the password (default: "qhp2026")
const PASS_HASH = "332c42516810ce097d130814bb36ff39c8dd4d6b51d3928c0b33b3232afa83b3";

const AUTH_KEY = "qhp_auth";

async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Check sessionStorage on mount
  useEffect(() => {
    const stored = sessionStorage.getItem(AUTH_KEY);
    if (stored === PASS_HASH) {
      setAuthenticated(true);
    }
    setChecking(false);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const hash = await sha256(password);
    if (hash === PASS_HASH) {
      sessionStorage.setItem(AUTH_KEY, PASS_HASH);
      setAuthenticated(true);
    } else {
      setError(true);
      setPassword("");
    }
    setLoading(false);
  };

  // Don't flash anything while checking sessionStorage
  if (checking) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#EF4B4C] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-[#EF4B4C] to-[#c93a3b] mb-6 shadow-lg shadow-red-500/20">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            QHP Research
          </h1>
          <p className="text-sm text-white/40 mt-2">
            Authorized access only
          </p>
        </div>

        {/* Login Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#1a1a1a] border border-white/8 rounded-2xl p-8 shadow-2xl"
        >
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white/60 mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Enter access password"
            autoFocus
            autoComplete="current-password"
            className={`
              w-full px-4 py-3 rounded-xl bg-[#0d0d0d] border text-white
              placeholder:text-white/20 outline-none transition-all duration-200
              focus:ring-2 focus:ring-[#EF4B4C]/50 focus:border-[#EF4B4C]
              ${error ? "border-red-500/60 shake" : "border-white/8"}
            `}
          />

          {error && (
            <p className="text-red-400 text-sm mt-2 flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              Incorrect password
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="
              w-full mt-6 px-4 py-3 rounded-xl font-semibold text-sm
              bg-linear-to-r from-[#EF4B4C] to-[#d43d3e] text-white
              hover:from-[#d43d3e] hover:to-[#c93a3b]
              disabled:opacity-40 disabled:cursor-not-allowed
              transition-all duration-200 shadow-lg shadow-red-500/20
              cursor-pointer
            "
          >
            {loading ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Verifying...
              </span>
            ) : (
              "Access Platform"
            )}
          </button>
        </form>

        <p className="text-center text-white/20 text-xs mt-6">
          QHP Capital &middot; Confidential
        </p>
      </div>
    </div>
  );
}
