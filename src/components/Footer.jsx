import GreenLine from "../assets/footergreen.png";
import RedLine from "../assets/footerorange.png";
import PinkLine from "../assets/footerpink.png";

const Footer = () => {
  return (
    <div className="relative w-full pb-24">
      {/* absolute */}
      <img
        className="object-fill w-full h-full"
        src={GreenLine}
        alt="green wave"
      />
      <img
        className="absolute object-fill top-0 rotate-12 -left-56 md:-left-[400px] w-full "
        src={RedLine}
        alt="red wave"
      />
      <img
        className="absolute top-2 md:top-6 -rotate-12 -right-60 md:-right-[340px]"
        src={PinkLine}
        alt="pink wave"
      />
      <div className="section-container pb-40"></div>
    </div>
  );
};
export default Footer;
