"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Wrapper from "@/app/components/Wrapper";

const data = [
  {
    id: 1,
    firstname: "Bobish",
    lastname: "Dayal",
    email: "bobishdayal@gmail.com",
    password: "Yariendless@123",
  },
  {
    id: 2,
    firstname: "Varsha",
    lastname: "Dayal",
    email: "varshadayal@gmail.com",
    password: "Mcbaby@123",
  },
];

const signUp = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    const currentUser = data.find((user) => email === user.email);
    console.log(currentUser);

    if (currentUser.password === password) {
      router.push("/pages/content");
    } else {
      router.push("/pages/signin");
    }
  };

  return (
    <Wrapper>
      <div className=" w-3/6 h-96 border-4 border-red-600/[.5] rounded-3xl  bg-white/[.3] grid grid-cols-2">
        <div>
          <h4 className="font-extrabold text-3xl text-red-700 m-2 mt-8 text-center">
            Login
          </h4>
          <form
            className="flex flex-col w-4/5 h-4/5 items-center justify-center mx-auto "
            onSubmit={submitHandler}
          >
            <input
              id="email"
              type="email"
              autoComplete="on"
              placeholder="Email"
              className="border-2 border-gray-200 rounded-lg p-2   w-full bg-transparent placeholder:text-gray-400 placeholder:font-bold"
              ref={emailInputRef}
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="border-2 border-gray-200 rounded-lg p-2 m-4  w-full bg-transparent  placeholder:text-gray-400 placeholder:font-bold"
              ref={passwordInputRef}
            />
            <input
              type="submit"
              value="Login"
              className=" text-white border-2 border-transparent bg-red-500 font-bold rounded-3xl px-9 py-2 my-7 hover:scale-110 cursor-pointer ease-in duration-200"
            />
          </form>
        </div>

        <div className=" rounded-tr-2xl rounded-br-2xl flex flex-col justify-center items-center  bg-red-600/[.6] ">
          <h3 className="text-3xl font-extrabold text-white my-8 ">
            Create Account
          </h3>
          <p className="text-gray-200 my-7 ">
            Sign up if you still don't have a account.
          </p>
          <button
            onClick={() => {
              router.push("/pages/signin");
            }}
            className=" my-7 border-transparent border-2 rounded-3xl px-9 py-2 font-bold text-red-600 bg-white hover:scale-110 ease-in duration-200 "
          >
            Sign Up
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default signUp;
