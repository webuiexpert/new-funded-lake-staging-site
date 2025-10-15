import React from "react";
import { motion } from "framer-motion";
import topSep from "/assets/top-saprator.jpg";
import botSep from "/assets/bot-saprator.jpg";
import dollarCubeIcon from "/assets/bicon-icons-bg-left.png";
import coineCubeIcon from "/assets/bicon-icons-bg-right.png";

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
    <div className="relative">
      {/* Background Icons */}
      <img
        className="absolute left-10 md:top-56 w-56 opacity-20"
        src={dollarCubeIcon}
        alt=""
      />
      <img
        className="absolute right-20 bottom-36 w-56 opacity-20"
        src={coineCubeIcon}
        alt=""
      />

      {/* Top and Bottom Separators */}
      <img className="w-full" src={topSep} alt="" />
     
      <div className=" md:max-w-6xl md:px-0 px-4 mx-auto my-10 flex flex-col items-center">
        {/* Heading */}
      <motion.h2
        className="text-center text-white text-3xl font-bold mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        Why Traders are switching to
        <span className="text-white"> FundedLake</span>
      </motion.h2>

      {/* Table Wrapper (scrollable on small screens) */}
      <div className="w-full max-w-4xl overflow-x-auto shadow-2xl lg:mb-10 md:rounded-3xl rounded-xl border border-[#250b3a] bg-[#001F3F]/60 backdrop-blur-md">
        <table className="w-full border-collapse text-white text-center min-w-[600px]">
          <thead>
            <tr className="bg-gradient-to-r from-[#0b2447] to-[#19376d]">
              <th className="py-4 px-3 text-left"></th>
              <th className="py-4 px-3 border-x border-[#5184a0] uppercase">
                Other Firms
              </th>
              <th className="py-4 px-3 uppercase">FundedLake</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className={`border-t border-[#5184a0] ${
                  index % 2 === 0 ? "bg-[#032070]/50" : "bg-[#0d547c]/40"
                }`}
              >
                <td className="md:p-6 p-3 text-left font-semibold">
                  {row.feature}
                </td>
                <td className="md:p-6 p-3 border-x border-[#5184a0] text-gray-300">
                  {row.otherFirms}
                </td>
                <td className="md:p-6 p-3 text-cyan-300 font-bold uppercase">
                  {row.fundedLake}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
       <img className="w-full" src={botSep} alt="" />
    </div>
  );
}

export default ComparisonTable;
