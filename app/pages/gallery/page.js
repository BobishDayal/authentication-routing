import ImageContainer from "@/app/components/ImageContainer";
import Data from "../../data";

const Gallery = () => {
  return (
    <div
      className=" w-full flex flex-col items-end justify-center  opacity-80"
      style={{
        backgroundImage: `url(/assets/akatsukiLogo.jpg)`,
        backgroundSize: "100% 80%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "140vh",
      }}
    >
      <h3 className="text-8xl font-extrabold text-red-500 mx-auto">Members</h3>
      <div className="grid grid-cols-5 gap-24 mx-auto mt-28">
        {Data.map((info) => {
          return <ImageContainer data={info} key={info.key} />;
        })}
      </div>
    </div>
  );
};

export default Gallery;
