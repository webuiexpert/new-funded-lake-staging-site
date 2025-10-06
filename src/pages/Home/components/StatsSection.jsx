import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dollarCubeIcon from "/assets/bicon-icons-bg-left.png"
import coineCubeIcon from "/assets/bicon-icons-bg-right.png"

const stats = [
  {
    label: "Active Traders",
    value: 300,
    suffix: "+",
  },
  {
    label: "Countries",
    value: 25,
    suffix: "+",
  },
  {
    label: "Payouts Processed",
    value: 40,
    suffix: "K+",
  },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="bg-dark relative py-16 px-4 md:px-8 overflow-hidden">
      <img className="scale-plus-animation absolute left-10 w-56 rotate-28" src={dollarCubeIcon} alt="" />
      <img className="scale-plus-animation absolute right-20 w-56 -rotate-52 z-[1]" src={coineCubeIcon} alt="" />
      <div
        ref={ref}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white relative z-[2]"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 * index }}
            className="stats-col flex flex-col items-center justify-center relative border border-[#2f373d] px-4 py-10 gap-6 rounded-2xl bg-[var(--accent-color)]">
            <div className="text-5xl font-bold text-white">
              {inView && (
                <CountUp
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                  enableScrollSpy
                />
              )}
            </div>
            <p className="text-3xl mt-4 font-semibold">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
