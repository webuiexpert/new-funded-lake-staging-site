import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OneStepPriceCard from "./OneStepPriceCard";
import TwoStepPriceCard from "./TwoStepPriceCard";
import InstantPriceCard from "./InstantPriceCard";
import PrimaryButton from "../../../Components/PrimaryButton";


export default () => (
  <Tabs className="priceTab md:text-[14px] max-w-5xl mx-auto font-bold text-sm text-white">
    <TabList className="priceTabUl overflow-hidden bg-[#000b1f]">
      <Tab className="cursor-pointer md:px-6 md:py-3 px-4 bg-dark mx-0 hover:bg-black duration-200 hover:text-dark rounded-full">
        ONE STEP
      </Tab>
      <Tab className="cursor-pointer md:px-6 md:py-3 px-4 bg-dark mx-0 hover:bg-black duration-200 hover:text-dark rounded-full">
        TWO STEP
      </Tab>
      <Tab className="cursor-pointer md:px-6 md:py-3 px-4 bg-dark mx-0 hover:bg-black duration-200 hover:text-dark rounded-full">
        INSTANT
      </Tab>
    </TabList>

    <TabPanel className="one-step InnerPriceTab mt-10 lg:text-lg">
      <Tabs>
        <TabList>
          <Tab className="my-2 mx-2 md:px-6 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $5K
          </Tab>
          <Tab className="my-2 mx-2 md:px-6 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $10K
          </Tab>
          <Tab className="my-2 mx-2 md:px-6 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $25K
          </Tab>
          <Tab className="my-2 mx-2 md:px-6 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $50K
          </Tab>
          <Tab className="my-2 mx-2 md:px-6 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full leading-4">
            $100K
            <br />
            <span className="lg:text-[10px] text-[5px] text-[#fff608]">
              {" "}
              MOST POPULAR{" "}
            </span>
          </Tab>
          <Tab className="my-2 mx-2 md:px-6 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $250K
          </Tab>
          <Tab className="my-2 mx-2 md:px-6 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $400K
          </Tab>
        </TabList>
        <TabPanel className="5K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-3">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              $35<span className="text-white"> for </span>
              5K<span className="text-white"> Account </span>
            </h2>
            <p className="text-xl text-center font-medium md:max-w-5xl">
              Our evaluation is based on best practices and International
              Standards, customized and refined to cater to every trading style.
            </p>
            <div className="flex gap-6">
              <PrimaryButton text="SIGNUP NOW" />
              <PrimaryButton text="GET FUNDED" link="https://fundedlakedashboard.propaccount.com/en/challenges?planid=99" />
            </div>
          </div>
        </TabPanel>
        <TabPanel className="10K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-white">$75</span> for
              <span className="text-white"> 10K </span> Account
            </h2>
            <div className="flex gap-6">
              <PrimaryButton text="SIGNUP NOW" />
              <PrimaryButton text="GET FUNDED" link="https://fundedlakedashboard.propaccount.com/en/challenges?planid=99" />
            </div>
          </div>
        </TabPanel>
        <TabPanel className="25K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              $190<span className="text-white"> for </span> 
              25K<span className="text-white"> Account </span> 
            </h2>
            <div className="flex gap-6">
              <PrimaryButton text="SIGNUP NOW" />
              <PrimaryButton text="GET FUNDED" link="https://fundedlakedashboard.propaccount.com/en/challenges?planid=100" />
            </div>
          </div>
        </TabPanel>
        <TabPanel className="50K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              $375<span className="text-white"> for </span> 
              50K<span className="text-white"> Account </span> 
            </h2>
            
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=101"
              target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="100K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              $750<span className="text-secondory"> for </span> 
              100K<span className="text-secondory"> Account </span> 
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=102"
              target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="250K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
             $2000<span className="text-white"> for </span> 
              250K<span className="text-white"> Account</span> 
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=103"
              target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="400K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              $3,600<span className="text-white"> for </span> 
              400K<span className="text-white">Account </span> 
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=104"
              target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
      </Tabs>
    </TabPanel>
    <TabPanel className="two-step InnerPriceTab mt-10 lg:text-lg">
      <Tabs>
        <TabList>
          <Tab className="my-2 mx-2 md:px-6 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $5K
          </Tab>
          <Tab className="my-2 mx-2 md:px-6 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $10K
          </Tab>
          <Tab className="my-2 mx-2 md:px-6 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $25K
          </Tab>
          <Tab className="my-2 mx-2 md:px-6 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $50K
          </Tab>
          <Tab className="my-2 mx-2 md:px-6 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full leading-4">
            $100K
            <br />
            <span class="lg:text-[10px] text-[5px] text-[#fff608]">
              MOST POPULAR
            </span>
          </Tab>
          <Tab className="my-2 mx-2 md:px-6 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $250K
          </Tab>
          <Tab className="my-2 mx-2 md:px-6 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $400K
          </Tab>
        </TabList>
        <TabPanel className="5K">
          <TwoStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">              
              $25<span className="text-white"> for </span>
              5K<span className="text-white"> Account </span>
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=160"
              target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="10K">
          <TwoStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
                  $50<span className="text-white"> for </span> 
              10K<span className="text-white"> Account </span> 
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=160"
              target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="25K">
          <TwoStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
                  $125<span className="text-white"> for </span> 
              25K<span className="text-white"> Account </span> 
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=161"
              target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="50K">
          <TwoStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
                  $225<span className="text-white"> for </span> 
             50K<span className="text-white"> Account </span> 
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=162"
              target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="100K">
          <TwoStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
                  $450<span className="text-white"> for </span> 
              100K<span className="text-white"> Account </span> 
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=163"
              target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="250K">
          <TwoStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
                  $1250<span className="text-white"> for </span> 
              250K<span className="text-white"> Account </span> 
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=164"
              target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="400K">
          <TwoStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$2200</span> for
              <span className="text-primary"> 400K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=165"
              target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
      </Tabs>
    </TabPanel>
    <TabPanel className="instant  InnerPriceTab mt-10 lg:text-lg mx-auto">
      <Tabs>
        <TabList>
          <Tab className="my-2 mx-2 md:px-6 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $5K
          </Tab>
          <Tab className="my-2 mx-2 md:px-6 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $10K
          </Tab>
          <Tab className="my-2 mx-2 md:px-6 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $25K
          </Tab>
          <Tab className="my-2 mx-2 md:px-6 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $50K
          </Tab>
          <Tab className="my-2 mx-2 md:px-6 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full leading-4">
            $100K
            <br />
            <span class="lg:text-[10px] text-[5px] text-[#fff608]">
              MOST POPULAR
            </span>
          </Tab>
        </TabList>
        <TabPanel className="5K">
          <InstantPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$200</span> for
              <span className="text-primary"> 5K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=180"
              target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="10K">
          <InstantPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$400</span> for
              <span className="text-primary"> 10K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=181"
              target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="25K">
          <InstantPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$1,125</span> for
              <span className="text-primary"> 25K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=182"
              target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="50K">
          <InstantPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$2,500</span> for
              <span className="text-primary"> 50K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=183"
              target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="100K">
          <InstantPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-secondory">$5,000</span> for
              <span className="text-secondory"> 100K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=184"
              target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="250K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$2000</span> for
              <span className="text-primary"> 250K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=103"
              target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="400K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-white">$3,600</span> for
              <span className="text-white"> 400K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=104"
              target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
      </Tabs>
    </TabPanel>
  </Tabs>
);
