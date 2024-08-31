import Loading from "../assets/Loading.png";

const Loader = () => {
  return (
    <div className="fixed top-0 right-0 w-full min-h-screen z-50">
      <div className="flex justify-center items-center w-full h-screen bg-white">
        <img
          src={Loading}
          className="w-44 h-44 object-contain animate-spinSlow"
          alt="loader"
        />
      </div>
    </div>
  );
};
export default Loader;
