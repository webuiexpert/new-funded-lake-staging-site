import React from "react";
import { NavLink } from "react-router-dom";
import discordIcon from "/assets/discord-icon.png";
import contactIcon from "/assets/contact-icon.png";
import dollarCubeIcon from "/assets/bicon-icons-bg-left.png";
import coineCubeIcon from "/assets/bicon-icons-bg-right.png";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function TraderWorld() {
  return (
    <div className="trade-world-section font-lexend bg-blackish text-white md:py-5 relative overflow-hidden">
      {/* Background Icons */}
      <img
        className="absolute top-20 left-10 w-60 rotate-[28deg] opacity-30"
        src={dollarCubeIcon}
        alt="Dollar Cube"
      />
      <img
        className="absolute bottom-16 right-10 w-56 -rotate-2 opacity-30"
        src={coineCubeIcon}
        alt="Coin Cube"
      />

      <div className="container w-full max-w-6xl mx-auto px-4 py-10 lg:px-0">
        {/* Heading Section */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.h2
            className="md:leading-[1.1em] font-bold title-font mb-2 text-center text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <span className="text-white">enabling, </span>traders <br />
            <span className="text-white">around the, </span>world
          </motion.h2>
        </div>

        {/* Content Boxes */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 grid-cols-1 gap-8 md:max-w-5xl mx-auto"
        >
          {/* Discord Card */}
          <motion.div
            variants={item}
            className="traders-world-col flex flex-col items-center text-center bg-dark rounded-2xl px-6 py-12 md:rounded-4xl lg:gap-6 shadow-xl"
          >
            <a
              href="https://discord.gg/vDSnjmxndy"
              target="_blank"
              rel="noopener noreferrer"
              className="col1-icon"
            >
              <img className="w-24 mx-auto mb-4" src={discordIcon} alt="Discord" />
            </a>
            <h3 className="md:text-3xl text-2xl font-bold text-white">
              JOIN OUR SERVER
            </h3>
            <h5 className="md:text-[24px] text-[20px] font-bold text-white">
              Discord Community
            </h5>
            <p className="text-center lg:w-[80%] text-[18px] text-gray-300">
              Join the fastest-growing trading community on Discord to get the
              latest updates, news, and more. Chat live with our customer
              support agents anytime!
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            variants={item}
            className="traders-world-col flex flex-col items-center text-center bg-dark rounded-2xl px-6 py-12 md:rounded-4xl lg:gap-6 shadow-xl"
          >
            <NavLink to="/contact-us" className="col2-icon">
              <img className="w-24 mx-auto mb-4" src={contactIcon} alt="Contact" />
            </NavLink>
            <h3 className="md:text-3xl text-2xl font-bold text-white">
              GET ASSISTANCE
            </h3>
            <h5 className="md:text-[24px] text-[20px] font-bold text-white">
              Round the Clock Support
            </h5>
            <p className="text-center lg:w-[80%] text-[18px] text-gray-300">
              Email us and benefit from our 24/7 multilingual support available
              to traders worldwide. For live chat, join our Discord community!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default TraderWorld;
