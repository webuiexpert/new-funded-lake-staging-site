import { X } from "lucide-react";
import { useState } from "react";
import SecondaryButton from "./SecondaryButton";

function TopBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-[var(--accent-color)] flex flex-col justify-center items-center gap-y-2 pt-1 px-4 md:px-6 py-[14px relative w-full">
      <X
        onClick={() => setVisible(false)}
        className="text-white size-6 md:size-7 absolute md:top-3 border rounded-full p-1 top-1 right-3 md:right-24 cursor-pointer"
        aria-label="Close promo"
      />
      <div className="flex items-center gap-x-4 text-white text-center relative py-3">
        <p className="text-[14px] md:text-xl lg:text-xl font-medium max-w-[350px] md:max-w-none">
          10% off any program CODE:TRADE10
        </p>
        <div className="flex gap-2">
           <button
              onClick={() => navigator.clipboard.writeText("TRADE10"
              )}
              className="px-2 py-1 hover:bg-white hover:text-black transition bg-[var(--color-primary)] rounded-md font-medium text-lg cursor-pointer">
              Copy TRADE10
            </button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
