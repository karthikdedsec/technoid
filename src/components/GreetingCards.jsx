import GreetingCard1 from "../assets/greetingcardenglish.png";
import GreetingCard2 from "../assets/greetingcardenglish2.png";
import GreetingCardArabic from "../assets/greetingcardarabic.png";
import GreetingCardArabicWhite from "../assets/greetingcardarabicwhite.png";
import Balloon from "../assets/purpleballoon.png";
import Cookie from "../assets/bigCookie.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const GreetingCards = () => {
  const { state, language } = useContext(ThemeContext);
  const { scrollY } = useScroll();
  return (
    <div className="w-full min-h-screen">
      <div className="section-container">
        <div className="py-44">
          <div className="relative flex gap-3 justify-center items-center">
            <div className="w-[168px] h-[168px] md:w-[308px] md:h-[308px] border-[1px] rounded-xl border-[#8858C6] overflow-hidden">
              <img
                className="object-cover"
                src={language ? GreetingCardArabicWhite : GreetingCard1}
                alt="greeting card"
              />
            </div>
            <div className="w-[168px] h-[168px] md:w-[308px] md:h-[308px] border-[1px] rounded-xl border-[#8858C6] overflow-hidden">
              <img
                className="object-cover"
                src={language ? GreetingCardArabic : GreetingCard2}
                alt="greeting card"
              />
            </div>
            {/* absolute elements */}
            <img
              className="absolute animate-float w-32 h-32 md:w-52 md:h-52 object-contain -bottom-36 md:bottom-0 right-20 md:right-32"
              src={Balloon}
              alt="purple balloon"
            />
            <img
              className="absolute w-16 h-16 md:w-24 md:h-24 lg:w-40 lg:h-40 top-0 left-24 md:left-40 object-contain"
              src={Cookie}
              alt="bitten cookie"
            />
          </div>
          <h2
            className={`${
              state ? "text-[#87EC6C]" : "text-[#eb436f]"
            } font-Grotesk font-medium text-xl md:text-3xl text-center pt-28`}
          >
            {language ? "بطاقات تهنئة" : "Greeting Cards"}
          </h2>
          <h3
            className={`${
              state ? "text-white" : "text-black"
            } text-xl md:text-3xl font-Grotesk font-light text-center pt-4`}
          >
            {language ? "للمشاركة مع أحبائك" : "To Share With your Loved Ones"}
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 pt-8">
            <button
              className={`py-2 px-6 md:py-4 md:px-7 w-full md:w-72 rounded-full text-white text-base font-Grotesk font-medium ${
                state ? "bg-[#F5C547] !text-black" : "bg-[#8858C6]"
              }`}
            >
              {language ? "تحياتك" : "Your Greeting"}
            </button>
            <button
              className={`py-2 px-6 md:py-4 md:px-7 w-full md:w-72 rounded-full text-white text-base font-Grotesk font-medium ${
                state ? "bg-[#F5C547] !text-black" : "bg-[#8858C6]"
              }`}
            >
              {language ? "اصنع بنفسك" : "Create Your Own"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GreetingCards;
