import { useContext, useEffect, useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import LogoDark from "../assets/Logodark.png";
import { ThemeContext } from "../context/ThemeContext";
import AudioFile from "../assets/audio1.mp3";
import AudioFile2 from "../assets/audio2.mp3";
import AudioFile3 from "../assets/audio3.mp3";
import AudioFile4 from "../assets/audio4.mp3";
import Light from "../assets/light.png";
import Dark from "../assets/dark.png";

const Navbar = () => {
  const { state, setState, language, setLanguage, audio, setAudio } =
    useContext(ThemeContext);
  const [position, setPosition] = useState(0);
  const [player, setPlayer] = useState(AudioFile);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    setPosition(Number(scrollPosition.toFixed(0)));
  };

  const audioRef = useRef(new Audio(player));

  //dynamic theme change
  let currentHour = new Date().getHours();

  useEffect(() => {
    if (currentHour >= 18 || currentHour < 6) {
      setState(true);
    } else {
      setState(false);
    }
  }, []);

  useEffect(() => {
    if (position > 0) {
      setPlayer(AudioFile);
    }
    if (position > 600) {
      setPlayer(AudioFile2);
    }
    if (position > 800) {
      setPlayer(AudioFile3);
    }
    if (position > 1900) {
      setPlayer(AudioFile4);
    }
  }, [position]);

  // Effect to handle audio playback
  useEffect(() => {
    audioRef.current.src = player;
    if (audio) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [audio, player]);

  // Effect to add and clean up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(position);

  return (
    <nav className="section-container z-40">
      <div className="relative flex justify-between items-center z-40 pt-7">
        {/* left */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-1 md:gap-2">
          <div className="flex gap-4 py-1 px-1 border-2 border-[#8858C6] bg-white rounded-full">
            <div
              onClick={() => setAudio(false)}
              className={`${
                !audio ? "bg-[#8858C8]" : ""
              } rounded-full p-1 sm:p-2`}
            >
              <FaVolumeMute
                className={`${
                  !audio ? "text-white" : "text-gray-400"
                } text-sm object-contain md:w-auto`}
              />
            </div>
            <div
              onClick={() => setAudio(true)}
              className={`${
                audio ? "bg-[#8858C8]" : ""
              } rounded-full p-1 sm:p-2`}
            >
              <FaVolumeUp
                className={`${audio ? "text-white" : "text-gray-400"} text-sm`}
              />
            </div>
          </div>
          <div
            onClick={() => setLanguage(!language)}
            className="px-3 py-1 sm:py-2 sm:px-5 border-2 border-[#8858C6] bg-white rounded-full hover:cursor-pointer"
          >
            <span className="text-[#8858C6]">
              {language ? "English" : "العربية"}
            </span>
          </div>
        </div>

        <div className="items-center">
          {/* <input
            type="checkbox"
            value="synthwave"
            onClick={() => setState(!state)}
            className="toggle py-5 px-8 theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
          /> */}
          <div
            onClick={() => setState(!state)}
            className={`flex gap-5 ${
              state ? "bg-[#222222]" : "bg-[#2fb4ee]"
            } rounded-full`}
          >
            <img
              className={`flex-1 w-9 h-9 object-contain ${
                !state ? "-z-20" : ""
              }`}
              src={Dark}
              alt="darkmode"
            />
            <img
              className={`flex-1 w-9 h-9 object-contain ${
                state ? "-z-10" : ""
              }`}
              src={Light}
              alt="lightmode"
            />
          </div>
        </div>
        {state ? (
          <img
            className="absolute top-6 left-[36%] md:left-[46%] w-[111px] h-[80px] object-contain"
            src={LogoDark}
            alt="logo"
          />
        ) : (
          <img
            className="absolute top-6 left-[36%] md:left-[46%] w-[111px] h-[80px] object-contain"
            src={Logo}
            alt="logo"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
