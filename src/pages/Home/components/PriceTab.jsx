import React from "react";
import PriceTable from "./PriceTable";
import {motion} from "framer-motion"

function PriceTab() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 pt-10 md:pt-0 lg:px-0 lg:py-6">
      <div class="navy-side-gradient d-block"></div>
      <div className="flex flex-wrap w-full lg:mb-20 mb-10 flex-col items-center text-center">
        <motion.h2 className="md:leading-[1.1em] font-bold title-font mb-2 text-white"
        initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.4 }} // 
        >
          <span className="text-white">READY TO GET</span> FUNDED? <br/>
          <span className="text-white">THEN LET'S GET</span>  STARTED!
        </motion.h2>
        <p className="text-white text-xl mt-6 md:max-w-4xl w-full">Our evaluation is based on best practices and International Standards, customized and refined to cater to every trading style.</p>
      </div>
      <PriceTable />
    </div>
  );
}

export default PriceTab;
