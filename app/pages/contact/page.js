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
      <h3 className="text-8xl font-extrabold text-red-500 mr-60 mt-16 mb-12">
        Contact me
      </h3>

      <div className=" h-2/5 w-2/5 border-2 border-white/[.6] rounded-xl mx-36 relative flex flex-col items-end">
        <h4 className="text-5xl font-extrabold text-white text-center my-9 mr-20 ">
          Get in Touch
        </h4>
        <div className="w-60 h-80 bg-slate-300 absolute bottom-14 -left-16 rounded-lg shadow-custom"></div>
        <form className=" mr-20  w-72">
          <label className="text-white font-extrabold ">Name</label>
          <br></br>
          <input className="w-full h-10 rounded-lg my-1 mb-4 bg-slate-400/[.3] border-2 border-white/[.2]" />
          <br></br>
          <label className="text-white font-bold">Your Message</label>
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
