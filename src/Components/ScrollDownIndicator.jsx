import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import zigZagImg from "/assets/shape_circle_zigzag.svg";

export default function ScrollDownIndicator() {
  const arrowVariants = {
    animate: {
      opacity: [0, 1, 0],
      y: [0, 10, 20],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <a href="#why-choose-us" className=" flex flex-col items-center justify-center md:size-24 size-16 mx-auto -mt-4 relative cursor-pointer">
      <img
        className="spin_image opacity-20 absolute w-full"
        src={zigZagImg}
        alt=""
      />
      <motion.div
        className="flex flex-col justify-center space-y-0 gap-0 items-center relative scroll_down"
      >
          <ChevronDown className="scroll-icon text-white md:size-auto size-5 opacity-80 mt-2" />
          <ChevronDown className="scroll-icon text-white md:size-auto size-5 opacity-60 -mt-3" />
          <ChevronDown className="scroll-icon text-white md:size-auto size-5 opacity-40 -mt-2" />
      </motion.div>
    </a>
  );
}
