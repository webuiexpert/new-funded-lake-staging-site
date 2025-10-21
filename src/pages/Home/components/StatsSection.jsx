import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dollarCubeIcon from "/assets/bicon-icons-bg-left.png";
import coineCubeIcon from "/assets/bicon-icons-bg-right.png";

const stats = [
  {
    label: "Active Traders",
    value: 500,
    suffix: "+",
  },
  {
    label: "Countries",
    value: 25,
    suffix: "+",
  },
  {
    label: "In payouts processed",
    value: 80,
    suffix: "K+",
  },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-dark relative py-16 px-4 md:px-8 overflow-hidden">
      <img
        className="scale-plus-animation absolute left-10 w-56 rotate-28"
        src={dollarCubeIcon}
        alt=""
      />
      <img
        className="scale-plus-animation absolute -bottom-10 right-20 w-56 -rotate-52"
        src={coineCubeIcon}
        alt=""
      />
      <motion.div
        variants={container}
        ref={ref}
        className="md:max-w-6xl max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white relative z-[2]"
      >
        {stats.map((stat, index) => (
          <motion.div
            variants={item}
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 * index }}
            className="bg-eff-col border border-[#2f373d rounded-2xl hover:bg-[linear-gradient(120deg,#944FEB_0%,#DB5D41_37%,#944FEB_100%)] duration-700 ease-linear flex flex-col items-center justify-center relative lg:w-full lg:h-[180px] md:w-full md:h-[140px] w-[240px] h-[140px] group p-[1px] gap-6 bg-[var(--accent-color)] z-10 mx-auto"
          >
            <span class="dot_1 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[7px] z-[1]  top-5 left-5 rounded-full"></span>
                <span class="dot_2 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[7px] z-[1]  bottom-5 left-5 rounded-full"></span>
                <span class="dot_3 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[7px] z-[1]  top-5 right-5 rounded-full"></span>
                <span class="dot_4 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[7px] z-[1]  bottom-5 right-5 rounded-full"></span>
            <div className="font-bold text-white bg-[#070710] w-full h-full flex items-center justify-center flex-col md:gap-4 gap-2 rounded-2xl">
              <div className="flex lg:text-4xl md:text-3xl text-3xl relative items-center rounded-2xl justify-center w-[100%]">
                {inView && (
                <CountUp
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                  enableScrollSpy
                />
              )}
              </div>
               <p className="lg:text-2xl text-[18px] font-semibold">{stat.label}</p>
            </div>
           
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
