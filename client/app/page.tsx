"use client";

import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const RouterProvider = useRouter();

  const handleSubmit = () => {
    let user;
    if (user) {
      RouterProvider.push("/dashboard");
    }
  };
  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className=" border p-8 rounded-lg shadow-lg dark:bg-color-surface w-full max-w-md flex flex-col items-center gap-5">
        <h1 className="text-4xl font-semibold tracking-wide text-accent">
          MiFinance
        </h1>
        <form action="POST">
          <input
            type="text"
            placeholder="Username"
            className="border p-2 mb-4 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 mb-4 w-full"
          />

          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-accent hover:bg-primary text-white p-2 w-full lg:text-xl font-semibold">
            Login
          </button>

          <Link
            href="/dashboard"
            className="text-sm text-gray-600 hover:text-gray-800 mt-4">
            Dashboard
          </Link>
        </form>
      </div>
    </div>
  );
}
