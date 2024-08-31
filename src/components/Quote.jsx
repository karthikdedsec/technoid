import EidQuote from "../assets/eidquote.png";
import EidQuoteDark from "../assets/eidquotedark.png";
import EidQuoteArabic from "../assets/quotearabic.png";
import EidQuoteArabicDark from "../assets/quotearabicdark.png";
import Guitar from "../assets/guitar.png";
import GreenBalloon from "../assets/greenballoon.png";
import PinkKite from "../assets/pinkkite.png";
import Music1 from "../assets/music1.png";
import Music2 from "../assets/music2.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Quote = () => {
  const { state, language } = useContext(ThemeContext);
  return (
    <div className="w-full">
      <div className="section-container">
        <div className="relative flex justify-center items-center pb-96">
          <img
            className="w-80 h-80 md:w-[680px] md:h-[320px] object-contain"
            src={
              state
                ? language
                  ? EidQuoteArabicDark
                  : EidQuoteDark
                : language
                ? EidQuoteArabic
                : EidQuote
            }
            alt="q quote about eid"
          />
          {/* absolute */}
          <div>
            <img
              className=" absolute -top-12 md:-top-44 left-0 w-40 h-40 md:w-80 md:h-80 object-contain"
              src={Guitar}
              alt="guitar"
            />
            <div className="relative"></div>
            <img
              className="absolute w-10 h-10 md:w-20 md:h-20 object-contain -top-20 md:-top-64 left-20 md:left-36 animate-up"
              src={Music1}
              alt="floating music"
            />
            <img
              className="absolute w-10 h-10 md:w-20 md:h-20 object-contain top-24 md:-top-11 left-0 animate-up2"
              src={Music2}
              alt="floating music"
            />
          </div>

          <img
            className="absolute animate-float -top-[460px] md:-top-48 right-0 md:right-20 w-20 h-20 md:w-32 md:h-32 object-contain"
            src={GreenBalloon}
            alt="green balloon"
          />
          <img
            className="hidden md:block absolute top-0 right-20 w-40 h-40 object-contain"
            src={PinkKite}
            alt="green balloon"
          />
        </div>
      </div>
    </div>
  );
};
export default Quote;
