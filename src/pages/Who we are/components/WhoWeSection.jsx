import walletIcon from "/assets/shape_wallet.png";
import lockerIcon from "/assets/shape_locker.png";
import { motion } from "framer-motion";
function WhoWeSection() {
  return (
    <div className="h-screen relative ">
      <div className="tg-bg-gradient d-block navy-bg-gradient"></div>
      <div className="overflow-x-hidden">
        <div className="navy-left-side-gradient d-block"></div>
        <div className="upDownAnim tg-bg-gradient d-block hero-gradient-ball alltuchtopdown bg-[radial-gradient(114.99% 94.16% at 72.92% 82.18%,#111111 47.39%,#091534 68.23%,#00c4f4 86.63%)]"></div>

        <img
          className="upDownAnim absolute lg:w-36 w-20 md:bottom-36 bottom-10 md:left-10 left-5 opacity-60"
          src={walletIcon}
          alt=""
        />
        <img
          className="upDownAnim absolute lg:w-36 w-20 md:bottom-36 bottom-16  md:right-10 right-5 opacity-60"
          src={lockerIcon}
          alt=""
        />
      </div>
          <div className="ripple-shape2">
          <span className="ripple-11"></span>
          <span className="ripple-12"></span>
          <span className="ripple-13"></span>
          <span className="ripple-14"></span>
          <span className="ripple-15"></span>
        </div>
      WhoWeSection
    </div>
  );
}

export default WhoWeSection;
