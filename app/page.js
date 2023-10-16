"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const loginButtonHandler = () => {
    router.push("/pages/signUp");
  };

  return (
    <main className="flex min-h-screen  items-center justify-center p-24 bg-gradient-to-t from-blue-500 to-black">
      <div className=" w-80 h-80  rounded-xl bg-white flex justify-center align-center bg-gradient-to-t from-transparent to-gray-500">
        <button
          onClick={loginButtonHandler}
          className="m-auto p-2 border-2 border-transparent hover:bg-blue-500 hover:text-white rounded-lg border-blue-500 text-blue-500 font-bold"
        >
          Login
        </button>
      </div>
    </main>
  );
}
