import walletIcon from "/assets/shape_wallet.png";
import lockerIcon from "/assets/shape_locker.png";
import dollarCubeIcon from "/assets/bicon-icons-bg-left.png";
import coineCubeIcon from "/assets/bicon-icons-bg-right.png";
import topSep from "/assets/top-saprator.jpg";
import botSep from "/assets/bot-saprator.jpg";
import { motion } from "framer-motion";

function WhoWeSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="overflow-hidden relative lg:pt-42 lg:pb-[40px] md:pt-32 md:pb-10 pt-24 pb-12 md:px-0 px-4 ">
        <div className="tg-bg-gradient d-block navy-bg-gradient"></div>
        <div className="navy-left-side-gradient d-block"></div>
        <div className="upDownAnim tg-bg-gradient d-block hero-gradient-ball alltuchtopdown bg-[radial-gradient(114.99% 94.16% at 72.92% 82.18%,#111111 47.39%,#091534 68.23%,#00c4f4 86.63%)]"></div>
        <div className="ripple-shape2 z-30">
          <span className="ripple-11"></span>
          <span className="ripple-12"></span>
          <span className="ripple-13"></span>
          <span className="ripple-14"></span>
          <span className="ripple-15"></span>
        </div>
        <img
          className="upDownAnim absolute lg:w-24 w-20 md:bottom-16 bottom-10 md:left-10 left-5 opacity-60"
          src={walletIcon}
          alt=""
        />
        <img
          className="upDownAnim absolute lg:w-24 w-20 md:bottom-16 bottom-16  md:right-10 right-5 opacity-60"
          src={lockerIcon}
          alt=""
        />
        <div className="flex flex-wrap w-full flex-col items-center relative z-10 text-center">
          <motion.h2
            className="md:leading-[1.1em] font-bold title-font mb-2 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.4 }} //
          >
            <span className="text-white">WHO</span> WE ARE <br />
          </motion.h2>
          <p className="text-white md:text-xl text-base mt-6 md:max-w-[800px] w-full">
            At FundedLake, we believe in empowering traders by providing the
            capital they need to succeed.
          </p>
          <p className="text-white md:text-xl text-base mt-6 md:max-w-[800px] w-full">
            FundedLake is not just a funding partner — we’re seasoned traders
            who’ve built successful prop firms ourselves.
          </p>
          <p className="text-white md:text-xl text-base mt-6 md:max-w-[800px] w-full">
            Whether you’re an experienced trader or just starting out, our
            mission is to give you the financial backing and flexibility to
            trade with confidence
          </p>
          <p className="text-white md:text-xl text-base mt-6 md:max-w-[800px] w-full">
            Our team knows the ins and outs of trading, and we’re committed to
            empowering traders like you to reach your full potential.
          </p>
        </div>
      </div>
      <div className="relative">
        <img className="saperator w-full" src={topSep} alt="" />
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
        <div className="lg:py-24 md:py-16 py-8 md:px-0 px-4">
          <motion.h2
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <span className="text-white">FUNDEDLAKE</span> MISSION
          </motion.h2>
          <div className="mission-col max-w-6xl mx-auto px-10 lg:py-24 md:py-16 py-10 mt-10 text-center rounded-2xl">
            <p className="text-white md:text-xl text-base md:max-w-[80%] mx-auto w-full">
              We’re here to revolutionize prop trading by offering traders a
              fair, transparent, and profitable opportunity to scale their
              skills.
            </p>
            <p className="text-white md:text-xl text-base mt-6 md:max-w-[80%] mx-auto w-full">
              Unlike traditional funding firms, we prioritize fast payouts, no
              restrictive rules, and instant funding so you can focus on what
              truly matters—growing your account.
            </p>
          </div>
        </div>
        <img className="saperator w-full" src={botSep} alt="" />
      </div>
    </div>
  );
}

export default WhoWeSection;
