import Image from "next/image";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const loginButtonHandler = () => {
    router.push("/pages/signUp");
  };

  return (
    <>
      <nav className=" shadow-custom flex w-2/2 bg-red-600 h-20 w-full items-center justify-between  fixed top-0 z-10">
        <div className="w-16 h-16 rounded-full shadow-xl bg-gray-700 border-2 border-gray-300 hover:scale-125 ease-in duration-300 mx-20">
          <Image
            src="/assets/logo.png"
            width={100}
            height={100}
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
          className=" shadow-custom font-bold text-lg  px-5 py-2 mx-20 rounded-3xl  text-slate-50 bg-red-600  border-slate-50 hover:bg-slate-50 hover:text-black hover:scale-110 ease-in duration-300"
        >
          Login
        </button>
      </nav>

      <div
        className=" w-full h-screen "
        style={{
          backgroundImage: `url(/assets/home.png)`,
          backgroundSize: "76% 90%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <Image
          src="/assets/itachi.png"
          alt="itachi uchiha image"
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
    </>
  );
};

export default Page;
