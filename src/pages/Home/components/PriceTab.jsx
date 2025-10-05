import React from "react";
import PriceTable from "./PriceTable";

function PriceTab() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-4 lg:px-0 lg:py-6">
      <div className="flex flex-wrap w-full lg:mb-20 mb-10 flex-col items-center text-center">
        <h2 className="md:leading-[1.1em] font-bold title-font mb-2 text-white">
          <span className="text-white">READY TO GET</span> FUNDED? <br/>
          <span className="text-white">THEN LET'S GET</span>  STARTED!
        </h2>
        <p className="text-white text-xl mt-6 md:max-w-4xl w-full">Our evaluation is based on best practices and International Standards, customized and refined to cater to every trading style.</p>
      </div>
      <PriceTable />
    </div>
  );
}

export default PriceTab;
