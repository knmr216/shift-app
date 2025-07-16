"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <div>
        <p>ようこそ, {session.user?.email} さん</p>
        <button onClick={() => signOut()}>ログアウト</button>
      </div>
    );
  }

  return (
    <div>
      <p>ログインしていません</p>
      <button onClick={() => signIn("google")}>Googleでログイン</button>
    </div>
  );
}
