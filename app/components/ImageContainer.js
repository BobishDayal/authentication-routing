const ImageContainer = (props) => {
  return (
    <div
      className="w-52 h-52  rounded-3xl shadow-custom border-4 border-gray-200/[.4] hover:scale-125 duration-200 ease-out"
      style={{
        backgroundImage: `url(${props.data.image.src})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
      }}
    ></div>
  );
};

export default ImageContainer;
