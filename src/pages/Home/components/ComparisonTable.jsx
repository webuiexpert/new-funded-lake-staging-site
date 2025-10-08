import React from "react";
import topSep from "/assets/top-saprator.jpg";
import botSep from "/assets/bot-saprator.jpg";
import dollarCubeIcon from "/assets/bicon-icons-bg-left.png"
import coineCubeIcon from "/assets/bicon-icons-bg-right.png"
import { motion } from "framer-motion";

function ComparisonTable() {
  const rows = [
    {
      feature: "Payouts Denied",
      otherFirms: "YES",
      fundedLake: "0 PAYOUT DENIALS",
    },
    {
      feature: "Minimum Trading Days",
      otherFirms: "3-4",
      fundedLake: "NO MINIMUM TRADING DAYS",
    },
    {
      feature: "Payout Speed",
      otherFirms: "2-3 BUSINESS DAYS",
      fundedLake: "LESS THAN 24 HRS",
    },
    {
      feature: "Funded Account Delivery",
      otherFirms: "3-4 BUSINESS DAYS",
      fundedLake: "LESS THAN 24 HRS",
    },
    {
      feature: "Payout Process",
      otherFirms: "BIWEEKLY FIRST PAYOUT",
      fundedLake: "INSTANT FIRST PAYOUT",
    },
  ];

  return (
    <div className="flex items-center justify-center relative py-24">
      <div class="navy-left-side-gradient d-block"></div>
      <div class="navy-right-side-gradient d-block"></div>
       <img className="scale-plus-animation absolute left-10 w-56 rotate-28" src={dollarCubeIcon} alt="" />
       <img className="scale-plus-animation absolute right-20 w-56 -rotate-52 z-[1]" src={coineCubeIcon} alt="" />
       <div class="navy-left-side-gradient d-block"></div>
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
      <div className="w-full max-w-6xl mt-16">
        <motion.h2 className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.4 }}
        >
          <span className="text-white">
            Why Traders are switching to
          </span>{" "}
          fundedlake
        </motion.h2>
        <div className="comparision-box w-full mt-10 bg-yellow-300 mb-16 rounded-3xl shadow-2xl overflow-hidden border border-[#250b3a]">
          {/* Header */}
          <div className="grid grid-cols-3">
            <div className="p-6"></div>
            <div className="p-6 text-center border-x border-[#5184a0]">
              <h5 className="text-xl font-bold text-white uppercase tracking-wider">
                Other Firms
              </h5>
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-bold text-white uppercase tracking-wider">
                FundedLake
              </h5>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 ${
                index % 2 === 0
                  ? "bg-gradient-to-r from-blue-900/30 to-blue-800/30"
                  : "bg-[#0d547c]"
              } border-t border-[#5184a0]`}
            >
              <div className="p-6 flex items-center">
                <span className="text-white font-semibold text-sm md:text-base">
                  {row.feature}
                </span>
              </div>
              <div className="p-6 flex items-center justify-center border-x border-[#5184a0]">
                <span className="text-gray-300 text-center text-sm md:text-base font-medium">
                  {row.otherFirms}
                </span>
              </div>
              <div className="p-6 flex items-center justify-center ">
                <span className="text-cyan-300 text-center text-sm md:text-base font-bold uppercase tracking-wide">
                  {row.fundedLake}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComparisonTable;
