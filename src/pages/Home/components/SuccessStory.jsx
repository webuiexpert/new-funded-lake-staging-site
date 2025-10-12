import topSep from "/assets/top-saprator.jpg";
import botSep from "/assets/bot-saprator.jpg";
import certifiacteImg from "/assets/certificate-of-withdrawl18.jpg";
import dollarCubeIcon from "/assets/bicon-icons-bg-left.png"
import coineCubeIcon from "/assets/bicon-icons-bg-right.png"
import { motion } from "framer-motion";


function SuccessStory() {
  return (
    <div className="md:py-16 md:px-0 px-6 py-10 relative">
      <img className="saperator absolute top-0 left-0 w-full" src={botSep} alt="" />
      <img className="saperator absolute bottom-0 left-0 w-full" src={botSep} alt="" />
      <img className="scale-plus-animation absolute z-0 top-24 left-10 w-56 rotate-28" src={dollarCubeIcon} alt="" />
      <img className="scale-plus-animation absolute z-0 right-20 bottom-56 w-56" src={coineCubeIcon} alt="" />
      <motion.h2 className="md:leading-[1.1em] font-bold title-font  z-[1] relative mb-2 mt-10 text-center text-white"
       initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.4 }}
      >
        <span className="text-white">trader's, </span>success story
      </motion.h2>
      <div className="success-story mt-16 mb-24 rounded-2xl  z-[1] relative  md:text-left text-center md:max-w-5xl mx-auto md:p-8 p-3 lg:p-12 shadow-lg">
         <h5 className="text-2xl lg:text-3xl font-bold text-white mb-4 w-full text-center">
              Life Changing Payouts Start Here
            </h5>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
          <div>
            <p className="text-gray-300 mb-4 text-lg">
              <span className="font-semibold text-[var(--color-primary)]">Arjun Mehta </span>
              from India turned a $50,000 FundedLake 2-Step account purchased
              for just $225 into a life changing payout in just 8 days. What
              started as a simple challenge quickly transformed into a powerful
              reality: financial freedom, flexibility, and proof that with
              discipline and strategy, anything is possible.
            </p>
            <p className="text-gray-300">
              At FundedLake, stories like this are not rare, they are becoming
              the norm. Every payout is not just a withdrawal, it is a dream
              funded, a goal achieved, and a trader stepping into a whole new
              chapter of their life.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center">
            {/* Replace with real image */}
            <div className="w-full">
              <img
                src={certifiacteImg}
                alt="Certificate of Withdrawal"
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessStory;
