import { DollarSign, Zap, Hourglass, Tag } from "lucide-react"; // using lucide icons
import featureImg1 from "/assets/why-choose-us-1.png";
import featureImg2 from "/assets/why-choose-us-2.png";
import featureImg3 from "/assets/why-choose-us-3.png";
import featureImg4 from "/assets/why-choose-us-4.png";
import {motion} from "framer-motion"

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

  return (
    <section className="text-white pt-2 pb-10 px-6 relative">
      <motion.h2 className="text-center"
      initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.4 }} // 
      >Why Choose Us</motion.h2>
      <div className="choose-box max-w-6xl mx-auto border-2 border-[#21234b] rounded-2xl p-10 md:mt-12 mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 md:gap-8 gap-12 text-center">
          {featuresData.map((item) => (
            <div
              key={item.id}
              className="features-col flex flex-col items-center justify-start space-y-4 pb-5"
            >
              <div>
                <img
                  className="border-[var(--color-primary)] border-2 p-4 md:w-auto w-20 rounded-full mx-auto"
                  src={item.fimg}
                  alt="feature-img"
                />
              </div>
              <h3 className="font-bold text-lg tracking-wide lg:w-37 leading-6">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm max-w-[220px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
