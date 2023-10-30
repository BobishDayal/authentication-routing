import { BiLogoFacebookSquare, BiPhone } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiSolidPhone } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { HiMapPin } from "react-icons/hi2";

const Contact = () => {
  return (
    <div
      className=" w-full flex flex-col items-end   opacity-80"
      style={{
        backgroundImage: `url(/assets/pain.png)`,
        backgroundSize: "56% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
        height: "150vh",
      }}
    >
      <h3 className="text-8xl font-extrabold text-red-800 mr-60 mt-16 mb-12">
        Contact me
      </h3>

      <div className=" h-2/5 w-2/5 border-2 border-white/[.6] rounded-xl mx-36 relative flex flex-col items-end">
        <h4 className="text-5xl font-extrabold text-gray-100 text-center my-9 mr-20 ">
          Get in Touch
        </h4>
        <div className="w-60 h-80 bg-red-800 absolute bottom-14 -left-16 rounded-lg shadow-custom flex flex-col justify-center">
          <p className="font-extrabold text-lg mx-5 mb-5 text-white">
            You can reach me on
          </p>

          <div className="flex flex-col mx-4 mb-7">
            <div className="flex my-2 items-center">
              <HiMapPin size={25} color="#333333" />
              <p className="mx-4 text-xs font-semibold text-gray-300">
                Kathmandu, Nepal
              </p>
            </div>
            <div className="flex  items-center ">
              <BiSolidPhone size={25} color="#333333" />
              <p className="mx-4 text-xs font-semibold  text-gray-300">
                +977 9765962655
              </p>
            </div>
            <div className="flex my-2 items-center">
              <BiLogoGmail size={25} color="#333333" />
              <p className="mx-4 text-xs font-semibold  text-gray-300">
                Bobishdayal@gmail.com
              </p>
            </div>
            <div className="flex items-center">
              <BiLogoLinkedin size={25} color="#333333" />
              <p className="mx-4 text-xs font-semibold  text-gray-300">
                efjfjjefjhje
              </p>
            </div>
          </div>
          <div className="flex justify-evenly items-center">
            <BiLogoFacebookSquare size={35} color="white" />
            <BiLogoInstagramAlt size={35} color="white" />
            <BiLogoGithub size={35} color="white" />
            <BiLogoTwitter size={35} color="white" />
          </div>
        </div>
        <form className=" mr-20  w-72">
          <label className="text-gray-300 font-extrabold ">Name</label>
          <br></br>
          <input className="w-full h-10 rounded-lg my-1 mb-4 bg-slate-400/[.3] border-2 border-white/[.2]" />
          <br></br>
          <label className="text-gray-300 font-bold">Your Message</label>
          <br></br>
          <textarea className="w-full h-24 rounded-lg my-1 mb-4  bg-slate-400/[.3] border-2 border-white/[.2]" />
          <br></br>
          <button
            type="submit"
            className="rounded-lg px-4 py-1 font-extrabold bg-red-600 shadow-custom text-white hover:scale-110 ease-in duration-100"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
