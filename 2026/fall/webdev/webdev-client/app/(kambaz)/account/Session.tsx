"use client";
import { useEffect, useState, type ReactNode } from "react";
import * as client from "./client";
import { useAccountContext } from "./AccountContext";
import { useEnrollmentsStore } from "../store/enrollmentsStore";

export default function Session({ children }: { children: ReactNode }) {
  const { currentUser, setCurrentUser } = useAccountContext();
  const loadEnrollments = useEnrollmentsStore((state) => state.loadEnrollments);
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
  useEffect(() => {
    loadEnrollments();
  }, [currentUser, loadEnrollments]);
  if (pending) return null;
  return <>{children}</>;
}