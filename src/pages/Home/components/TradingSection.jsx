import tradeIcon1 from "/assets/trade-icon1.png";
import tradeIcon2 from "/assets/trade-icon2.png";
import tradeIcon3 from "/assets/trade-icon3.png";
import tradeIcon4 from "/assets/trade-icon4.png";
import tradeIcon5 from "/assets/trade-icon5.png";
import walletIcon from "/assets/shape_wallet.png";
import coineCubeIcon from "/assets/bicon-icons-bg-right.png";
import { motion } from "framer-motion";

const cards = [
  { icon: tradeIcon1, title: "Forex" },
  { icon: tradeIcon2, title: "Metal" },
  { icon: tradeIcon3, title: "Crypto" },
  { icon: tradeIcon4, title: "Indices" },
  { icon: tradeIcon5, title: "Commodities" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // delay between each card animation
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function TradingSection() {
  return (
    <div className="relative pt-10 pb-20">
      <img
        className="upDownAnim absolute md:w-36 w-20 md:bottom-10 md:left-2 left-5 bottom-5 opacity-60"
        src={walletIcon}
        alt=""
      />
      <img
        className="scale-plus-animation absolute right-20 top-56 w-56 z-[0]"
        src={coineCubeIcon}
        alt=""
      />

      {/* Heading animation */}
      <motion.h2
        className="md:leading-[1.1em] font-bold title-font mb-2 text-center text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <span className="text-white">TRADE ANY MARKET,</span>
        <br /> YOUR WAY
      </motion.h2>

      {/* Cards animation */}
      <motion.div
        className="relative z-[0] w-full max-w-6xl mx-auto flex flex-wrap px-4 lg:px-0 mt-10 md:gap-10 gap-4 justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="trade-col hover:scale-105 duration-200 md:w-[31%] w-[80%] flex flex-col items-center gap-4 px-5 md:py-10 py-6 rounded-2xl"
          >
            <img src={card.icon} alt={card.title} width={60} />
            <h5 className="text-2xl font-bold text-white uppercase">
              {card.title}
            </h5>
            <p className="text-center text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              aliquam.
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default TradingSection;