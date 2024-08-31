import NavBg from "../assets/navBg.png";
import NavDark from "../assets/navDark2.png";
import EidMubarak from "../assets/EidMubarak.png";
import EidMubarakAr from "../assets/titlearabic.png";
import EidMubarakArDark from "../assets/titlearabicdark.png";
import EidMubarakDark from "../assets/EidMubarakdark.png";
import Pot from "../assets/largePot.png";
import Chocolate from "../assets/chocolate.png";
import Star from "../assets/shineStar.png";
import Navbar from "./Navbar";
import BigCookie from "../assets/bigCookie.png";
import Cookie from "../assets/cookie.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Hero = () => {
  const { state, language } = useContext(ThemeContext);

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 1000], [1, 1.5]);
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const x1 = useTransform(scrollY, [0, 1000], [0, -600]);
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);

  const x2 = useTransform(scrollY, [0, 1000], [0, 600]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 500]);
  return (
    <header className="pb-7 relative">
      <Navbar />
      {state ? (
        <img
          className="w-full absolute top-0 md:-top-16 lg:-top-64 z-[39] object-fill"
          src={NavDark}
          alt="nav background"
        />
      ) : (
        <img
          className="w-full absolute top-20 md:top-0 lg:top-0 -z-50 object-fill"
          src={NavBg}
          alt="nav background"
        />
      )}

      {/* headerSection */}
      <div className="pt-40 md:pt-72">
        <div className="section-container">
          <div className="w-full relative flex justify-center">
            <div className="relative">
              <motion.img
                style={{ scale, y }}
                className="w-[268px] h-[122px] object-contain md:w-[372px] md:h-[169px] "
                src={
                  state
                    ? language
                      ? EidMubarakArDark
                      : EidMubarakDark
                    : language
                    ? EidMubarakAr
                    : EidMubarak
                }
                alt="eid mubarak image"
              />
              {/* absolute components */}
              <motion.img
                style={{ x: x1, y: y1 }}
                className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 object-contain absolute -top-14 -left-11 md:-left-14 lg:-left-28 "
                src={Pot}
                alt="large pot"
              />
              <motion.img
                style={{ x: x2, y: y2 }}
                className="w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain absolute top-16 -right-2 "
                src={Chocolate}
                alt="chocolate"
              />
            </div>
            {/* star */}
            <img
              className="absolute animate-scale w-20 h-20 md:w-40 md:h-40 -top-32 md:top-0 right-5 object-contain"
              src={Star}
              alt="shining star"
            />
            {/* cookies */}
            <img
              className="absolute w-8 h-8 md:w-10 md:h-10 lg::w-16 lg::h-16 -bottom-24 md:-bottom-60 right-36 md:right-80 object-contain"
              src={Cookie}
              alt="bitten cookie"
            />
            <img
              className="absolute w-16 h-16 md:w-28 md:h-28 lg:w-40 lg:h-40 -bottom-40 md:-bottom-80 right-5 object-contain"
              src={BigCookie}
              alt="Bigger bitten cookie"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Hero;
