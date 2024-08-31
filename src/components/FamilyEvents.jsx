import Castle from "../assets/castle.png";
import Wheel from "../assets/wheel.png";
import RedLine from "../assets/familyline.png";
import BlueLine from "../assets/familyline2.png";
import Balloon from "../assets/familyballoon.png";
import Cookie from "../assets/cookie.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion, useScroll, useTransform } from "framer-motion";

const FamilyEvents = () => {
  const { state, language } = useContext(ThemeContext);
  const { scrollY } = useScroll();
  const x2 = useTransform(scrollY, [0, 4000], [0, 900]);
  const x3 = useTransform(scrollY, [0, 4000], [0, -900]);
  const x4 = useTransform(scrollY, [0, 9000], [0, -2000]);
  const x5 = useTransform(scrollY, [0, 9000], [0, -3300]);
  return (
    <div className="relative w-full">
      <motion.img
        style={{ x: x3 }}
        className="absolute -top-28 md:-top-40 lg:-top-96 -right-[750px] md:-right-[900px] lg:-right-[900px] w-64 h-64 md:w-80 md:h-80 lg:w-auto lg:h-auto object-contain"
        src={Castle}
        alt="castle"
      />
      <motion.img
        style={{ x: x2 }}
        className="absolute top-56 md:top-60 lg:top-0 -left-[800px] md:-left-[1020px] lg:-left-[1020px] w-64 h-64 md:w-96 md:h-96 lg:w-auto lg:h-auto object-contain"
        src={Wheel}
        alt="wheel"
      />
      <motion.img
        style={{ x: x4 }}
        className="absolute z-10 top-80 -right-[800px] md:-right-[1200px] lg:-right-[1080px]"
        src={RedLine}
        alt="redline"
      />
      <motion.img
        style={{ x: x5 }}
        className="absolute top-80 -right-[1400px] md:-right-[1600px] lg:-right-[1600px]"
        src={BlueLine}
        alt="blue line"
      />
      {/* container */}
      <div className="section-container">
        <div>
          <div className="pt-1 md:pt-28 pb-72">
            <p
              className={`${
                state ? "text-white" : "text-black"
              } font-Grotesk text-xl md:text-3xl font-light text-center mx-auto md:w-[600px] leading-7 md:leading-10 px-20 md:px-0`}
            >
              {language
                ? "بعد ذلك، متعة للعيون ووليمة للبطن، غداء العيد مع العائلة. على الرغم من أننا قد نفتقد القليل منها بسبب غيبوبة الطعام، إلا أنه لا يزال هناك مجال كبير للضحك والمرح."
                : "Next up, a treat for the eyes and a feast for the belly—it's Eid Lunch with family. Although we might be missing a few due to food coma, there's still plenty of room for laughter and fun."}
            </p>
          </div>
          <div className="relative flex flex-col gap-12 pt-10 pb-72">
            <p
              className={`${
                state ? "text-white" : "text-black"
              } font-Grotesk text-xl md:text-3xl font-light text-center mx-auto md:w-[600px] leading-7 md:leading-10 px-16 md:px-0`}
            >
              {language
                ? "بعد خروجنا من غيبوبة العيد، أصبح الجميع متحمسين لنزهات العيد. أين نذهب؟ ما المغامرات التي تنتظر؟ لا تقلق، لقد قمنا بتغطية أحداث العيد."
                : "After we emerge from our Eid coma, everyone’s excited about Eid outings. Where do we go? What adventures await? Don't worry, we have you covered with Eid events."}
            </p>
            <button
              className={`py-2 px-11 md:px-4 md:w-[460px] mx-auto rounded-full text-white text-lg font-Grotesk font-semibold transition-all duration-300 ease-in-out ${
                state
                  ? "bg-[#F5C547] !text-black hover:bg-[white]"
                  : "bg-[#8858C6] hover:bg-[#F5C547]"
              }`}
            >
              {language ? "اكتشف أحداث العيد لدينا" : "Discover our Eid Events"}
            </button>
            {/* absolute */}
            <img
              className="absolute animate-float top-8 md:-top-10 left-0 md:left-16 w-36 h-36 md:w-auto object-contain"
              src={Balloon}
              alt="balloon"
            />
            <img
              className="absolute w-14 h-14 md:w-24 md:h-24 object-contain top-0 right-14"
              src={Cookie}
              alt="cookie"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FamilyEvents;
