import tradeIcon1 from "/assets/trade-icon1.png"
import tradeIcon2 from "/assets/trade-icon2.png"
import tradeIcon3 from "/assets/trade-icon3.png"
import tradeIcon4 from "/assets/trade-icon4.png"
import tradeIcon5 from "/assets/trade-icon5.png"
import walletIcon from "/assets/shape_wallet.png"
import coineCubeIcon from "/assets/bicon-icons-bg-right.png"


function TradingSection() {
  return (
    <div className="relative py-10">
        <img className="absolute md:w-30 w-16 bottom-0" src={walletIcon} alt="" />
        <img className="absolute right-20 top-56 w-56 z-[0]" src={coineCubeIcon} alt="" />
      <h2 className="md:leading-[1.1em] font-bold title-font mb-2 text-center text-white">
        <span className="text-white">TRADE ANY MARKET,</span>
        <br /> YOUR WAY
      </h2>
      <div className="relative z-[0] w-full max-w-6xl mx-auto flex flex-wrap px-4 lg:px-0 mt-10 gap-x-10 gap-y-10 justify-center">
        <div className="trade-col hover:scale-105 duration-200 md:w-[31%] w-[80%] flex flex-col items-center gap-4 p-5 rounded-2xl">
            <img src={tradeIcon1} alt="" width={60} />
            <h5 className="text-2xl font-bold uppercase ">Forex</h5>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aliquam.</p>
        </div>
        <div className="trade-col hover:scale-105 duration-200 md:w-[31%] w-[80%] flex flex-col items-center gap-4 p-5 rounded-2xl">
            <img src={tradeIcon2} alt="" width={60} />
            <h5 className="text-2xl font-bold uppercase ">Forex</h5>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aliquam.</p>
        </div>
        <div className="trade-col hover:scale-105 duration-200 md:w-[31%] w-[80%] flex flex-col items-center gap-4 p-5 rounded-2xl">
            <img src={tradeIcon3} alt="" width={60} />
            <h5 className="text-2xl font-bold uppercase ">Forex</h5>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aliquam.</p>
        </div>
        <div className="trade-col hover:scale-105 duration-200 md:w-[31%] w-[80%] flex flex-col items-center gap-4 p-5 rounded-2xl">
            <img src={tradeIcon4} alt="" width={60} />
            <h5 className="text-2xl font-bold uppercase ">Forex</h5>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aliquam.</p>
        </div>
        <div className="trade-col hover:scale-105 duration-200 md:w-[31%] w-[80%] flex flex-col items-center gap-4 p-5 rounded-2xl">
            <img src={tradeIcon5} alt="" width={60} />
            <h5 className="text-2xl font-bold uppercase ">Forex</h5>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aliquam.</p>
        </div>

      </div>
    </div>
  );
}

export default TradingSection;
