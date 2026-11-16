"use client";
import { useEffect, useState, type ReactNode } from "react";
import * as client from "./client";
import { useAccountContext } from "./AccountContext";
import { useEnrollmentsStore } from "../store/enrollmentsStore";

// 5.4.2.4: after a browser reload, ask the server who is signed in and put
// that user back into AccountContext before showing any Kambaz page.
export default function Session({ children }: { children: ReactNode }) {
  const { currentUser, setCurrentUser } = useAccountContext();
  const loadEnrollments = useEnrollmentsStore((state) => state.loadEnrollments);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setCurrentUser(await client.profile());
      } catch {
        // 401 means nobody is signed in — that's fine
      }
      setPending(false);
    };
    fetchProfile();
  }, [setCurrentUser]);

  // Reload enrollments whenever a different user signs in or out
  useEffect(() => {
    loadEnrollments();
  }, [currentUser, loadEnrollments]);

  if (pending) return null;
  return <>{children}</>;
}
