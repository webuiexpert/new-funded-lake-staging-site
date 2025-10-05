import trustpilotimg1  from "/assets/trust-pilot-img1.png";
import trustpilotimg2  from "/assets/trust-pilot-img2.png";
import trustpilotimg3  from "/assets/trust-pilot-img3.png";
import trustpilotimg14  from "/assets/trust-pilot-img14.png";
import trustpilotimg4  from "/assets/trust-pilot-img4.png";
import trustpilotimg5  from "/assets/trust-pilot-img5.png";
import trustpilotimg6  from "/assets/trust-pilot-img6.png";
import trustpilotimg7  from "/assets/trust-pilot-img7.png";
import trustpilotimg8  from "/assets/trust-pilot-img8.png";
import trustpilotimg9  from "/assets/trust-pilot-img9.png";
import trustpilotimg10  from "/assets/trust-pilot-img10.png";
import trustpilotimg11  from "/assets/trust-pilot-img11.png";
import trustpilotimg12  from "/assets/trust-pilot-img12.png";
import trustpilotimg13  from "/assets/trust-pilot-img13.png";
import topSep from "/assets/top-saprator.jpg";


function TrustPilotMarquee() {

    const trustImages = [trustpilotimg1, trustpilotimg2, trustpilotimg3, trustpilotimg14, trustpilotimg4, trustpilotimg5, trustpilotimg6, trustpilotimg7, trustpilotimg8, trustpilotimg9, trustpilotimg10, trustpilotimg11, trustpilotimg12, trustpilotimg13]

  return (
    <div className="overflow-hidden md:pb-36 relative whitespace-nowrap bg-[radial-gradient(circle,rgba(2,33,80,1)_6%,rgba(0,0,0,1)_47%)] py-10">
      <img className="saperator absolute bottom-0 left-0 w-full" src={topSep} alt="" />
      <div class="flex flex-wrap w-full md:mb-16 mb-8 flex-col items-center text-center">
        <h2 class="sm:text-[50px] text-2xl font-bold title-font mb-2 text-white">
          <span className="text-white">WATCH SOME OF OUR</span><br/>
          <span className="text-gredient ">TRUST PILOT</span> REVIEWS
        </h2>
      </div>
      <div className="trustPilot-container relative">
        <div className="trustPilot-marquee">
        {/* Duplicate for seamless loop */}
        {[...trustImages, ...trustImages].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`slide-${idx}`}
            className="border-2 border-[#2f373d] w-[620px] object-contain mx-4 inline-block rounded-2xl shadow-md bg-white"
          />
        ))}
      </div>
      </div>
      
    </div>
  );
}

export default TrustPilotMarquee