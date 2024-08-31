import leftLine from "../assets/eventsline.png";
import Star from "../assets/shineStarc.png";
import Title from "../assets/allahakbar.png";
import TitleDark from "../assets/allahakbardark.png";
import TitleArabic from "../assets/allahakbarar.png";
import TitleArabicDark from "../assets/allahakbarardark.png";
import GreenBalloon from "../assets/greenballoon.png";
import RedBalloon from "../assets/redballoon.png";
import Redline from "../assets/eventredline.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Events = () => {
  const { state, language } = useContext(ThemeContext);
  const { scrollY } = useScroll();
  const x1 = useTransform(scrollY, [0, 2000], [0, 400]);
  const x2 = useTransform(scrollY, [0, 2000], [0, -400]);
  const x3 = useTransform(scrollY, [0, 2000], [0, 600]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -200]);
  const x4 = useTransform(scrollY, [0, 2000], [0, 300]);
  const y4 = useTransform(scrollY, [0, 2000], [0, -200]);
  const x5 = useTransform(scrollY, [0, 2000], [0, 200]);
  const y5 = useTransform(scrollY, [0, 2000], [0, 800]);
  const floatTransition = useSpring(
    { y: [0, -20, 0] },
    { duration: 7, ease: "easeInOut", repeat: Infinity }
  );
  const floatTransition2 = useSpring(
    { y: [0, -20, 0] },
    { duration: 4, ease: "easeInOut", repeat: Infinity }
  );
  return (
    <div className="relative w-full">
      <motion.img
        style={{ x: x1 }}
        className="absolute object-contain -top-32 -left-[470px]"
        src={leftLine}
        alt="line"
      />
      <motion.img
        style={{ x: x2 }}
        className="absolute object-contain bottom-80 md:bottom-40 -right-[500px] md:-right-[1000px]"
        src={Redline}
        alt="red line"
      />

      {/* container */}
      <div className="section-container">
        <div className="relative flex flex-col gap-24 md:gap-48 justify-center items-center md:pt-48 pb-44">
          <p
            className={`relative ${
              state ? "text-white" : "text-black"
            } font-Grotesk text-xl md:text-3xl font-light text-center mx-auto md:w-[600px] leading-7 md:leading-10 px-14 md:px-0`}
          >
            {language
              ? "الآن بعد أن أصبحنا جاهزين بملابس العيد الجديدة، حان وقت التكبير أو صلاة العيد.دعونا نكشف في هذه اللحظة الجميلة. لاحقًا دعونا نتشارك مع تجمع العائلة ونتبادل التحيات الحارة مع أحبائنا."
              : "Now that we're ready in our new Eid outfits,it's time for Takbeer or Eid prayers.Let's Reveal in this beautiful moment.Later Let's join the family gathering and exchange warm greetings with loved ones."}

            {/* absolute elements */}
            <img
              className="absolute animate-scale w-20 h-20 md:w-40 md:h-40 object-contain -top-20 md:-top-36 left-40 md:left-14"
              src={Star}
              alt="lighting star"
            />
          </p>
          <div className="flex justify-center items-center gap-9">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-2">
              <button
                className={` md:py-4 md:px-7 w-[180px] h-[60px] md:w-auto md:h-auto rounded-full text-white text-sm md:text-lg font-Grotesk font-medium ${
                  state ? "bg-[#F5C547] !text-black" : "bg-[#8858C6]"
                }`}
              >
                {language ? "كتيب أحداث العيد" : "Eid Events Booklet"}
              </button>
              <button
                className={` md:py-4 md:px-7 w-[180px] h-[60px]  md:w-auto md:h-auto rounded-full text-white text-sm md:text-lg font-Grotesk font-medium ${
                  state ? "bg-[#F5C547] !text-black" : "bg-[#8858C6]"
                }`}
              >
                {language ? "بطاقات تهنئة" : "Greeting Cards"}
              </button>
              <button
                className={` md:py-4 md:px-7 w-[180px] h-[60px]  md:w-auto md:h-auto rounded-full text-white text-sm md:text-lg font-Grotesk font-medium ${
                  state ? "bg-[#F5C547] !text-black" : "bg-[#8858C6]"
                }`}
              >
                {language ? "ديكورات المنازل" : "Houses Decorations"}
              </button>
              <button
                className={` md:py-4 md:px-7 w-[180px] h-[60px]  md:w-auto md:h-auto rounded-full text-white text-sm md:text-lg font-Grotesk font-medium ${
                  state ? "bg-[#F5C547] !text-black" : "bg-[#8858C6]"
                }`}
              >
                {language ? "أوسمة الشركات" : "Companies Decorations"}
              </button>
            </div>
          </div>
          {/* absolute title */}
          <motion.img
            style={{ x: x3, y: y3 }}
            className="absolute w-28 h-28 md:w-72 md:h-72 lg:w-96 lg:h-96 -top-20 md:-top-12 right-44 md:right-48 lg:right-64 object-contain"
            src={
              state
                ? language
                  ? TitleArabicDark
                  : TitleDark
                : language
                ? TitleArabic
                : Title
            }
            alt="title"
          />
          <motion.img
            style={{ x: x4, y: y4 + floatTransition }}
            whileInView={{ y: [0, -20, 0] }} // Creates a float effect
            transition={{
              duration: 10, // 10 seconds for one cycle
              ease: "easeInOut",
              repeat: Infinity, // Loops the animation infinitely
            }}
            className="absolute top-28 left-0 w-20 h-20 md:w-40 md:h-40 object-contain"
            src={RedBalloon}
            alt="red balloon"
          />
          <motion.img
            style={{ x: x5, y: y5 + floatTransition2 }}
            whileInView={{ y: [0, -20, 0] }} // Creates a float effect
            transition={{
              duration: 10, // 10 seconds for one cycle
              ease: "easeInOut",
              repeat: Infinity, // Loops the animation infinitely
            }}
            className="absolute bottom-32 -left-28 md:-left-52 w-20 h-20 md:w-60 md:h-60 object-contain"
            src={GreenBalloon}
            alt="green balloon"
          />
        </div>
      </div>
    </div>
  );
};
export default Events;
