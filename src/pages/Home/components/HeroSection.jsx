import PrimaryButton from "../../../Components/PrimaryButton";
import walletIcon from "/assets/shape_wallet.png";
import lockerIcon from "/assets/shape_locker.png";
import { motion } from "framer-motion";
import ScrollDownIndicator from "../../../Components/ScrollDownIndicator";

function HeroSection() {
  return (
    <div className="hero-section lg:py-24  md:py-10 py-16 lg:h-screen md:px-0 px-4 pt-10 md:pt-0 relative overflow-hidden">
      <div className="tg-bg-gradient d-block navy-bg-gradient"></div>
      <div className="navy-left-side-gradient d-block"></div>
      <div className="upDownAnim tg-bg-gradient d-block hero-gradient-ball alltuchtopdown bg-[radial-gradient(114.99% 94.16% at 72.92% 82.18%,#111111 47.39%,#091534 68.23%,#00c4f4 86.63%)]"></div>
      <div className="ripple-shape2">
        <span className="ripple-11"></span>
        <span className="ripple-12"></span>
        <span className="ripple-13"></span>
        <span className="ripple-14"></span>
        <span className="ripple-15"></span>
      </div>
    
      <img className="upDownAnim absolute lg:w-36 w-20 md:bottom-36 bottom-10 md:left-10 left-5 opacity-60"
        src={walletIcon}
        alt=""
      />
      <img className="upDownAnim absolute lg:w-36 w-20 md:bottom-36 bottom-16  md:right-10 right-5 opacity-60"
        src={lockerIcon}
        alt=""
      />
      <div className="text-center relative z-10 md:mt-16 mt-16">
        <motion.h1
          className="text-white font-bold text-xl  md:text-5xl lg:text-[80px] leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.4 }} //
        >
          WHERE <span className="text-[var(--primary-color)]">TRADERS</span>
          <br />
          <span className="text-[var(--primary-color)]">EMPOWER </span>TRADERS
        </motion.h1>
        <p className="text-white text-sm  md:text-xl lg:text-2xl max-w-4xl mt-6 font-medium mx-auto">
          “Lightning-fast payouts, instant funding, no hidden rules or
          consistency requirements - take on challenges with up to $400,000 in
          capital!”
        </p>
      </div>
      <div className="my-10 text-center flex flex-col lg:gap-8 gap-6 relative z-20">
        <PrimaryButton
          text="Join our discord community"
          link="https://discord.gg/vDSnjmxndy"
        />
       <div className="flex flex-col gap-6 items-center w-full justify-center">
         <PrimaryButton text="Signup now" link="https://fundedlakedashboard.propaccount.com/en/sign-up" />
        <div className="md:hidden block">
          <PrimaryButton text="Get Funded" link="https://fundedlakedashboard.propaccount.com/en/challenges?planid=163" />
        </div>
       </div>
      </div>
      <div className="relative z-20">
        <ScrollDownIndicator />
      </div>
    </div>
  );
}

export default HeroSection;
