import LOGO from "../assets/Logo.png";
import LOGODARK from "../assets/Logodark.png";
import Background from "../assets/background.png";
import RedLine from "../assets/eventredline.png";
import Home from "../assets/house.png";
import Home2 from "../assets/house2.png";
import Tree from "../assets/tree.png";
import Wave from "../assets/pinkline.png";
import Father from "../assets/father.png";
import Mother from "../assets/mother.png";
import Daughter from "../assets/daughter.png";
import Castle from "../assets/castle.png";
import Wheel from "../assets/giantwheel.png";
import BlueLine from "../assets/eventsline.png";
import YellowLine from "../assets/yellowline.png";
import PurpleLine from "../assets/familywavepurple.png";
import Bells from "../assets/bells.png";
import Greenline1 from "../assets/wavegreen.png";
import Greenline2 from "../assets/greenline.png";
import Pot from "../assets/pot.png";
import Gift1 from "../assets/gift.png";
import Gift2 from "../assets/gift2.png";
import Gift3 from "../assets/gift3.png";
import Lamp from "../assets/lamp.png";
import Chocolate from "../assets/chocolate.png";
import Sun from "../assets/sun.png";
import Balloon from "../assets/biggreenballoon.png";
import Balloon2 from "../assets/purpleballoon.png";
import RedBalloon from "../assets/redballoon.png";
import Star from "../assets/shineStarc.png";
import Star2 from "../assets/shineStar2.png";
import Kite from "../assets/kitebottom.png";
import VertBalloon from "../assets/vertballoon.png";
import DualKite from "../assets/dualkite.png";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion, useScroll, useTransform } from "framer-motion";

const Message = () => {
  const { state, language } = useContext(ThemeContext);
  const { scrollY } = useScroll();
  const x2 = useTransform(scrollY, [0, 15000], [0, 1000]);
  return (
    <div className="w-full">
      {/* background */}
      <div className="relative">
        <img
          className="w-full object-fill"
          src={Background}
          alt="background image"
        />
        {/* absolute images */}
        <img
          className="absolute object-contain w-24 h-24 sm:w-36 sm:h-36 animate-float top-48 sm:top-80 right-24 sm:right-[440px] z-50"
          src={DualKite}
          alt="two kites"
        />
        <img
          className="absolute object-contain w-40 h-40 sm:w-72 sm:h-72 top-16 sm:top-32 left-0"
          src={VertBalloon}
          alt="blue balloon"
        />
        <img
          className="absolute w-40 h-40 sm:w-72 sm:h-72 object-contain -top-24 sm:-top-52 animate-scale left-0"
          src={Star}
          alt="star"
        />
        <img
          className="absolute w-16 h-16 sm:w-24 sm:h-28 object-contain top-3 sm:top-6 left-6 sm:left-11 rotate-[-17deg] animate-scale"
          src={Star2}
          alt="star"
        />
        <motion.img
          style={{ x: x2 }}
          className="absolute w-40 h-40 sm:w-96 sm:h-96 object-contain top-0 -left-40 md:-left-40 lg:left-0 sm:-left-52"
          src={Sun}
          alt="sun"
        />
        <img
          className="absolute object-contain w-32 h-32 sm:w-64 sm:h-64 animate-float -top-32 sm:-top-64 right-48 sm:right-96"
          src={Balloon}
          alt="green balloon"
        />
        <img
          className="absolute object-contain w-28 h-28 sm:w-48 sm:h-48 animate-float2 -top-32 sm:-top-64 right-40 sm:right-[680px]"
          src={Kite}
          alt="yellow kite"
        />
        <img
          className="absolute w-72 h-24 sm:w-[400px] sm:h-36 object-contain top-56 sm:top-80 left-0"
          src={PurpleLine}
          alt="purple line"
        />
        <img
          className="absolute w-72 h-24 sm:w-[400px] sm:h-36 object-contain top-40 sm:top-56 left-0"
          src={YellowLine}
          alt="yellow line"
        />
        <img
          className="absolute w-72 h-24 sm:w-[400px] sm:h-36 object-contain -bottom-20 sm:bottom-40 -right-32 sm:-right-[680px]"
          src={Greenline2}
          alt="green wave"
        />
        <img
          className="absolute object-contain w-40 h-40 sm:w-72 sm:h-72 top-[520px] sm:top-[720px] -left-36 sm:-left-72 z-[41]"
          src={BlueLine}
          alt="blue line"
        />
        <img
          className="absolute object-contain w-24 h-24 sm:w-32 sm:h-32 top-64 sm:top-96 left-0"
          src={Gift3}
          alt="giftbox"
        />
        <img
          className="absolute object-contain w-32 h-32 sm:w-52 sm:h-52 top-48 sm:top-80 right-9 sm:right-56"
          src={Home2}
          alt="second house"
        />
        <img
          className="absolute object-contain w-32 h-32 sm:w-52 sm:h-52 top-48 sm:top-80 right-20 sm:right-96 z-[19]"
          src={Home}
          alt="house"
        />
        <img
          className="absolute object-contain w-32 h-32 sm:w-52 sm:h-52 top-44 sm:top-64 right-[140px] sm:right-[480px] lg:top-72"
          src={Tree}
          alt="tree"
        />
        <img
          className="absolute object-contain w-36 h-36 sm:w-72 sm:h-72 top-24 sm:top-40 left-0"
          src={Bells}
          alt="bells"
        />
        <img
          className="absolute object-contain w-48 h-48 sm:w-96 sm:h-96 top-32 sm:top-40 left-8 sm:left-16"
          src={Wheel}
          alt="giant wheel"
        />
        <img
          className="absolute object-contain w-48 h-48 sm:w-96 sm:h-96 top-32 sm:top-48 left-16 sm:left-36"
          src={Castle}
          alt="castle"
        />
        <img
          className="absolute w-full object-fill top-[320px] sm:top-[490px] right-0 z-40"
          src={Wave}
          alt="family wave"
        />
        <img
          className="absolute object-contain w-48 h-48 sm:w-96 sm:h-96 top-36 sm:top-44 left-40 sm:left-80 z-20 lg:top-56"
          src={Father}
          alt="a father holding his son"
        />
        <img
          className="absolute object-contain w-48 h-48 sm:w-96 sm:h-96 top-36 sm:top-44 left-52 sm:left-[520px] z-10"
          src={Mother}
          alt="mother holding bag"
        />
        <img
          className="absolute object-contain w-36 h-36 sm:w-72 sm:h-72 top-52 sm:top-64 left-52 sm:left-[470px] z-20 lg:top-72"
          src={Daughter}
          alt="daughter"
        />
        <img
          className="absolute w-72 h-24 sm:w-[400px] sm:h-36 object-contain top-72 sm:top-[450px] left-0"
          src={BlueLine}
          alt="blue line"
        />
        <img
          className="absolute object-contain w-24 h-24 sm:w-32 sm:h-32 top-64 sm:top-96 right-0 sm:right-6"
          src={Gift1}
          alt="gift box"
        />
        <img
          className="absolute object-contain w-24 h-24 sm:w-32 sm:h-32 top-32 sm:top-40 right-6 sm:right-11"
          src={RedBalloon}
          alt="red balloon"
        />
        <img
          className="absolute object-contain w-16 h-16 sm:w-24 sm:h-24 animate-float3 top-48 sm:top-72 right-24 sm:right-72"
          src={RedBalloon}
          alt="red balloon"
        />
        <img
          className="absolute object-contain w-24 h-24 sm:w-40 sm:h-40 animate-float2 top-48 sm:top-72 right-16 sm:right-28"
          src={Balloon2}
          alt="purple balloon"
        />
        <img
          className="absolute object-contain w-24 h-24 sm:w-32 sm:h-32 animate-float top-40 sm:top-56 right-3 sm:right-6"
          src={Balloon}
          alt="green balloon"
        />
        <img
          className="absolute object-contain w-24 h-24 sm:w-28 sm:h-28 md:w-72 md:h-72 top-72 sm:top-96 right-0 z-[47]"
          src={Pot}
          alt="a pot"
        />
        <img
          className="absolute w-full object-fill top-[300px] sm:top-[390px] right-0 z-[42]"
          src={RedLine}
          alt="red line"
        />
        <img
          className="absolute object-contain w-12 h-12 sm:w-20 sm:h-20 md:w-40 md:h-40 top-[320px] sm:top-[480px] right-[110px] sm:right-40 z-[43]"
          src={Gift2}
          alt="giftbox"
        />
        <img
          className="absolute z-50 object-contain w-16 h-16 sm:w-56 sm:h-56 rotate-45 -bottom-28 sm:bottom-12 right-48 sm:right-[580px]"
          src={Chocolate}
          alt="chocolate"
        />
        <img
          className="absolute w-full object-fill -bottom-32 sm:-bottom-32 lg:-bottom-3 left-0 z-[43]"
          src={Greenline1}
          alt="green wave"
        />
        <img
          className="absolute object-contain w-20 h-20 sm:w-40 sm:h-40 -bottom-48 sm:bottom-0 left-24 sm:left-36 z-[46]"
          src={Lamp}
          alt="lamp"
        />
      </div>

      <div className="section-container pt-52">
        <div className="flex justify-center pt-9 pb-16">
          <a
            href="#hero"
            className={`py-3 px-12 mx-auto rounded-full text-white text-lg font-Grotesk font-semibold transition-all duration-300 ease-in-out ${
              state
                ? "bg-[#F5C547] !text-black hover:bg-[white]"
                : "bg-[#8858C6] hover:bg-[#F5C547]"
            }`}
          >
            {language ? "أعد الرحلة" : "Replay the journey"}
          </a>
        </div>
        <div className="flex justify-center pb-36 pt-6">
          <div className="p-12 border-r-[1px] border-[#902cf5]">
            <img src={state ? LOGODARK : LOGO} alt="eid events" />
          </div>
          <div className="p-12">
            <img src={state ? LOGODARK : LOGO} alt="eid events" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Message;
