import PrimaryButton from "../../../Components/PrimaryButton";
import botSep from "/assets/bot-saprator.jpg";
import walletIcon from "/assets/shape_wallet.png"
import lockerIcon from "/assets/shape_locker.png"


function HeroSection() {
  return (
    <div className='hero-section lg:h-screen py-16 relative'>
          <img className="saperator absolute bottom-0 left-0 w-full" src={botSep} alt="" />
          <img className="absolute md:w-30 w-16 bottom-36 left-10" src={walletIcon} alt="" />
          <img className="absolute md:w-30 w-16 bottom-36 right-10" src={lockerIcon} alt="" />
        <div className='text-center relative z-10'>
            <h1 className="text-white font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[80px] leading-tight">
              WHERE <span className="text-[var(--color-primary)]">TRADERS</span>
              <br />
               <span className="text-[var(--color-primary)]">EMPOWER </span>TRADERS
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mt-6 font-medium mx-auto">
              “Lightning-fast payouts, instant funding, no hidden rules or
              consistency requirements - take on challenges with up to $400,000
              in capital!”
            </p>
        </div>
        <div className="mt-10 text-center flex flex-col gap-10">
          <PrimaryButton text="Join our discord community"  link="https://yourwebsite.com/about"/>
          <PrimaryButton text="Signup now"  link="https://yourwebsite.com/about"/>
        </div>
    </div>
  )
}

export default HeroSection