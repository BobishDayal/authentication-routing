"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../public/assets/logo.png";

export default function Home() {
  const router = useRouter();

  const loginButtonHandler = () => {
    router.push("/pages/signUp");
  };

  return (
    <main className=" min-h-screen w-full items-center bg-black ">
      <nav
        className="flex w-2/2 bg-red-600 h-20 w-full items-center justify-between  fixed top-0"
        style={{
          boxShadow: ` rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`,
        }}
      >
        <div className="w-16 h-16 rounded-full shadow-xl bg-gray-700 border-2 border-gray-300 hover:scale-125 ease-in duration-300 mx-20">
          <Image
            src={logo}
            alt="picture of itachi uchiha"
            style={{ objectFit: "cover" }}
            quality={100}
            className="w-full h-full rounded-full "
          />
        </div>
        <ul className="flex text-gray-100 ">
          <li className="font-bold text-lg mx-12">Home</li>
          <li className="font-bold text-lg mx-12">Gallery</li>
          <li className="font-bold text-lg mx-12">About</li>
          <li className="font-bold text-lg mx-12">Contact</li>
        </ul>

        <button
          onClick={loginButtonHandler}
          style={{
            boxShadow: `rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`,
          }}
          className="font-bold text-lg  px-5 py-2 mx-20 rounded-3xl  text-slate-50 bg-red-600  border-slate-50 hover:bg-slate-50 hover:text-black hover:scale-110 ease-in duration-300"
        >
          Login
        </button>
      </nav>

      <div
        className=" w-full h-screen  "
        style={{
          backgroundImage: `url(/assets/home.png)`,
          backgroundSize: "76% 90%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <Image
          src="/assets/itachi.png"
          width={180}
          height={200}
          quality={100}
          style={{
            position: "absolute",
            left: "43%",
            bottom: "27%",
          }}
        />
      </div>
      <div
        className=" w-full flex flex-col items-end justify-center  "
        style={{
          backgroundImage: `url(/assets/pain.png)`,
          backgroundSize: "60% 90%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
          height: "200vh",
        }}
      >
        <h3 className="text-9xl font-extrabold text-white mx-64">Gallery</h3>
        <div className="grid grid-cols-2 gap-12 mx-32 mt-28">
          <div
            className="w-52 h-52  bg-gray-400 rounded-3xl"
            style={{
              boxShadow: `rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`,
            }}
          ></div>
          <div
            className="w-52 h-52  bg-gray-400 rounded-3xl"
            style={{
              boxShadow: `rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`,
            }}
          ></div>
          <div
            className="w-52 h-52  bg-gray-400 rounded-3xl"
            style={{
              boxShadow: `rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`,
            }}
          ></div>
          <div
            className="w-52 h-52  bg-gray-400 rounded-3xl"
            style={{
              boxShadow: `rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`,
            }}
          ></div>
          <div
            className="w-52 h-52  bg-gray-400 rounded-3xl"
            style={{
              boxShadow: `rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`,
            }}
          ></div>
          <div
            className="w-52 h-52  bg-gray-400 rounded-3xl"
            style={{
              boxShadow: `rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`,
            }}
          ></div>
          <div
            className="w-52 h-52  bg-gray-400 rounded-3xl"
            style={{
              boxShadow: `rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`,
            }}
          ></div>
          <div
            className="w-52 h-52  bg-gray-400 rounded-3xl"
            style={{
              boxShadow: `rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`,
            }}
          ></div>
        </div>
      </div>
    </main>
  );
}
