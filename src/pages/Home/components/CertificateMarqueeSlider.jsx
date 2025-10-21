import img1 from "/assets/certificate-of-withdrawl1.jpeg";
import img2 from "/assets/certificate-of-withdrawl2.jpeg";
import img3 from "/assets/certificate-of-withdrawl3.jpeg";
import img4 from "/assets/certificate-of-withdrawl4.jpeg";
import img5 from "/assets/certificate-of-withdrawl5.jpeg";
import img6 from "/assets/certificate-of-withdrawl6.jpeg";
import img7 from "/assets/certificate-of-withdrawl7.jpg";
import img8 from "/assets/certificate-of-withdrawl8.jpg";
import img9 from "/assets/certificate-of-withdrawl9.jpg";
import img10 from "/assets/certificate-of-withdrawl10.jpg";
import img11 from "/assets/certificate-of-withdrawl11.jpg";
import img12 from "/assets/certificate-of-withdrawl12.jpg";
import img13 from "/assets/certificate-of-withdrawl13.jpg";
import img14 from "/assets/certificate-of-withdrawl14.jpg";
import img15 from "/assets/certificate-of-withdrawl15.jpg";
import img16 from "/assets/certificate-of-withdrawl16.jpg";
import img17 from "/assets/certificate-of-withdrawl17.jpg";
import img18 from "/assets/certificate-of-withdrawl18.jpg";
import img19 from '/assets/certificate-of-withdrawl19.jpg'; 
import img20 from '/assets/certificate-of-withdrawl20.jpg'; 
import img21 from '/assets/certificate-of-withdrawl21.jpg'; 
import img22 from '/assets/certificate-of-withdrawl22.jpg'; 
import img23 from '/assets/certificate-of-withdrawl23.jpg'; 
import img24 from '/assets/certificate-of-withdrawl24.jpg';  
import topSep from "/assets/top-saprator.jpg";
import dollarCubeIcon from "/assets/bicon-icons-bg-left.png";
import coineCubeIcon from "/assets/bicon-icons-bg-right.png";

const CertificateMarqueeSlider = () => {
  // Latest images first
  const images = [img21, img22, img23, img24, img20, img19, img18, img17, img16, img15, img14, img13, img12, img11, img10, img9, img8, img7, img6, img5, img4, img3, img2, img1];

  return (
    <div className="overflow-hidden py-6 md:py-10 lg:pb-32 min-w-full relative">
      <img
              className="scale-plus-animation absolute top-10 left-10 w-56 rotate-28"
              src={dollarCubeIcon}
              alt=""
            />
            <img
              className="scale-plus-animation absolute top-1/2 right-20 w-36 -rotate-52"
              src={coineCubeIcon}
              alt=""
            />
      <img
        className="saperator absolute bottom-0 left-0 w-full"
        src={topSep}
        alt=""
      />
      <div className="relative animate-marquee  mb-1 transition-all duration-600 ease-linear">
        <div className="flex gap-6 whitespace-nowrap min-w-[200vw] group-hover:[animation-play-state:paused]">
          {[...images, ...images].map((img, idx) => (
            <div
              key={idx}
              className="bg-eff-col border border-[#2f373d] group rounded-2xl hover:bg-[linear-gradient(120deg,#944FEB_0%,#DB5D41_37%,#944FEB_100%)] duration-700 ease-linear  flex-shrink-0 w-[380px] h-[280px] p-[1px] flex items-center justify-center group  relative"
            >
              <div className="flex relative items-center rounded-2xl justify-center w-[100%] bg-[#070710] p-10 h-[100%]">
                <img
                  key={idx}
                  src={img}
                  alt={`slide-${idx}`}
                  className="bg-eff-col relative z-40 logo_wrap rounded-2xl inline-block shadow-md object-cover"
                />
                <span class="dot_1 absolute bg-[#2f336d2b] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[7px] z-[1]  group-hover:border-white top-5 left-5 rounded-full"></span>
                <span class="dot_2 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[7px] z-[1]  group-hover:border-white bottom-5 left-5 rounded-full"></span>
                <span class="dot_3 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[7px] z-[1]  group-hover:border-white top-5 right-5 rounded-full"></span>
                <span class="dot_4 absolute bg-[#2f336dcc] group-hover:bg-[#4750c8] group-hover:scale-110 scale-100 duration-700 size-[7px] z-[1]  group-hover:border-white bottom-5 right-5 rounded-full"></span>
              
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateMarqueeSlider;
