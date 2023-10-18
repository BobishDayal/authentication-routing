import ImageContainer from "@/app/components/ImageContainer";
import Data from "../../data";

const Gallery = () => {
  return (
    <div
      className=" w-full flex flex-col items-end justify-center my-8 "
      style={{
        backgroundImage: `url(/assets/pain.png)`,
        backgroundSize: "70% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
        height: "200vh",
      }}
    >
      <h3 className="text-8xl font-extrabold text-white mx-auto">Gallery</h3>
      <div className="grid grid-cols-2 gap-12 mx-32 mt-28">
        {Data.map((info) => {
          return <ImageContainer data={info} key={info.key} />;
        })}
      </div>
    </div>
  );
};

export default Gallery;
