import Flag1 from "../assets/flag2.png";
import Flag2 from "../assets/flag1.png";
import Lamp from "../assets/lamp.png";
import Star from "../assets/shineStarc.png";
import { motion, useScroll, useTransform } from "framer-motion";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Identity = () => {
  const { state, language } = useContext(ThemeContext);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <div className="min-h-screen">
      <div className="relative">
        <img className="object-fill w-full" src={Flag1} alt="large flag" />
        <motion.img
          style={{ y }}
          className="object-fill w-full absolute bottom-0 right-0"
          src={Flag2}
          alt="large flag"
        />
      </div>
      {/* container */}
      <div className="section-container">
        <div className="w-full relative flex gap-6 flex-col justify-center py-32">
          <p
            className={`${
              state ? "text-white" : "text-black"
            } font-Grotesk text-xl md:text-3xl font-light text-center px-20 md:px-0 mx-auto md:w-[600px] leading-7 md:leading-10`}
          >
            {language
              ? "بعد عام كامل من الانتظار بصبر، ولكن بفارغ الصبر، أصبح عيد هنا أخيرًا! ارفعوا أيديكم عن كل من فاتته رائحة البخور والأزياء والطعام اللذيذ؟ لكن أولاً دعونا نستعد للعيد بملابسنا"
              : "After a Whole Year of patiently,but eagerly waiting,Eid is finally here! Hands up everyone who missed the incense smells, the outfits  and the delicious food? But First Lets get Eid -ready with our outfits"}
          </p>
          <button
            className={`py-2 px-4 w-44 mx-auto rounded-full text-white text-lg font-Grotesk font-semibold ${
              state ? "bg-[#F5C547] !text-black" : "bg-[#8858C6]"
            }`}
          >
            {language ? "هوية العيد" : "Eid identity"}
          </button>
          {/* lamp */}
          <img
            className="absolute w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 object-contain top-24 -left-6 md:top-0 md:left-0"
            src={Lamp}
            alt="lighting lamp"
          />
          <img
            className="absolute animate-scale w-24 h-24 md:w-36 md:h-36 lg:w-60 lg:h-60 object-contain top-32 md:top-0 right-0 md:right-24 transition-all duration-200 ease-in-out"
            src={Star}
            alt="shining star"
          />
        </div>
      </div>
    </div>
  );
};
export default Identity;
