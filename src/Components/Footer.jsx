import { NavLink } from "react-router-dom";
import logo from "/assets/logo.webp";
import telegramIcon from "/assets/telegram-icon.png";
import twitterIcon from "/assets/twitter-icon.png";
import gitIcon from "/assets/git-icon.png";
import checkIcon from "/assets/bullet-points.png";

function Footer() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-3 md:py-3 lg:px-0 lg:py-16 text-white">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <div>
            <NavLink
              to="/"
              className="text-xl mt-2 font-bold flex items-center space-x-2"
            >
              <img className="w-100" src={logo} alt="logo" />
            </NavLink>
            <ul className="social-icons duration-500 flex justify-center items-center gap-2 my-4">
            
              <a
                href="https://www.facebook.com/profile.php?id=61575089499789"
                target="_blank"
              >
                <li>
                  <img src={telegramIcon} alt="" />
                </li>
              </a>
               <a
                href="https://www.facebook.com/profile.php?id=61575089499789"
                target="_blank"
              >
                <li>
                  <img src={twitterIcon} alt="" />
                </li>
              </a>
              <a href="https://www.instagram.com/fundedlake/" target="_blank">
                <li>
                  <img src={gitIcon} alt="" />
                </li>
              </a>
              <a
                href="http://www.linkedin.com/in/funded-lake-686999359"
                target="_blank"
              >
                <li>
                  <img src={telegramIcon} alt="" />
                </li>
              </a>
              <a href="https://www.youtube.com/@Fundedlake" target="_blank">
                <li>
                  <img src={twitterIcon} alt="" />
                </li>
              </a>
              <a href="https://x.com/Fundedlake" target="_blank">
                <li>
                  <img src={gitIcon} alt="" />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h5 className="font-bold text-white text-2xl uppercase">company</h5>
            <ul className="space-y-4 mt-4">
                <li><img className="inline" src={checkIcon} alt="" /> Terms of Use</li>
                <li><img className="inline" src={checkIcon} alt="" /> Contact Us</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h5 className="font-bold text-white text-2xl uppercase">company</h5>
            <ul className="space-y-4 mt-4">
                <li><img className="inline" src={checkIcon} alt="" /> About Us</li>
                <li><img className="inline" src={checkIcon} alt="" /> Brand Kit</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h5 className="font-bold text-white text-2xl uppercase">company</h5>
            <ul className="space-y-4 mt-4">
                <li><img className="inline" src={checkIcon} alt="" /> Reach Profity Target</li>
                <li><img className="inline" src={checkIcon} alt="" /> Do Not Violate Max & Daily Drawdown</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-bold text-white my-6">DISCLAIMER</h3>
          <p className="text-base text-white text-center">
            FUNDEDLAKE is provided by Forest Park FX LTD. Forest Park FX LTD
            offers fee-based simulated trading assessments for Potential
            Traders.
            <br />
            All funding assessments are provided by Forest Park FX LTD and all
            assessment fees are paid to Forest Park FX LTD.
            <br />
            If you qualify for a Funded Account, you will be required to enter
            into a Trader Agreement with Forest Park FX LTD. Forest Park FX LTD
            does not provide any trading education or other services.
          </p>
          <p className="text-base text-white text-center mt-10">
            &copy; 2025 FundedLake. All rights reserved.
          </p>
      </div>
    </div>
  );
}

export default Footer;
