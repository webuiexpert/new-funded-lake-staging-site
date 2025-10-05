import topSep from "/assets/top-saprator.jpg";
import botSep from "/assets/bot-saprator.jpg";
import stepsImg1 from "/assets/step-1.png";
import stepsImg2 from "/assets/step-2.png";
import stepsImg3 from "/assets/step-3.png";
import stepsIcon1 from "/assets/evaluation-phase-1.png";
import stepsIcon2 from "/assets/funded-phase-2.png";
import stepsIcon3 from "/assets/payout-icon.png";
import arrowIcon from "/assets/blue-right-arrow.png";

function HowWorks() {
  const workSteps = [
    {
      id: 1,
      steps: stepsImg1,
      title: "Choose Your Program",
      points: ["REACH PROFIT TARGET", "DO NOT VIOLATE MAX & DAILY DRAWDOWN"],
      stepIcon: stepsIcon1,
      subTitle: "EVALUATION PHASE",
    },
    {
      id: 2,
      steps: stepsImg2,
      title: "Earn as a Funded Trader",
      points: ["$109.200"],
      stepIcon: stepsIcon2,
      subTitle: "FUNDED PHASE",
    },
    {
      id: 3,
      steps: stepsImg3,
      title: "Receive Your Payout",
      points: ["Withdraw as soon as you get funded", "First payout is instant"],
      stepIcon: stepsIcon3,
      subTitle: "PAYOUT",
    },
  ];

  return (
    <div className="text-white py-24 relative">
      <img className="saperator absolute top-0 left-0 w-full" src={topSep} alt="" />
      <img className="saperator absolute bottom-0 left-0 w-full" src={botSep} alt="" />
      <h2 className="text-center mt-2">How it works</h2>
      <div className="works-box max-w-6xl mx-auto md:mt-10 md:mb-16 mt-5">
        <div className="grid grid-cols- md:grid-cols-3 gap-8 text-center">
          {workSteps.map((item) => (
            <div
              key={item.id}
              className="works-col flex flex-col items-start justify-between space-y-4 gap-y-4 bg-[#0f1021] px-6 pb-6 min-h-[320px] rounded-xl hover:scale-105 duration-200 relative radial-bg shadow-xl"
            >
              <div className="text-start space-y-6">
                <img className="mr-auto w-20" src={item.steps} alt="" />
                <h3 className="text-3xl text-start font-bold uppercase">
                  {item.title}
                </h3>
                <ul className="space-y-4 text-start inline-block">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex justify-start items-start space-x-3 text-xl"
                    >
                      <span className="text-cyan-400 ">✔</span>
                      <span className="font-bold text-gray-200">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center w-full">
                <img className="md:w-38 mx-auto" src={item.stepIcon} alt="" />
                <h4 className="text-center my-5 w-full">{item.subTitle}</h4>
              </div>
              <img   className={`w-16 absolute -right-6 bottom-28 ${item.subTitle === "PAYOUT" ? "hidden" : "block"}`} src={arrowIcon} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowWorks;
