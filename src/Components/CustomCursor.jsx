import React, { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-4 h-4 bg-[var(--primary-color)] z-40 lg:hidden hidden rounded-full pointer-events-none mix-blend-screen"
      style={{
        transform: `translate3d(${position.x - 8}px, ${position.y - 8}px, 0)`,
        transition: "transform 0.05s linear",
      }}
    ></div>
  );
}

export default CustomCursor;
