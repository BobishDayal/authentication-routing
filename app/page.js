"use client";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import Content from "./components/Content";
import { useState } from "react";

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

export default function Home() {
  const [userExists, setUserExits] = useState(null);

  const checkUserHandler = (obj) => {
    const currentUser = data.find((user) => user.email === obj.email);
    console.log(currentUser);

    if (currentUser.password === obj.password) {
      setUserExits(true);
      return;
    }

    setUserExits(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-t from-blue-500 to-black">
      {!userExists && <Login onSubmit={checkUserHandler} />}
      {userExists && <Content />}
    </main>
  );
}
