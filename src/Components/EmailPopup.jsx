import { useEffect, useState } from "react";
import { X } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

function EmailPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);



  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-[#000000cb] bg-opacity-60 z-[9999] flex items-center justify-center font-lexend">
      <div className="relative text-white lg:w-full w-[90%] max-w-5xl rounded-lg shadow-lg overflow-hidden lg:mt-0 md:mt-5 mt-32">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 cursor-pointer text-white"
          onClick={() => setShow(false)}
        >
          <X className="bg-[#dd0000] rounded-full p-1 md:size-6 size-6" />
        </button>

      <div>
         <iframe
          src="https://c1bbd682.sibforms.com/serve/MUIFAOiQlwKSnl2D6DmemYvQQDYMOaXu2I8RJ8y9-DvzkBzM_VEuZhXinHxRM-_GixilaCEDOsh2ZlO9KReqUkata1eE09xgWB7PpUZ5P4P9l1sr0vp-Xb-tq8HScQUh4TxQ-hKhlofA0P14vco3pW9WDLo1IpEwCO716aJvZuAQMCQyX4HPJFbKIbXGHwzDOBu8M5rqMUQMXU0rOA=="
          width="100%"
          height="615"
          frameBorder="0"
          scrolling="auto"
          allowFullScreen
          style={{
            border: "none",
            borderRadius: "8px",
            background: "#fff",
            margin: "auto",
            overflow: "hidden"
          }}
          title="Brevo Signup Form"
        ></iframe>
        {/* <iframe width="540" height="305" src="" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe> */}
      </div>
      </div>
    </div>
  );

}
export default EmailPopup;