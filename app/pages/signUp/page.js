"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

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
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-t from-black  to-blue-600">
      <div className=" w-3/6 h-96 border-2 rounded-3xl border-transparent bg-white/[.1] grid grid-cols-2">
        <div className="">
          <h4 className="font-extrabold text-2xl text-white m-2 mt-8 text-center">
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
              className="border-2 border-gray-300 rounded-lg p-2   w-full  bg-gray-300  placeholder:text-gray-400 placeholder:font-bold"
              ref={emailInputRef}
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="border-2 border-gray-300 rounded-lg p-2 m-4  w-full  bg-gray-300  placeholder:text-gray-400 placeholder:font-bold"
              ref={passwordInputRef}
            />
            <input
              type="submit"
              value="Login"
              className="border-transparent border-2 text-blue-800 bg-white font-bold rounded-3xl px-9 py-2 my-7 hover:bg-blue-500 hover:text-white cursor-pointer"
            />
          </form>
        </div>

        <div className="  bg-white rounded-tr-3xl rounded-br-3xl flex flex-col justify-center items-center">
          <h3 className="text-3xl font-extrabold text-blue-500 my-8 ">
            Create Account
          </h3>
          <p className="text-gray-600 my-7 ">
            Sign up if you still don't have a account.
          </p>
          <button
            onClick={() => {
              router.push("/pages/signin");
            }}
            className=" my-7 border-transparent border-2 rounded-3xl px-9 py-2 font-bold text-white bg-blue-500 hover:bg-blue-800 hover:border-transparent hover:text-white"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default signUp;
