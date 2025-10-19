// Modified Faq.jsx to include search functionality
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Helmet } from "react-helmet";
import StepOneFaq from "./components/StepOneFaq";
import InstantFundingFaq from "./components/InstantFundingFaq";
import GeneralQuestionFaq from "./components/GeneralQuestionFaq";
import StepTwoFaq from "./components/SteptwoFaq";
import topSep from "/assets/top-saprator.jpg";
import botSep from "/assets/bot-saprator.jpg";
import dollarCubeIcon from "/assets/bicon-icons-bg-left.png";
import coineCubeIcon from "/assets/bicon-icons-bg-right.png";
import walletIcon from "/assets/shape_wallet.png";
import lockerIcon from "/assets/shape_locker.png";

function Faq() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="pingback" href="https://fundedlake.com/xmlrpc.php" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>FAQs - FundedLake</title>
        <meta
          name="description"
          content="FundedLake is a prop trading firm offering instant funding up to $400K, fast payouts, and flexible rules for traders of all levels."
        />
        <link rel="canonical" href="https://fundedlake.com/faqs/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="FAQs - FundedLake" />
        <meta
          property="og:description"
          content="FundedLake is a prop trading firm offering instant funding up to $400K, fast payouts, and flexible rules for traders of all levels."
        />
        <meta property="og:url" content="https://fundedlake.com/faqs/" />
        <meta property="og:site_name" content="FundedLake" />
        <meta
          property="article:modified_time"
          content="2025-05-31T17:13:31+00:00"
        />
        <meta
          property="og:image"
          content="https://fundedlake.com/wp-content/uploads/2025/04/favicon.png"
        />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="42 minutes" />
      </Helmet>
      <div className="Faq-wrapper overflow-hidden">
        <div className="searchBox relative flex flex-col items-center justify-center lg:pt-42 lg:pb-3 md:pt-32 md:pb-3 pt-24 pb-2 md:px-0 px-4 overflow-hidden">
          <div className="tg-bg-gradient d-block navy-bg-gradient"></div>
          <div className="navy-left-side-gradient d-block"></div>
          <div className="upDownAnim tg-bg-gradient d-block hero-gradient-ball alltuchtopdown bg-[radial-gradient(114.99% 94.16% at 72.92% 82.18%,#111111 47.39%,#091534 68.23%,#00c4f4 86.63%)]"></div>
          {/* <div className="ripple-shape2 z-30">
            <span className="ripple-11"></span>
            <span className="ripple-12"></span>
            <span className="ripple-13"></span>
            <span className="ripple-14"></span>
            <span className="ripple-15"></span>
          </div> */}
          <img
            className="upDownAnim absolute lg:w-24 w-20 md:bottom-6 bottom-10 md:left-10 left-5 opacity-60"
            src={walletIcon}
            alt=""
          />
          <div className="flex flex-wrap w-full flex-col items-center text-center relative z-10">
            <h2 className="md:leading-[1.1em] font-bold title-font mb-2 text-white">
              <span className="text-white">FREQUENTLY ASKED</span>
              <br /> QUESTIONS
            </h2>
            <p className="text-white md:text-xl text-base md:max-w-[800px] w-full">
              Popular questions about FUNDEDLAKE
            </p>
          </div>

          <div className="relative z-10 mt-6 mx-auto md:w-[55%] w-[90%]">
            <input
              className="w-[100%] bg-white placeholder:text-black placeholder:font-bold outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] focus:shadow-none transition-shadow duration-300 md:mt-2 text-black px-3 md:py-6 py-5 rounded-xl"
              type="search"
              name="search"
              id="search"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="relative text-white text-center md:pt-8 pt-4 md:pb-6 px-0">
          <img className="saperator w-full" src={topSep} alt="" />
          <div className="navy-left-side-gradient d-block"></div>
          <div className="navy-right-side-gradient d-block"></div>
          <img
            className="scale-plus-animation absolute top-[20%] left-10 w-56 rotate-28"
            src={dollarCubeIcon}
            alt=""
          />
          <img
            className="scale-plus-animation absolute top-1/2 right-20 w-56 -rotate-32"
            src={coineCubeIcon}
            alt=""
          />
          <img
            className="upDownAnim absolute lg:w-36 w-20 md:bottom-36 bottom-10 md:left-10 left-5 opacity-60"
            src={walletIcon}
            alt=""
          />
          <img
            className="upDownAnim absolute lg:w-36 w-20 md:bottom-36 bottom-16  md:right-10 right-5 opacity-60"
            src={lockerIcon}
            alt=""
          />

          <div className="faq-tabs max-w-4xl mx-auto px-4 lg:px-0 md:my-16 my-10 relative z-10 overflow-hidden">
            <Tabs>
              <TabList className="text-start border-2 p-3 md:rounded-full rounded-2xl border-[#032070] justify-between flex md:flex-row flex-col items-center lg:gap-5 gap-4 text-black">
                <Tab
                  className="px-5 py-2 uppercase text-center cursor-pointer hover:bg-[#032070] text-white w-fit flex items-center justify-center md:text-[16px] rounded-full font-bold text-xl"
                  selectedClassName="bg-[#032070] text-white"
                >
                  One Step
                </Tab>
                <Tab
                  className="px-5 py-2 uppercase text-center cursor-pointer hover:bg-[#032070] text-white w-fit flex items-center justify-center md:text-[16px] rounded-full font-bold text-lg"
                  selectedClassName="bg-[#032070] text-white"
                >
                  Two Step
                </Tab>
                <Tab
                  className="px-5 py-2 uppercase text-center cursor-pointer hover:bg-[#032070] text-white w-fit flex items-center justify-center md:text-[16px] rounded-full font-bold text-lg"
                  selectedClassName="bg-[#032070] text-white"
                >
                  instant funding
                </Tab>
                <Tab
                  className="px-5 py-2 uppercase text-center cursor-pointer hover:bg-[#032070] text-white w-fit flex items-center justify-center md:text-[16px] rounded-full font-bold text-lg"
                  selectedClassName="bg-[#032070] text-white"
                >
                  general questions
                </Tab>
              </TabList>

              <TabPanel className="one-step text-start mt-10">
                <StepOneFaq searchTerm={searchTerm} />
              </TabPanel>

              <TabPanel className="two-step text-start mt-10">
                <StepTwoFaq searchTerm={searchTerm} />
              </TabPanel>

              <TabPanel className="instant-funding text-start mt-10">
                <InstantFundingFaq searchTerm={searchTerm} />
              </TabPanel>

              <TabPanel className="general-ques text-start md:mt-10 mt-5">
                <GeneralQuestionFaq searchTerm={searchTerm} />
              </TabPanel>
            </Tabs>
          </div>
          <img className="saperator w-full" src={botSep} alt="" />
        </div>
      </div>
    </>
  );
}

export default Faq;
