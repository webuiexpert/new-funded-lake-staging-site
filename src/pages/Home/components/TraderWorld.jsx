import React from "react";
import { NavLink } from "react-router-dom";
import discordIcon from "/assets/discord-icon.png"
import contactIcon from "/assets/contact-icon.png"
import dollarCubeIcon from "/assets/bicon-icons-bg-left.png"
import coineCubeIcon from "/assets/bicon-icons-bg-right.png"

function TraderWorld() {
  return (
    <div class="trade-world-section font-lexend bg-blackish text-white relative">
        <img className="absolute top-20 left-10 w-60 rotate-28" src={dollarCubeIcon} alt="" />
        <img className="absolute bottom-16 right-10 w-56 -rotate-2 z-[1]" src={coineCubeIcon} alt="" />
      <div class="container w-full max-w-6xl mx-auto px-4 py-4 lg:px-0 lg:py-10">
        <div class="flex flex-wrap w-full lg:mb-12 mb-5 flex-col items-center text-center">
          <h2 className="md:leading-[1.1em] font-bold title-font mb-2 text-center text-white">
            <span className="text-white">enabling, </span>traders <br />
            <span className="text-white">around the, </span>world
          </h2>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:max-w-5xl mx-auto">
          <div className="traders-world-col flex items-center justify-start flex-col lg:px-8 lg:py-20 px-4 py-10  rounded-2xl md:rounded-4xl lg:gap-7 gap-6 bg-dark">
            <a
              href="https://discord.gg/vDSnjmxndy"
              className="col1-icon"
            >
              <img className="w-30" src={discordIcon} alt="" />
            </a>
            <h3 className="md:text-3xl text-2xl font-bold text-white">
              JOIN OUR SERVER
            </h3>
            <h5 className="md:text-[24px] text-[20px] font-bold text-center  text-white">
              Discord Community
            </h5>
            <p className="text-center lg:w-[80%] text-[18px]">
              Join the fastest growing Trading Community Discord server to get
              the latest updates, news and more. Join our discord for live
              support and chat with a live customer support agent!
            </p>
          </div>
          <div className="traders-world-col flex items-center justify-start flex-col lg:px-8 lg:py-20 px-4 py-10  rounded-2xl md:rounded-4xl lg:gap-7 gap-6 bg-dark">
            <NavLink
              to="/contact-us"
              className="col2-icon"
            >
              <img className="w-30" src={contactIcon} alt="" />
            </NavLink>
            <h3 className="md:text-3xl text-2xl font-bold text-white">
              GET ASSISTANCE
            </h3>
            <h5 className="md:text-[24px] text-[20px] font-bold text-center  text-white">
              Round the Clock Support
            </h5>
            <p className="text-center lg:w-[80%] text-[18px]">
              Email us and benefit from our 24/7 multi-lingual customer support
              for our traders around the world. To chat with our live agent join
              our discord channel!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TraderWorld;
