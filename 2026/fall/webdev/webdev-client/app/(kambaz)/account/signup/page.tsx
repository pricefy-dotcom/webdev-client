"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as client from "../client";
import { useAccountContext } from "../AccountContext";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const signup = async () => {
    if (!username || !password) return;
    try {
      const currentUser = await client.signup({
        username,
        password,
        firstName: "",
        lastName: "",
        email: "",
        role: "STUDENT",
        loginId: "",
        section: "",
        lastActivity: "",
        totalActivity: "",
      });
      setCurrentUser(currentUser);
      router.push("/account/profile");
    } catch (e: any) {
      setError(e?.response?.data?.message ?? "Unable to sign up");
    }
  };
  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Sign up</h3>
      {error && (
        <p id="wd-signup-error" className="mb-2 rounded bg-red-100 px-3 py-2 text-red-800">
          {error}
        </p>
      )}
      <input
        id="wd-username"
        placeholder="username"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        placeholder="verify password"
        type="password"
        className="wd-password-verify mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <button
        type="button"
        onClick={signup}
        id="wd-signup-btn"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign up
      </button>{" "}
      <Link href="/account/signin" id="wd-signin-link">
        Sign in
      </Link>
    </div>
  );
}