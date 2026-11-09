"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";
import "../kambaz.css";

const LABELS = { signin: "Signin", signup: "Signup", profile: "Profile" } as const;

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? (["profile"] as const)
    : (["signin", "signup"] as const);
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      {links.map((link) => {
        const href = `/account/${link}`;
        return (
          <Link
            key={link}
            href={href}
            id={`wd-account-${link}-link`}
            className={
              pathname === href
                ? "list-group-item active border-0"
                : "list-group-item border-0 text-red-600"
            }
          >
            {LABELS[link]}
          </Link>
        );
      })}
    </div>
  );
}
