import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OneStepPriceCard from "./OneStepPriceCard";
import TwoStepPriceCard from "./TwoStepPriceCard";
import InstantPriceCard from "./InstantPriceCard";
import PrimaryButton from "../../../Components/PrimaryButton";
import PriceTableBtns from "../../../Components/PriceTableBtns";


export default () => (
  <Tabs className="priceTab md:text-[14px] lg:max-w-5xl max-w-full mx-auto md:mb-0 mb-6 font-bold text-sm text-white relative z-20">
    <TabList className="priceTabUl overflow-hidden bg-[#000b1f] w-full">
      <Tab className="cursor-pointer md:px-6 md:py-3 py-2 px-4 bg-dark mx-0 hover:bg-[#032070] duration-200 hover:text-dark rounded-full">
        ONE STEP
      </Tab>
      <Tab className="cursor-pointer md:px-6 md:py-3 py-2 px-4 bg-dark mx-0 hover:bg-[#032070] duration-200 hover:text-dark rounded-full">
        TWO STEP
      </Tab>
      <Tab className="cursor-pointer md:px-6 md:py-3 py-2 px-4 bg-dark mx-0 hover:bg-[#032070] duration-200 hover:text-dark rounded-full">
        INSTANT
      </Tab>
    </TabList>

    <TabPanel className="one-step InnerPriceTab mt-10 lg:text-lg">
      <Tabs>
        <TabList>
          <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $5K
          </Tab>
          <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $10K
          </Tab>
          <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $25K
          </Tab>
          <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $50K
          </Tab>
          <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full leading-4">
            $100K
            <br />
            <span className="lg:text-[10px] text-[5px] text-[#fff608]">
              MOST POPULAR
            </span>
          </Tab>
          <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $250K
          </Tab>
          <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $400K
          </Tab>
        </TabList>
        <TabPanel className="5K">
          <OneStepPriceCard />
          <PriceTableBtns dollarAmount="$35" accountAmt="5K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=99" />
        </TabPanel>
        <TabPanel className="10K">
          <OneStepPriceCard />
          <PriceTableBtns dollarAmount="$75" accountAmt="10K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=99" />
        </TabPanel>
        <TabPanel className="25K">
          <OneStepPriceCard />
          <PriceTableBtns dollarAmount="$190" accountAmt="25K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=100" />
        </TabPanel>
        <TabPanel className="50K">
          <OneStepPriceCard />
           <PriceTableBtns dollarAmount="$375" accountAmt="50K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=101" />
        </TabPanel>
        <TabPanel className="100K">
          <OneStepPriceCard />
          <PriceTableBtns dollarAmount="$750" accountAmt="100K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=102" />
        </TabPanel>
        <TabPanel className="250K">
          <OneStepPriceCard />         
          <PriceTableBtns dollarAmount="$2000" accountAmt="250K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=103" />
        </TabPanel>
        <TabPanel className="400K">
          <OneStepPriceCard />
           <PriceTableBtns dollarAmount="$3,600" accountAmt="400K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=104" />
          
        </TabPanel>
      </Tabs>
    </TabPanel>
    <TabPanel className="two-step InnerPriceTab mt-10 lg:text-lg overflow-x-auto">
      <Tabs>
        <TabList>
          <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $5K
          </Tab>
          <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $10K
          </Tab>
          <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $25K
          </Tab>
          <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $50K
          </Tab>
          <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full leading-4">
            $100K
            <br />
            <span class="lg:text-[10px] text-[5px] text-[#fff608]">
              MOST POPULAR
            </span>
          </Tab>
          <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $250K
          </Tab>
          <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $400K
          </Tab>
        </TabList>
        <TabPanel className="5K">
          <TwoStepPriceCard />
          <PriceTableBtns dollarAmount="$25" accountAmt="5K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=160" />
        </TabPanel>
        <TabPanel className="10K">
          <TwoStepPriceCard />
          <PriceTableBtns dollarAmount="$50" accountAmt="10K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=160" />
        </TabPanel>
        <TabPanel className="25K">
          <TwoStepPriceCard />
          <PriceTableBtns dollarAmount="$125" accountAmt="25K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=161" />
        </TabPanel>
        <TabPanel className="50K">
          <TwoStepPriceCard />
          <PriceTableBtns dollarAmount="$225" accountAmt="50K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=162" />
        </TabPanel>
        <TabPanel className="100K">
          <TwoStepPriceCard />
          <PriceTableBtns dollarAmount="$450" accountAmt="100K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=163" />
        </TabPanel>
        <TabPanel className="250K">
          <TwoStepPriceCard />
          <PriceTableBtns dollarAmount="$1250" accountAmt="250K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=164" />
        </TabPanel>
        <TabPanel className="400K">
          <TwoStepPriceCard />
          <PriceTableBtns dollarAmount="$2200" accountAmt="400K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=165" />
        </TabPanel>
      </Tabs>
    </TabPanel>
    <TabPanel className="instant  InnerPriceTab lg:text-lg mx-auto">
      <Tabs>
        <TabList>
          <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $5K
          </Tab>
          <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $10K
          </Tab>
          <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $25K
          </Tab>
          <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
            $50K
          </Tab>
          <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full leading-4">
            $100K
            <br />
            <span class="lg:text-[10px] text-[5px] text-[#fff608]">
              MOST POPULAR
            </span>
          </Tab>
        </TabList>
        <TabPanel className="5K">
          <InstantPriceCard />
          <PriceTableBtns dollarAmount="$200" accountAmt="5K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=180" />
        </TabPanel>
        <TabPanel className="10K">
          <InstantPriceCard />
          <PriceTableBtns dollarAmount="$400" accountAmt="10K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=181" />
        </TabPanel>
        <TabPanel className="25K">
          <InstantPriceCard />
          <PriceTableBtns dollarAmount="$1,125" accountAmt="25K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=182" />
        </TabPanel>
        <TabPanel className="50K">
          <InstantPriceCard />
          <PriceTableBtns dollarAmount="$2,500" accountAmt="50K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=183" />
        </TabPanel>
        <TabPanel className="100K">
          <InstantPriceCard />
          <PriceTableBtns dollarAmount="$5,000" accountAmt="100K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=184" />
        </TabPanel>
        <TabPanel className="250K">
          <OneStepPriceCard />
          <PriceTableBtns dollarAmount="$2000" accountAmt="250K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=103" />
        </TabPanel>
        <TabPanel className="400K">
          <OneStepPriceCard />
          <PriceTableBtns dollarAmount="$3,600" accountAmt="400K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=104" />
        </TabPanel>
      </Tabs>
    </TabPanel>
  </Tabs>
);
