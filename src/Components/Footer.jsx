import { NavLink } from "react-router-dom";
import logo from "/assets/logo.webp";
// import telegramIcon from "/assets/telegram-icon.png";
// import twitterIcon from "/assets/twitter-icon.png";
// import gitIcon from "/assets/git-icon.png";
import checkIcon from "/assets/bullet-points.png";
import { Facebook, Linkedin, Youtube, Instagram, Github, Send, X } from "lucide-react";
import { FaDiscord } from "react-icons/fa";



const socialLinks = [
  { icon: <FaDiscord  size="22" />, link: "https://discord.gg/vDSnjmxndy" },
  { icon: <Facebook size="22" />, link: "https://www.facebook.com/profile.php?id=61575089499789" },
  { icon: <Instagram size="22" />, link: "https://www.instagram.com/fundedlake/" },
  { icon: <Linkedin size="22" />, link: "http://www.linkedin.com/in/funded-lake-686999359" },
  { icon: <Youtube size="22" />, link: "https://www.youtube.com/@Fundedlake" },
  { icon: <X size="22" />, link: "https://x.com/Fundedlake" },   
];

function Footer() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 md:py-3 lg:px-0 lg:py-16 text-white">
      <div className="grid md:grid-cols-4 md:gap-10 gap-4">
        <div>
          <div>
            <NavLink
              to="/"
              className="text-xl mt-2 font-bold flex items-center md:justify-start justify-center space-x-2"
            >
              <img className="md:w-100" src={logo} alt="logo" />
            </NavLink>
            {/* <ul className="social-icons duration-500 flex justify-center items-center gap-2 my-4">
            
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
            </ul> */}
            <div className="flex gap-2 justify-center mt-6 ">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center px-2 py-2 rounded-md bg-gradient-to-b from-[#1a1a1a] to-[#111] border border-[var(--primary-color)] shadow-[0_0_10px_rgba(168,85,247,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all duration-300"
                >
                  <div className="text-gray-300 group-hover:text-[var(--primary-color)] transition-all duration-300">
                    {item.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="md:text-start text-center">
            <h5 className="font-bold text-white md:text-2xl text-xl my-2 uppercase">
              company
            </h5>
            <ul className="md:block flex gap-4 justify-center items-center md:text-base text-[14px]">
             
             <li>
               <NavLink to="https://dashboardanalytix.com/client-terms-and-policies/?v=13b5bfe96f3e">  <img className="inline" src={checkIcon} alt="" /> Terms of Use </NavLink>  
              </li>
             
             <li>
               <NavLink to="/contact-us"> <img className="inline" src={checkIcon} alt="" /> Contact Us </NavLink> 
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="md:text-start text-center">
            <h5 className="font-bold text-white  md:text-2xl text-xl my-2 uppercase">
              company
            </h5>
            <ul className="md:block flex gap-4 justify-center items-center md:text-base text-[14px]">
             
             <li>
                <NavLink to="/who-we-are"> <img className="inline x" src={checkIcon} alt="" /> About Us </NavLink>
              </li>
             
             <li>
               <NavLink to="#">  <img className="inline" src={checkIcon} alt="" /> Brand Kit </NavLink> 
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="md:text-start text-center">
            <h5 className="font-bold text-white md:text-2xl text-xl my-2 uppercase">
              company
            </h5>
            <ul className="md:block flex gap-4 justify-center items-center md:text-base text-[14px]">
             
             <li>
               <NavLink to="#">  <img className="inline" src={checkIcon} alt="" /> Reach Profity Target </NavLink> 
              </li>
             
             <li>
               <NavLink to="#">  <img className="inline" src={checkIcon} alt="" /> Do Not Violate Max & Daily Drawdown</NavLink> 
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-bold text-white my-6">DISCLAIMER</h3>
        <p className="md:text-base text-[14px] text-white text-center">
          FUNDEDLAKE is provided by Forest Park FX LTD. Forest Park FX LTD
          offers fee-based simulated trading assessments for Potential Traders.
          <br />
          All funding assessments are provided by Forest Park FX LTD and all
          assessment fees are paid to Forest Park FX LTD.
          <br />
          If you qualify for a Funded Account, you will be required to enter
          into a Trader Agreement with Forest Park FX LTD. Forest Park FX LTD
          does not provide any trading education or other services.
        </p>
        <p className="md:text-base text-[14px] text-white text-center mt-10">
          &copy; 2025 FundedLake. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
