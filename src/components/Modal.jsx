import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Modal = ({ setModal }) => {
  const { setAudio, state } = useContext(ThemeContext);
  const modalClickHandler = () => {
    setModal(false);
    setAudio(true);
  };

  return (
    <div className="fixed top-0 right-0 bg-black bg-opacity-70 w-full min-h-screen z-50">
      <div className="flex justify-center items-center w-full min-h-screen">
        <div
          className={`px-11 py-6 ${
            state ? "bg-white" : "bg-[#6C3BAE]"
          } rounded-xl`}
        >
          <p className={`${state ? "text-black" : "text-white"} font-Grotesk`}>
            For better user experience turn the audio on
          </p>
          <div className="flex justify-center pt-3">
            <button
              onClick={modalClickHandler}
              className="mx-auto font-bold px-4 py-2 bg-[#F5C547] rounded-full"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
