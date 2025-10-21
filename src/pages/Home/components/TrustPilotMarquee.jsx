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
import dollarCubeIcon from "/assets/bicon-icons-bg-left.png";
import coineCubeIcon from "/assets/bicon-icons-bg-right.png";
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
    <div className="overflow-hidden relative whitespace-nowrap md:py-24 py-16">
      <img className="absolute top-0 left-10 w-60 rotate-[28deg] opacity-30" src={dollarCubeIcon}
              alt="Dollar Cube"
            />
            <img
              className="absolute top-20 right-10 w-36 -rotate-2 opacity-30"
              src={coineCubeIcon}
              alt="Coin Cube"
            />
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

      {/* <div className="flex flex-wrap w-full md:mb-10 mb-8 flex-col items-center text-center">
        <motion.h2
          className="sm:text-[50px] text-2xl font-bold title-font mb-2 text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <span className="text-white">WATCH SOME OF OUR</span>
          <br />
          <span className="text-gredient">TRUST PILOT</span> REVIEWS
        </motion.h2>
      </div> */}

      <div className="trustPilot-container relative overflow-hidden">
        <div className="trustPilot-marquee flex">
          {[...trustImages, ...trustImages].map((img, idx) => (
            <div
              key={idx}
              className="bg-eff-col border border-[#2f373d] rounded-2xl hover:bg-[linear-gradient(120deg,#944FEB_0%,#DB5D41_37%,#944FEB_100%)] duration-700 ease-linear mx-3 flex-shrink-0 w-[520px] h-[290px] p-[1px] flex items-center justify-center gap-x-5 group  relative"
            >
              <div className="flex relative items-center rounded-2xl justify-center w-[100%] bg-[#070710] p-10 h-[100%]">
                <img
                  key={idx}
                  src={img}
                  alt={`slide-${idx}`}
                  className=" relative z-40 w-full h-full rounded-2xl inline-block shadow-md object-cover"
                />
                <span class="dot_1 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[7px] z-[1] border top-3 left-3 rounded-full"></span>
                <span class="dot_2 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[7px] z-[1] border bottom-3 left-3 rounded-full"></span>
                <span class="dot_3 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[7px] z-[1] border top-3 right-3 rounded-full"></span>
                <span class="dot_4 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[7px] z-[1] border bottom-3 right-3 rounded-full"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustPilotMarquee;
