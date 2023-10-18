"use client";

import Wrapper from "@/app/components/Wrapper";
import { useRef, useState } from "react";

const SignIn = () => {
  const [data, setData] = useState("");

  const firstnameInputRef = useRef();
  const lastnameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const firstname = firstnameInputRef.current.value;
    const lastname = lastnameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    setData({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    });
  };

  return (
    <Wrapper>
      <div className=" w-2/4 h-4/5 border-4 rounded-2xl border-red-600/[.5] bg-red-600/[.7]">
        <h4 className="font-extrabold text-4xl text-white m-7 text-center py-2">
          Sign Up
        </h4>
        <form
          className="flex flex-col w-4/5 h-4/5  justify-center mx-auto "
          onSubmit={submitHandler}
        >
          <label
            for="firstname"
            className="font-extrabold text-lg text-gray-300 mx-1 "
          >
            First Name
          </label>
          <input
            id="firstname"
            type="text"
            autoComplete="on"
            className="border-b-2 border-gray-300 p-1 mb-2  w-full bg-transparent placeholder:text-gray-400 placeholder:font-bold"
            ref={firstnameInputRef}
          />

          <label
            for="lastname"
            className="font-extrabold text-lg text-gray-300 mx-1 mt-6 "
          >
            Last Name
          </label>
          <input
            id="lastname"
            type="text"
            autoComplete="on"
            className="border-b-2   p-1 mb-2  w-full  bg-transparent  placeholder:text-gray-400 placeholder:font-bold"
            ref={lastnameInputRef}
          />

          <label
            for="email"
            className="font-extrabold text-lg text-gray-300 mx-1  mt-6"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="on"
            className="border-b-2 p-1 mb-2   w-full  bg-transparent  placeholder:text-gray-400 placeholder:font-bold"
            ref={emailInputRef}
          />

          <label
            for="password"
            className="font-extrabold text-lg text-gray-300 mx-1 mt-4 "
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="border-b-2 p-1 mb-2   w-full  bg-transparent  placeholder:text-gray-400 placeholder:font-bold"
            ref={passwordInputRef}
          />
          <input
            type="submit"
            value="Sign Up"
            className="border-transparent  border-2 rounded-3xl bg-white text-red-600 font-extrabold px-6 py-2 m-auto hover:scale-110 ease-in duration-200 cursor-pointer"
          />
        </form>
      </div>
    </Wrapper>
  );
};

export default SignIn;
