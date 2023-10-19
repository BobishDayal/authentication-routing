"use client";

import { useState } from "react";

const ImageContainer = (props) => {
  const [detailsState, setDetailsState] = useState(null);

  const toggleHandler = () => {
    setDetailsState(!detailsState);
  };

  return (
    <div
      onMouseEnter={toggleHandler}
      onMouseLeave={toggleHandler}
      className="w-52 h-56 opacity-80 rounded-3xl shadow-custom border-4 border-gray-200/[.4] hover:scale-125 duration-200 ease-out flex items-end hover:opacity-100 "
      style={{
        backgroundImage: `url(${props.data.image.src})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundClip: "content-box",
      }}
    >
      {!detailsState && (
        <h3 className="bg-black/[.6] text-white/[.9] font-bold grow text-center p-4 rounded-br-3xl rounded-bl-3xl  ">
          {props.data.name}
        </h3>
      )}
      {detailsState && (
        <div className="w-full h-full flex flex-col justify-center items-center bg-black/[.5] rounded-3xl ">
          <h4 className="text-xl text-white font-bold py-3">
            {props.data.name}
          </h4>
          <p className="text-gray-100 text-xss pt-1 px-2 text-center">
            {props.data.description}
          </p>
          <button className="p-2 text-red-600/[.7]  text-xs font-semibold mx-3 hover:text-red-600">
            More Details
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
