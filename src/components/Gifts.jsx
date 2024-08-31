import BlueLine from "../assets/eventsline.png";
import GreenLine from "../assets/giftgreenline.png";
import Wave from "../assets/familywave.png";
import WaveDarks from "../assets/familywavedark.png";
import Father from "../assets/father.png";
import Mother from "../assets/mother.png";
import Daughter from "../assets/daughter.png";
import GreenBill from "../assets/cash3.png";
import BrownBill from "../assets/cash1.png";
import GiftBox from "../assets/GiftBox.png";
import GiftTop from "../assets/GiftTop.png";
import Envelope from "../assets/envelope.png";
import Sbill1 from "../assets/smallbill.png";
import Sbill2 from "../assets/smallbill2.png";
import Sbill3 from "../assets/smallbill3.png";

import { motion, useScroll, useTransform } from "framer-motion";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Gifts = () => {
  const { state, language } = useContext(ThemeContext);
  const { scrollY } = useScroll();
  const x1 = useTransform(scrollY, [0, 3000], [0, 600]);
  const x2 = useTransform(scrollY, [0, 3000], [0, 400]);

  // box
  const x3 = useTransform(scrollY, [0, 4000], [0, 100]);
  const y3 = useTransform(scrollY, [0, 10000], [0, -700]);
  const y4 = useTransform(scrollY, [0, 4000], [0, -400]);

  //envelope
  const rotate = useTransform(scrollY, [0, 7000], [0, 90]);

  return (
    <div className="w-full relative">
      {/* absolute contents */}
      <motion.img
        style={{ x: x1 }}
        className="absolute z-10 -top-40 md:top-0 left-[-520px] md:-left-[854px]"
        src={BlueLine}
        alt="Blue line"
      />
      <motion.img
        style={{ x: x2 }}
        className="absolute  -top-44 left-[-350px] md:-left-[1200px]"
        src={GreenLine}
        alt="Red line"
      />
      <img
        className="absolute z-40 -bottom-7 md:-bottom-[300px] lg:-bottom-80 left-0 w-64 h-64  md:w-[580px] md:h-[580px] object-contain"
        src={state ? WaveDarks : Wave}
        alt="family wave"
      />
      <img
        className="absolute z-20 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 object-contain bottom-24 md:-bottom-12 left-0"
        src={Father}
        alt="a father holding his son"
      />
      <img
        className="absolute z-10 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 object-contain bottom-24 md:-bottom-12 left-28 md:left-32 lg:left-56"
        src={Mother}
        alt="mother holding bag"
      />
      <img
        className="absolute z-20 w-36 h-36 md:w-52 md:h-52 lg:w-72 lg:h-72 object-contain bottom-24 md:-bottom-12 left-16 md:left-28 lg:left-44"
        src={Daughter}
        alt="daughter"
      />
      {/* container */}
      <div className="section-container pt-48 md:pt-64 pb-72">
        <p
          className={`relative ${
            state ? "text-white" : "text-black"
          } font-Grotesk text-xl md:text-3xl font-light text-center px-14 md:px-0 mx-auto md:w-[600px] leading-7 md:leading-10`}
        >
          {language
            ? "بعد ذلك الوقت العائلي الذي تشتد الحاجة إليه، هذا هو الجزء المفضل لدى الأطفال: إيديا! حان الوقت لهم للانخراط في مزاح ودي حول من حصل على أكبر عدد."
            : "After that much-needed family time, it's the kids' favorite part: Eideyah! Time for them to engage in friendly banter about who received the most."}

          {/* absolute */}
          <img
            className="absolute -top-48 md:-top-10 left-0 md:-left-40 lg:-left-96 w-12 h-12 md:w-24 md:h-24 object-contain"
            src={GreenBill}
            alt="green bill"
          />
          <motion.img
            style={{ y: y4 }}
            className="absolute top-16 md:top-60 left-28 md:-left-20 lg:-left-52 w-12 h-12 md:w-24 md:h-24 object-contain"
            src={BrownBill}
            alt="brown bill"
          />
          <img
            className="absolute -top-52 right-0 md:-right-16 lg:-right-64 w-20 h-20 md:w-40 md:h-40 lg:w-60 lg:h-60 object-contain"
            src={GiftBox}
            alt="gift box"
          />
          <motion.img
            style={{ x: x3, y: y3 }}
            className="absolute -top-[194px] right-0 md:-right-14 lg:-right-64 w-20 h-20 md:w-40 md:h-40 lg:w-60 lg:h-60 object-contain"
            src={GiftTop}
            alt="gift top"
          />
          <motion.img
            style={{ rotate }}
            className="absolute w-16 h-16 md:w-40 md:h-40 bottom-0 md:-bottom-44 right-0 md:-right-20 lg:-right-48 object-contain"
            src={Envelope}
            alt="an envelope"
          />
          <img
            className="absolute w-12 h-12 md:w-24 md:h-24 bottom-7 md:-bottom-24 right-0 md:-right-5 lg:-right-48 object-contain transform rotate-45"
            src={Sbill1}
            alt="bill"
          />
          <img
            className="absolute w-8 h-8 md:w-16 md:h-16 bottom-7 md:-bottom-24 right-0 md:-right-20 lg:-right-32 object-contain transform rotate-45"
            src={Sbill2}
            alt="bill"
          />
          <img
            className="absolute w-12 h-12 md:w-24 md:h-24 bottom-4 md:-bottom-32 right-7 md:-right-14 object-contain"
            src={Sbill3}
            alt="bill"
          />
        </p>
      </div>
    </div>
  );
};
export default Gifts;
