import img7 from '/assets/certificate-of-withdrawl7.jpg'; 
import img1 from '/assets/certificate-of-withdrawl1.jpeg';
import img2 from '/assets/certificate-of-withdrawl2.jpeg';
import img3 from '/assets/certificate-of-withdrawl3.jpeg'; 
import img4 from '/assets/certificate-of-withdrawl4.jpeg'; 
import img5 from '/assets/certificate-of-withdrawl5.jpeg'; 
import img6 from '/assets/certificate-of-withdrawl6.jpeg'; 
import img8 from '/assets/certificate-of-withdrawl8.jpg'; 
import img9 from '/assets/certificate-of-withdrawl9.jpg'; 
import img10 from '/assets/certificate-of-withdrawl10.jpg'; 
import img11 from '/assets/certificate-of-withdrawl11.jpg'; 
import img12 from '/assets/certificate-of-withdrawl12.jpg'; 
import img13 from '/assets/certificate-of-withdrawl13.jpg'; 
import img14 from '/assets/certificate-of-withdrawl14.jpg'; 
import img15 from '/assets/certificate-of-withdrawl15.jpg'; 
import img16 from '/assets/certificate-of-withdrawl16.jpg'; 
import img17 from '/assets/certificate-of-withdrawl17.jpg'; 
import img18 from '/assets/certificate-of-withdrawl18.jpg'; 
import topSep from "/assets/top-saprator.jpg";
import { div } from 'framer-motion/client';

const CertificateMarqueeSlider = () => {
  // Latest images first
  const images = [img18, img17, img16, img15, img14, img13, img12, img11, img10, img9, img8, img7, img6, img5, img4, img3, img2, img1];

  return (
    <div className="overflow-hidden py-6 md:py-10 lg:pb-32 min-w-full relative">
      <img className="saperator absolute bottom-0 left-0 w-full" src={topSep} alt="" />
      <div className="relative animate-marquee group mb-1">
        <div className="flex gap-6 whitespace-nowrap min-w-[200vw] group-hover:[animation-play-state:paused]">
          {[...images, ...images].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`slide-${idx}`}
              className="certImg relative border border-[#2f373d] p-4 inline-block w-[520px] rounded-2xl shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateMarqueeSlider;