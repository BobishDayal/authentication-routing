import ImageContainer from "@/app/components/ImageContainer";

const Gallery = () => {
  return (
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
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
      </div>
    </div>
  );
};

export default Gallery;
