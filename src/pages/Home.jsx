import Events from "../components/Events";
import FamilyEvents from "../components/FamilyEvents";
import Footer from "../components/Footer";
import Gifts from "../components/Gifts";
import GreetingCards from "../components/GreetingCards";
import Hero from "../components/Hero";
import Identity from "../components/Identity";
import Message from "../components/Message";
import Quote from "../components/Quote";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Loader from "../components/Loader";
import Modal from "../components/Modal";

const Home = () => {
  const { state } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const modal = setTimeout(() => {
      setModal(true);
    }, 3000);

    return () => clearTimeout(timer, modal);
  }, []);

  return (
    <div className={`${state ? "bg-[#8858C8] " : ""}`}>
      <Hero />
      <Identity />
      <Events />
      <Gifts />
      <GreetingCards />
      <FamilyEvents />
      <Quote />
      <Message />
      <Footer />
      {loading && <Loader />}
      {modal && (
        <Modal
          setModal={setModal}
          content={"For better user experience turn the audio on"}
          button={"ok"}
        />
      )}
    </div>
  );
};
export default Home;
