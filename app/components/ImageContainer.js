const ImageContainer = (props) => {
  return (
    <div
      className="w-52 h-52  bg-gray-400 rounded-3xl shadow-custom"
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
