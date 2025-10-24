import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // or use any arrow SVG

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-0 cursor-pointer right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full border border-[#ffffff22] transition-all duration-300 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"} 
        bg-transparent hover:bg-white hover:text-black text-[#ffffff53]`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}

export default ScrollToTopButton;
