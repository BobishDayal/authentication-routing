const Wrapper = (props) => {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center "
      style={{
        backgroundImage: `url(/assets/background.jpg)`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
      }}
    >
      {props.children}
    </div>
  );
};

export default Wrapper;
