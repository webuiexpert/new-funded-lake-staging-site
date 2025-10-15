import { DollarSign, Zap, Hourglass, Tag } from "lucide-react"; // using lucide icons
import featureImg1 from "/assets/why-choose-us-1.png";
import featureImg2 from "/assets/why-choose-us-2.png";
import featureImg3 from "/assets/why-choose-us-3.png";
import featureImg4 from "/assets/why-choose-us-4.png";
import dollarCubeIcon from "/assets/bicon-icons-bg-left.png";
import coineCubeIcon from "/assets/bicon-icons-bg-right.png";
import botSep from "/assets/bot-saprator.jpg";
import { motion } from "framer-motion"

function ChooseUs() {
  const featuresData = [
    {
      id: 1,
      icon: <DollarSign size={40} className="text-cyan-400" />,
      fimg: featureImg1,
      title: "INSTANT FUNDING",
      desc: "Get access to capital and start trading immediately with no waiting, no delays.",
    },
    {
      id: 2,
      icon: <Zap size={40} className="text-cyan-400" />,
      fimg: featureImg2,
      title: "LIGHTNING-FAST PAYOUTS",
      desc: "Get access to capital and start trading immediately with no waiting, no delays.",
    },
    {
      id: 3,
      icon: <Hourglass size={40} className="text-cyan-400" />,
      fimg: featureImg3,
      title: "NO TIME LIMITS",
      desc: "Get access to capital and start trading immediately with no waiting, no delays.",
    },
    {
      id: 4,
      icon: <Tag size={40} className="text-cyan-400" />,
      fimg: featureImg4,
      title: "AFFORDABLE PRICING",
      desc: "Get access to capital and start trading immediately with no waiting, no delays.",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item1 = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.10, ease: "easeOut" } },
  };

  return (
    <section id="why-choose-us" className="text-white md:pt-10 pt-2 md:pb-10 pb-6 px-6 relative ">
      <img
        className="scale-plus-animation absolute left-10 w-56 md:block hidden"
        src={dollarCubeIcon}
        alt=""
      />
      <img
        className="scale-plus-animation absolute bottom-20 right-10 w-48"
        src={coineCubeIcon}
        alt=""
      />
      <img className="saperator absolute top-0 left-0 w-full"
        src={botSep}
        alt=""
      />
      <motion.h2 className="text-center mt-12"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.4 }} // 
      >Why Choose Us</motion.h2>
      <div className="choose-box max-w-6xl mx-auto border-2 border-[#21234b] rounded-2xl p-10 md:mt-12 mt-8">
        <motion.div
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 md:gap-4 gap-12 text-center">
          {featuresData.map((item) => (
            <motion.div
              variants={item1}
              key={item.id}
              className="features-col flex flex-col items-center justify-start space-y-4 pb-5"
            >
              <div>
                <img
                  className="border-[var(--color-primary)] border-2 p-4 lg:w-auto md:w-16 w-20 rounded-full mx-auto"
                  src={item.fimg}
                  alt="feature-img"
                />
              </div>
              <h3 className="font-bold lg:text-lg md:text-lg tracking-wide lg:w-37 leading-6">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm max-w-[220px]">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ChooseUs;
