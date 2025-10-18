import React from "react";
import { NavLink } from "react-router-dom";

function PrimaryButton({ text, link }) {
  return (
    <NavLink to={link} target="_blank" rel="noopener noreferrer">
      <div className="w-fit mx-auto relative transition-all duration-700">        
        <span className="ico_creative_btn relative inline-flex items-center overflow-hidden justify-center lg:px-10 md:px-7 lg:py-5  md:py-3 py-3 px-3 rounded-lg border-1  hover:border-[#011667] border-[#5d3ad8] text-[#fff] font-semibold group">
          {/* Left Arrows */}
          <span className="relative flex items-center justify-center md:mr-6 mr-3">
            <small className="btn-side-dot absolute top-[-10px] left-[-30px] w-2 h-2 bg-transparent border border-[#011667] rounded-full  opacity-70 group-hover:opacity-40 transition-all duration-300"></small>
            <small className="btn-side-dot absolute bottom-[-10px] left-[-30px] w-2 h-2 border border-[#011667] rounded-full opacity-70 group-hover:opacity-40 transition-all duration-300"></small>
            <svg
              className="w-5 h-5 fill-[#011667] group-hover:fill-[#fff] group-hover:scale-[1.1] transition-all duration-300"
              viewBox="0 0 28 23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.4106 20.8083L5.36673 12.6878C5.26033 12.5804 5.11542 12.52 4.96423 12.52H1.84503C1.34158 12.52 1.08822 13.1276 1.44252 13.4852L9.48642 21.6057C9.59281 21.7131 9.73773 21.7736 9.88892 21.7736H13.0081C13.5116 21.7736 13.7649 21.166 13.4106 20.8083Z" />
              <path d="M12.6803 9.57324H24.71C25.7116 9.57324 26.5234 10.3851 26.5234 11.3866C26.5234 12.3882 25.7116 13.2 24.71 13.2H12.6803C11.6788 13.2 10.8669 12.3882 10.8669 11.3866C10.8669 10.3851 11.6788 9.57324 12.6803 9.57324Z" />
              <path d="M1.44252 9.28834L9.48641 1.16784C9.59281 1.06043 9.73772 1 9.88891 1H13.0081C13.5116 1 13.7649 1.60758 13.4106 1.96525L5.36672 10.0858C5.26033 10.1932 5.11541 10.2536 4.96422 10.2536H1.84502C1.34158 10.2536 1.08822 9.64601 1.44252 9.28834Z" />
            </svg>
          </span>

          {/* Text */}
          <span className="md:text-[14px] text-[14px] capitalize relative z-20 text-md text-center font-semibold tracking-wide">
            {text}
          </span>

          {/* Right Arrows */}
          <span className="relative flex items-center justify-center md:ml-6 ml-3">
            <small className="btn-side-dot absolute top-[-10px] right-[-30px] w-2 h-2 border border-[#011667] rounded-full opacity-70 group-hover:opacity-40 transition-all duration-300"></small>
            <small className="btn-side-dot absolute bottom-[-10px] right-[-30px] w-2 h-2 border border-[#011667] rounded-full opacity-70 group-hover:opacity-40 transition-all duration-300"></small>
            <svg
              className="w-5 h-5 fill-[#011667] group-hover:fill-[#fff] group-hover:scale-[1.1] transition-all duration-300"
              viewBox="0 0 27 23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.6558 2.19168L21.6997 10.3122C21.8061 10.4196 21.951 10.48 22.1022 10.48H25.2214C25.7248 10.48 25.9782 9.87238 25.6239 9.51478L17.58 1.39428C17.4736 1.28688 17.3287 1.22638 17.1775 1.22638H14.0583C13.5548 1.22638 13.3015 1.83398 13.6558 2.19168Z" />
              <path d="M14.3861 13.4268H2.35637C1.35486 13.4268 0.542969 12.6149 0.542969 11.6134C0.542969 10.6118 1.35486 9.79996 2.35637 9.79996H14.3861C15.3876 9.79996 16.1995 10.6118 16.1995 11.6134C16.1995 12.6149 15.3876 13.4268 14.3861 13.4268Z" />
              <path d="M25.6239 13.7117L17.58 21.8322C17.4736 21.9396 17.3287 22 17.1775 22H14.0583C13.5548 22 13.3015 21.3924 13.6558 21.0347L21.6997 12.9142C21.8061 12.8068 21.951 12.7464 22.1022 12.7464H25.2214C25.7248 12.7464 25.9782 13.354 25.6239 13.7117Z" />
            </svg>
          </span>
          <div className="btn-shadow py-2 px-3 border absolute left-0 w-full h-full rounded-md"></div>
        </span>
      </div>
    </NavLink>
  );
}

export default PrimaryButton;
