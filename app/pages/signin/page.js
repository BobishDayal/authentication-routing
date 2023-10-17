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
      <div className=" w-96 h-3/5 border-2 rounded-2xl border-transparent bg-white/[.1]">
        <h4 className="font-extrabold text-4xl text-gray-50 m-7 text-center">
          Sign In
        </h4>
        <form
          className="flex flex-col w-4/5 h-4/5 items-center justify-center mx-auto "
          onSubmit={submitHandler}
        >
          <input
            id="firstname"
            type="text"
            autoComplete="on"
            placeholder="First Name"
            className="border-2 border-gray-300 rounded-2xl p-2 m-2 w-full bg-gray-300 placeholder:text-gray-400 placeholder:font-bold"
            ref={firstnameInputRef}
          />
          <input
            id="lastname"
            type="text"
            autoComplete="on"
            placeholder="Last Name"
            className="border-2 border-gray-300 rounded-2xl p-2 m-2  w-full  bg-gray-300  placeholder:text-gray-400 placeholder:font-bold"
            ref={lastnameInputRef}
          />
          <input
            id="email"
            type="email"
            autoComplete="on"
            placeholder="Email"
            className="border-2 border-gray-300 rounded-2xl p-2 m-2  w-full  bg-gray-300  placeholder:text-gray-400 placeholder:font-bold"
            ref={emailInputRef}
          />
          <input
            id="password"
            type="password"
            placeholder="password"
            className="border-2 border-gray-300 rounded-2xl p-2 m-2  w-full  bg-gray-300  placeholder:text-gray-400 placeholder:font-bold"
            ref={passwordInputRef}
          />
          <input
            type="submit"
            value="Sign In"
            className="border-transparent border-2 rounded-2xl bg-white text-blue-800 font-bold px-9 py-2 m-7 hover:bg-blue-800 hover:text-white cursor-pointer"
          />
        </form>
      </div>
    </Wrapper>
  );
};

export default SignIn;
