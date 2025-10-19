import topSep from "/assets/top-saprator.jpg";
import botSep from "/assets/bot-saprator.jpg";
import stepsImg1 from "/assets/step-1.png";
import stepsImg2 from "/assets/step-2.png";
import stepsImg3 from "/assets/step-3.png";
import stepsIcon1 from "/assets/evaluation-phase-1.png";
import stepsIcon2 from "/assets/funded-phase-2.png";
import stepsIcon3 from "/assets/payout-icon.png";
import arrowIcon from "/assets/blue-right-arrow.png";
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

function HowWorks() {
  return (
    <div className="text-white md:py-24 py-13 md:px-0 px-4 relative">
      <div className="navy-left-side-gradient d-block"></div>
      <div className="navy-right-side-gradient d-block"></div>
      <img
        className="scale-plus-animation absolute top-1/2 left-10 w-56 rotate-28"
        src={dollarCubeIcon}
        alt=""
      />
      <img
        className="scale-plus-animation absolute top-1/2 right-20 w-56 -rotate-32"
        src={coineCubeIcon}
        alt=""
      />

      <img
        className="saperator absolute top-0 left-0 w-full"
        src={topSep}
        alt=""
      />
      <img
        className="saperator absolute bottom-0 left-0 w-full"
        src={botSep}
        alt=""
      />

      <motion.h2
        className="text-center mt-2"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        How it works
      </motion.h2>

      <div className="works-box md:max-w-6xl mx-auto md:mt-10 md:mb-16 mt-10 lg:px-0 px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 lg:gap-8 md:gap-4 gap-y-8 text-center"
        >
          <motion.div
            variants={item}
            className="works-col flex flex-col items-start justify-between space-y-4 gap-y-4 bg-[#0f1021] px-6 pb-6  rounded-xl hover:scale-105 duration-200 relative radial-bg shadow-xl"
          >
            <div className="text-start space-y-6">
              <img
                className="mr-auto lg:w-20 md:w-16 w-12"
                src={stepsImg1}
                alt=""
              />
              <h3 className="lg:text-3xl text-xl text-start font-bold uppercase">
                Choose Your Program
              </h3>
              <ul className="space-y-4 text-start inline-block">
                <li className="flex justify-start items-start space-x-3 lg:text-xl md:text-[12px] uppercase text-md">
                  <span className="text-[var(--primary-color)] text-xl">✔</span>
                  <span className="font-bold text-gray-200">
                    REACH PROFIT TARGET
                  </span>
                </li>
                <li className="flex justify-start items-start space-x-3 lg:text-xl md:text-[12px] uppercase text-md">
                  <span className="text-[var(--primary-color)] text-xl">✔</span>
                  <span className="font-bold text-gray-200">
                    DO NOT VIOLATE MAX & DAILY DRAWDOWN
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-center w-full">
              <img
                className="lg:w-38 w-24 mx-auto"
                src={stepsIcon1}
                alt=""
              />
              <h4 className="text-center my-5 w-full">EVALUATION PHASE</h4>
            </div>
            <img
              className="howz-down-arrow lg:w-16 w-10 absolute lg:-right-8 md:-right-4 md:bottom-28 md:block hidden md:rotate-[0deg] rotate-[90deg] z-10"
              src={arrowIcon}
              alt=""
            />
          </motion.div>

          <motion.div
            variants={item}
            className="works-col flex flex-col items-start justify-between space-y-4 gap-y-4 bg-[#0f1021] px-6 pb-6 min-h-[320px] rounded-xl hover:scale-105 duration-200 relative radial-bg shadow-xl"
          >
            <div className="text-start space-y-6">
              <img
                className="mr-auto lg:w-20 md:w-16 w-12"
                src={stepsImg2}
                alt=""
              />
              <h3 className="lg:text-xl md:text-[12px] text-md text-start font-bold uppercase">
                Earn as a Funded Trader
              </h3>
              <ul className="space-y-4 text-start inline-block">
                <li className="flex justify-start items-center space-x-3">
                  <span className="text-[var(--primary-color)] text-xl">✔</span>
                  <span className="font-bold text-gray-200  lg:text-5xl md:text-3xl text-2xl">$109.200</span>
                </li>
              </ul>
            </div>
            <div className="text-center w-full">
              <img
                className="lg:w-38 w-24 mx-auto"
                src={stepsIcon2}
                alt=""
              />
              <h4 className="text-center my-5 w-full">FUNDED PHASE</h4>
            </div>
            <img
              className="howz-down-arrow lg:w-16 w-10 absolute lg:-right-8 md:-right-4 md:bottom-28 md:block hidden md:rotate-[0deg] rotate-[90deg] z-10"
              src={arrowIcon}
              alt=""
            />
          </motion.div>

          <motion.div
            variants={item}
            className="works-col flex flex-col items-start justify-between space-y-4 gap-y-4 bg-[#0f1021] px-6 pb-6 min-h-[320px] rounded-xl hover:scale-105 duration-200 relative radial-bg shadow-xl"
          >
            <div className="text-start space-y-6">
              <img
                className="mr-auto lg:w-20 md:w-16 w-12"
                src={stepsImg3}
                alt=""
              />
              <h3 className="lg:text-xl md:text-[12px] text-md text-start font-bold uppercase">
                Receive Your Payout
              </h3>
              <ul className="space-y-4 text-start inline-block">
                <li className="flex justify-start items-start space-x-3 lg:text-xl md:text-[12px] uppercase text-md">
                  <span className="text-[var(--primary-color)] text-xl">✔</span>
                  <span className="font-bold text-gray-200">
                    Withdraw as soon as you get funded
                  </span>
                </li>
                <li className="flex justify-start items-start space-x-3 lg:text-xl md:text-[12px] uppercase text-md">
                  <span className="text-[var(--primary-color)] text-xl">✔</span>
                  <span className="font-bold text-gray-200">
                    First payout is instant
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-center w-full">
              <img
                className="lg:w-38 w-20 mx-auto"
                src={stepsIcon3}
                alt=""
              />
              <h4 className="text-center my-5 w-full">PAYOUT</h4>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
    </div>
  );
}

export default HowWorks;
