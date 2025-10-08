import PrimaryButton from "../../../Components/PrimaryButton";
import botSep from "/assets/bot-saprator.jpg";
import walletIcon from "/assets/shape_wallet.png";
import lockerIcon from "/assets/shape_locker.png";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className="hero-section md:py-24 relative overflow-hidden">
      <div class="tg-bg-gradient d-block navy-bg-gradient"></div>
      <div class="navy-left-side-gradient d-block"></div>
      <div class="upDownAnim tg-bg-gradient d-block hero-gradient-ball alltuchtopdown"></div>
      <div class="ripple-shape2">
        <span class="ripple-11"></span>
        <span class="ripple-12"></span>
        <span class="ripple-13"></span>
        <span class="ripple-14"></span>
        <span class="ripple-15"></span>
      </div>
      <img
        className="saperator absolute bottom-0 left-0 w-full"
        src={botSep}
        alt=""
      />
      <img
        className="upDownAnim absolute md:w-24 w-16 bottom-36 left-10 opacity-30"
        src={walletIcon}
        alt=""
      />
      <img
        className="upDownAnim absolute md:w-24 w-16 bottom-36 right-10 opacity-30"
        src={lockerIcon}
        alt=""
      />
      <div className="text-center relative z-10">
        <motion.h1
          className="text-white font-bold text-2xl sm:text-4xl md:text-6xl lg:text-[80px] leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.4 }} //
        >
          WHERE <span className="text-[var(--color-primary)]">TRADERS</span>
          <br />
          <span className="text-[var(--color-primary)]">EMPOWER </span>TRADERS
        </motion.h1>
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mt-6 font-medium mx-auto">
          “Lightning-fast payouts, instant funding, no hidden rules or
          consistency requirements - take on challenges with up to $400,000 in
          capital!”
        </p>
      </div>
      <div className="my-10 text-center flex flex-col gap-10">
        <PrimaryButton
          text="Join our discord community"
          link="https://yourwebsite.com/about"
        />
        <PrimaryButton text="Signup now" link="https://yourwebsite.com/about" />
      </div>
    </div>
  );
}

export default HeroSection;
