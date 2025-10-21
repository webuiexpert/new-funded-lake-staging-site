import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import globeImg from "/assets/globe-bg.png";
import topSep from "/assets/top-saprator.jpg";
import botSep from "/assets/bot-saprator.jpg";
import PrimaryButton from "../../../Components/PrimaryButton";

const MapSection = () => {
  return (
    <div className="relative text-white lg:h-[120vh] xl:h-auto h-auto py-16 xl:py-44 px-6 md:px-4 md:py-24 grid md:grid-cols-2 gap-12 items-center font-lexend">
       <img className="saperator absolute top-0 left-0 w-full" src={topSep} alt="" />
       <img className="saperator absolute bottom-0 left-0 w-full" src={botSep} alt="" />
      {/* Left Side */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="scale-up relative w-full md:max-w-[600px] mx-auto"
      >
        <img src={globeImg} alt="Globe" className="w-full" />

      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl flex flex-col justify-center md:items-start items-center"
      >
        <h3 className="text-2xl lg:text-[3rem] md:text-3xl text-white font-bold lg:mb-6 mb-4 md:text-left w-full text-center">
          FUNDING TRADERS <br /> ALL OVER THE WORLD
        </h3>
        <p className="text-gray-300 md:text-base text-sm md:text-left text-justify mb-10">
          At FundedLake, we are proud to say that we empower traders over 20+ countries and COUNTING.
          Our growing international presence proves that great trading opportunities know no borders.
        </p>
        <PrimaryButton text="Find out more about us"  link="/who-we-are"/>
      </motion.div>
    </div>
  );
};

export default MapSection;
