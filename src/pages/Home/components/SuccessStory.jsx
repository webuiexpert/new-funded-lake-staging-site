import topSep from "/assets/top-saprator.jpg";
import botSep from "/assets/bot-saprator.jpg";
import certifiacteImg from "/assets/certificate-of-withdrawl18.jpg";
import dollarCubeIcon from "/assets/bicon-icons-bg-left.png"
import coineCubeIcon from "/assets/bicon-icons-bg-right.png"
import { motion } from "framer-motion";


function SuccessStory() {
  return (
    <div className="md:py-16 lg:px-0 px-4 py-10 relative">
      <img className="saperator absolute top-0 left-0 w-full" src={botSep} alt="" />
      <img className="saperator absolute bottom-0 left-0 w-full" src={botSep} alt="" />
      <img className="scale-plus-animation absolute z-0 top-32 left-10 w-56 rotate-28 md:block hidden" src={dollarCubeIcon} alt="" />
      <img className="scale-plus-animation absolute z-0 right-20 bottom-56 w-56" src={coineCubeIcon} alt="" />
      <motion.h2 className="md:leading-[1.1em] font-bold title-font  z-[1] relative mb-2 lg:mt-10 md:mt-6 mt-2 text-center text-white"
       initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.4 }}
      >
        <span className="text-white">trader's, </span>success story
      </motion.h2>
      <div className="success-story lg:mt-16 md:mt-12 mt-6 lg:mb-24 md:mb-16 mb-10 rounded-2xl z-[1] relative md:text-left text-center md:max-w-5xl mx-auto md:px-8 md:py-8 px-3 py-5 lg:p-12 shadow-lg">
         <h5 className="md:text-2xl text-xl lg:text-3xl font-bold text-white md:mb-4 w-full text-center">
              Life Changing Payouts Start Here
            </h5>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center md:mt-8 mt-4">
          <div className="order-2 md:order-1">
            <p className="text-gray-300 mb-4 md:text-lg text-sm">
              <span className="font-semibold text-[var(--primary-color)]">Arjun Mehta </span>
              from India turned a $50,000 FundedLake 2-Step account purchased
              for just $225 into a life changing payout in just 8 days. What
              started as a simple challenge quickly transformed into a powerful
              reality: financial freedom, flexibility, and proof that with
              discipline and strategy, anything is possible.
            </p>
            <p className="text-gray-300 md:text-lg text-sm">
              At FundedLake, stories like this are not rare, they are becoming
              the norm. Every payout is not just a withdrawal, it is a dream
              funded, a goal achieved, and a trader stepping into a whole new
              chapter of their life.
            </p>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <div className="w-full">
              <img
                src={certifiacteImg}
                alt="Certificate of Withdrawal"
                className="rounded-lg shadow-md lg:w-full w-[70%] lg:mx-0 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessStory;
