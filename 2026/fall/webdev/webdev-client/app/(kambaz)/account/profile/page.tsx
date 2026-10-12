import Link from "next/link";

const fieldClass = "mb-2 w-full rounded border border-neutral-300 px-3 py-2";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Profile</h1>
      <input
        defaultValue="alice"
        placeholder="username"
        className={`wd-username ${fieldClass}`}
      />
      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className={`wd-password ${fieldClass}`}
      />
      <input
        defaultValue="Alice"
        placeholder="First Name"
        id="wd-firstname"
        className={fieldClass}
      />
      <input
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
        className={fieldClass}
      />
      <input type="date" id="wd-dob" className={fieldClass} />
      <input
        defaultValue="alice@wonderland.com"
        type="email"
        id="wd-email"
        className={fieldClass}
      />
      <select defaultValue="USER" id="wd-role" className={`${fieldClass} bg-white`}>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link
        id="wd-signout-btn"
        href="/account/signin"
        className="block w-full rounded bg-red-600 px-3 py-2 text-center text-white no-underline"
      >
        Signout
      </Link>
    </div>
  );
}
