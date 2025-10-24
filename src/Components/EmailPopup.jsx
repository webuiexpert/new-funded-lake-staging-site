import { useEffect, useRef, useState } from "react";
import { X, Mail } from "lucide-react";
// import popupImg from "../assets/popupImg.png";
import popupImg100 from "/assets/popupImg-100k.png";
// import emailjs from "@emailjs/browser";
import PrimaryButton from "./PrimaryButton";

function EmailPopup() {
  const [show, setShow] = useState(false);
  // const [message, setMessage] = useState("");
  // const form = useRef();

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

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_thi1qfl", // Replace with your EmailJS service ID
  //       "template_bwdpwa7", // Replace with your EmailJS template ID
  //       form.current,
  //       {
  //         publicKey: "iSAUlRGczFV4MCVV6", // Replace with your EmailJS public key
  //       }
  //     )
  //     .then(
  //       () => {
  //         setMessage("✅ Email submitted successfully!");
  //         form.current.reset();
  //         setTimeout(() => setMessage(""), 4000);
  //       },
  //       (error) => {
  //         setMessage("❌ Failed to submit. Please try again.");
  //         setTimeout(() => setMessage(""), 4000);
  //       }
  //     );
  // };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-[#000000cb] bg-opacity-60 z-[9999] flex md:items-center justify-center font-lexend">
      <div className="email-pop relative bg-gradient-to-br from-[#221f4a] to-[#080611] text-white w-[100%] overflow-y-auto lg:max-w-5xl max-w-[90%] md:mt-5 mt-6 px-4 py-6 lg:py-8 md:px-6 rounded-lg shadow-lg text-center scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 overscroll-contain touch-auto">
        <button
          className="absolute top-3 right-3 cursor-pointer text-white text-4xl font-bold"
          onClick={() => setShow(false)}
        >
          <X className="bg-[#dd0000] rounded-full p-1 md:size-6 size-6" />
        </button>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <img className="border-2 md:w-full w-[60%] md-mx-0 mx-auto" src={popupImg100} alt="" />
          <div className="popupContent text-start flex-col flex justify-around">
            <h3 className="font-semibold md:text-[20px] text-[18px] text-center md:text-left">
              ⚡WIN A FREE 100k 2-STEP CHALLENGE GIVEAWAY ⚡
            </h3>
            <p className="lg:text-2xl md:text-base text-sm mt-4 text-center md:text-left">
              Enter your email and join our discord for a chance to win a 100k 2-Step challenge account
              Winner will be announced on discord
            </p>
            <iframe
          src="https://c1bbd682.sibforms.com/serve/MUIFAOiQlwKSnl2D6DmemYvQQDYMOaXu2I8RJ8y9-DvzkBzM_VEuZhXinHxRM-_GixilaCEDOsh2ZlO9KReqUkata1eE09xgWB7PpUZ5P4P9l1sr0vp-Xb-tq8HScQUh4TxQ-hKhlofA0P14vco3pW9WDLo1IpEwCO716aJvZuAQMCQyX4HPJFbKIbXGHwzDOBu8M5rqMUQMXU0rOA=="
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="auto"
          allowFullScreen
          style={{
            border: "none",
            borderRadius: "8px",
            background: "#fff",
            marginTop: "1rem",
          }}
          title="Brevo Signup Form"
        ></iframe>
             
            {/* <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-2 items-start mt-8"
            >
              <span className="emailInput flex items-center border w-full py-1 pl-4 pr-1 rounded-md bg-white">
                <input
                  className="md:py-2 md:px-1 py-2 px-2 rounded-full w-full focus:none outline-none text-black bg-[transparent]"
                  type="email"
                  name="user_email"
                  required
                  placeholder="Enter your email.."
                />
                <button
                  type="submit"
                  className="bg-gradient-to-br from-[#221f4a] to-[#080611] md:px-4 md:py-2 py-2 px-3 w-1/3 rounded-md font-bold md:text-base text-sm uppercase"
                >
                  Submit
                </button>
              </span>

              {message && (
                <p className="text-sm font-semibold mt-2">{message}</p>
              )}
            </form> */}
            
            <div className="contact-btns md:gap-5 gap-2 my-6 flex flex-col justify-center">
              <PrimaryButton text="JOIN OUR DISCORD" link="https://discord.gg/vDSnjmxndy" />
              <PrimaryButton text="SIGNUP NOW" link="https://fundedlakedashboard.propaccount.com/en/sign-up" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailPopup;