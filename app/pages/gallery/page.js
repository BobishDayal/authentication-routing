import ImageContainer from "@/app/components/ImageContainer";
import Data from "../../data";

const Gallery = () => {
  return (
    <div
      className=" w-full flex flex-col items-end justify-center my-36 opacity-80"
      style={{
        backgroundImage: `url(/assets/pain.png)`,
        backgroundSize: "80% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
        height: "230vh",
      }}
    >
      <h3 className="text-8xl font-extrabold text-red-500 mx-auto">Gallery</h3>
      <div className="grid grid-cols-2 gap-24 mx-32 mt-28">
        {Data.map((info) => {
          return <ImageContainer data={info} key={info.key} />;
        })}
      </div>
    </div>
  );
};

export default Gallery;
