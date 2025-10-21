import dollarCubeIcon from "/assets/bicon-icons-bg-left.png";
import coineCubeIcon from "/assets/bicon-icons-bg-right.png";
import PriceTable from "./PriceTable";
import { motion } from "framer-motion";

function PriceTab() {
  return (
    <div className="relative">
      <div className="w-full max-w-6xl mx-auto px-4 pt-10 md:pt-0 lg:px-0 lg:py-6 ">
        <div class="navy-left-side-gradient d-block"></div>
        <div class="navy-right-side-gradient d-block"></div>
        <img
          className="scale-plus-animation absolute left-10 w-56 rotate-28 md:block hidden"
          src={dollarCubeIcon}
          alt=""
        />
        <img
          className="scale-plus-animation md:block hidden absolute right-20 bottom-72 w-56 -rotate-52"
          src={coineCubeIcon}
          alt=""
        />
        <div class="navy-side-gradient d-block"></div>
        <div className="flex flex-wrap w-full lg:mb-12 mb-10 flex-col items-center text-center">
          <motion.h2
            className="md:leading-[1.1em] font-bold title-font mb-2 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.4 }} //
          >
            <span className="text-white">READY TO GET</span> FUNDED? <br />
            <span className="text-white">THEN LET'S GET</span> STARTED!
          </motion.h2>
          <p className="text-white md:text-xl text-base mt-6 md:max-w-4xl w-full">
            Our evaluation is based on best practices and International
            Standards, customized and refined to cater to every trading style.
          </p>
        </div>
        <PriceTable />
      </div>
    </div>
  );
}

export default PriceTab;
