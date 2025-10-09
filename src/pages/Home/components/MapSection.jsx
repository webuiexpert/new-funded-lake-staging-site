import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import globeImg from "/assets/globe-bg.png";
import topSep from "/assets/top-saprator.jpg";
import botSep from "/assets/bot-saprator.jpg";
import PrimaryButton from "../../../Components/PrimaryButton";

const MapSection = () => {
  return (
    <div className="relative text-white lg:h-[120vh] xl:h-auto h-auto py-16 xl:py-44 px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center font-lexend">
       <img className="saperator absolute top-0 left-0 w-full" src={topSep} alt="" />
       <img className="saperator absolute bottom-0 left-0 w-full" src={botSep} alt="" />
      {/* Left Side */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-full md:max-w-[600px] mx-auto"
      >
        <img src={globeImg} alt="Globe" className="w-full" />

      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl"
      >
        <h5 className="text-2xl md:text-[3.5rem] text-white font-bold mb-6 md:text-left text-center">
          FUNDING TRADERS <br /> ALL OVER THE WORLD
        </h5>
        <p className="text-gray-300 md:text-lg text-md md:text-left text-center mb-10">
          At FundedLake, we are proud to say that we empower traders over 20+ countries and COUNTING.
          Our growing international presence proves that great trading opportunities know no borders.
        </p>
        <PrimaryButton text="Find out more about us"  link="https://yourwebsite.com/about"/>
      </motion.div>
    </div>
  );
};

export default MapSection;
