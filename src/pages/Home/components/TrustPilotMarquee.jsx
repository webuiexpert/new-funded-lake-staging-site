import trustpilotimg1 from "/assets/t-1.jpg";
import trustpilotimg2 from "/assets/t-2.jpg";
import trustpilotimg3 from "/assets/t-3.jpg";
import trustpilotimg4 from "/assets/t-4.jpg";
import trustpilotimg5 from "/assets/t-5.jpg";
import circleShape from "/assets/decoration_shape_circle.svg";
// import trustpilotimg6  from "/assets/trust-pilot-img6.png";
// import trustpilotimg7  from "/assets/trust-pilot-img7.png";
// import trustpilotimg8  from "/assets/trust-pilot-img8.png";
// import trustpilotimg9  from "/assets/trust-pilot-img9.png";
// import trustpilotimg10  from "/assets/trust-pilot-img10.png";
// import trustpilotimg11  from "/assets/trust-pilot-img11.png";
// import trustpilotimg12  from "/assets/trust-pilot-img12.png";
// import trustpilotimg13  from "/assets/trust-pilot-img13.png";
// import trustpilotimg14  from "/assets/trust-pilot-img14.png";
import topSep from "/assets/top-saprator.jpg";
import botSep from "/assets/bot-saprator.jpg";
import { motion } from "framer-motion";


function TrustPilotMarquee() {
  const trustImages = [
    trustpilotimg1,
    trustpilotimg2,
    trustpilotimg3,
    trustpilotimg4,
    trustpilotimg5,
  ];
  // trustpilotimg14, trustpilotimg6, trustpilotimg7, trustpilotimg8, trustpilotimg9, trustpilotimg10, trustpilotimg11, trustpilotimg12, trustpilotimg13

  // bg-[radial-gradient(circle,rgba(2,33,80,1)_6%,rgba(0,0,0,1)_47%)]

  return (
    <div className="overflow-hidden md:pb-36 relative whitespace-nowrap py-10">
      <img
        className="saperator absolute bottom-0 left-0 w-full z-10"
        src={topSep}
        alt=""
      />
      <img
        className="saperator absolute top-0 left-0 w-full z-10"
        src={botSep}
        alt=""
      />

      <div className="decoration_item shape_circle_1 scale-plus-animation">
        <img className="shape_circle" src={circleShape} alt="" />
      </div>

      <div className="flex flex-wrap w-full md:mb-16 mb-8 flex-col items-center text-center">
        <motion.h2 className="sm:text-[50px] text-2xl font-bold title-font mt-20 mb-2 text-white"
        initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.4 }} 
        >
          <span className="text-white">WATCH SOME OF OUR</span>
          <br />
          <span className="text-gredient">TRUST PILOT</span> REVIEWS
        </motion.h2>
      </div>

      <div className="trustPilot-container relative overflow-hidden">
        <div className="trustPilot-marquee flex">
          {[...trustImages, ...trustImages].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`slide-${idx}`}
              className="border-2 border-[#2f373d] p-5 w-[620px] object-contain mx-4 inline-block rounded-2xl shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustPilotMarquee;
