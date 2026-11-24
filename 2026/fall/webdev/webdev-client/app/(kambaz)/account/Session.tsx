"use client";
import { useEffect, useState, type ReactNode } from "react";
import * as client from "./client";
import { useAccountContext } from "./AccountContext";

export default function Session({ children }: { children: ReactNode }) {
  const { setCurrentUser } = useAccountContext();
  const [pending, setPending] = useState(true);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setCurrentUser(await client.profile());
      } catch {
        setCurrentUser(null);
      }
      setPending(false);
    };
    fetchProfile();
  }, [setCurrentUser]);
  if (pending) return null;
  return <>{children}</>;
}