import { useEffect, useRef, useState } from "react";
import { X, Mail } from "lucide-react";
// import popupImg from "../assets/popupImg.png";
import popupImg100 from "/assets/popupImg-100k.png";
import emailjs from "@emailjs/browser";
import PrimaryButton from "./PrimaryButton";

function EmailPopup() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const form = useRef();

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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_thi1qfl", // Replace with your EmailJS service ID
        "template_bwdpwa7", // Replace with your EmailJS template ID
        form.current,
        {
          publicKey: "iSAUlRGczFV4MCVV6", // Replace with your EmailJS public key
        }
      )
      .then(
        () => {
          setMessage("✅ Email submitted successfully!");
          form.current.reset();
          setTimeout(() => setMessage(""), 4000);
        },
        (error) => {
          setMessage("❌ Failed to submit. Please try again.");
          setTimeout(() => setMessage(""), 4000);
        }
      );
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-[#000000cb] bg-opacity-60 z-[9999] flex items-center justify-center font-lexend">
      <div className="email-pop relative bg-gradient-to-br from-[#221f4a] to-[#080611] text-white w-[100%] overflow-y-auto lg:max-w-5xl px-4 py-6 lg:py-8 md:px-6 rounded-lg shadow-lg text-center scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 overscroll-contain touch-auto">
        <button
          className="absolute top-3 right-3 cursor-pointer text-white text-4xl font-bold"
          onClick={() => setShow(false)}
        >
          <X className="bg-[#dd0000] rounded-full p-1 md:size-10 size-6" />
        </button>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <img className="border-2 md:w-full w-[60%] md-mx-0 mx-auto" src={popupImg100} alt="" />
          <div className="popupContent text-start flex-col flex justify-around">
            <h3 className="font-semibold md:text-[24px] text-[20px] text-center md:text-left">
              ⚡WIN A FREE 100k 2-STEP CHALLENGE GIVEAWAY ⚡
            </h3>
            <p className="md:text-2xl text-xl mt-4 text-center md:text-left">
              Enter your email and join our discord for a chance to win a 100k 2-Step challenge account
              Winner will be announced on discord
            </p>
             
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-2 items-start mt-8"
            >
              <span className="emailInput flex items-center border w-full py-1 pl-4 pr-1 rounded-md bg-white">
                <input
                  className="md:py-3 md:px-1 py-3 px-2 rounded-full w-full focus:none outline-none text-black bg-[transparent]"
                  type="email"
                  name="user_email"
                  required
                  placeholder="Enter your email.."
                />
                <button
                  type="submit"
                  className="bg-gradient-to-br from-[#221f4a] to-[#080611] md:px-2 md:py-3 py-3 px-4 w-1/3 rounded-md font-bold md:text-lg text-sm uppercase"
                >
                  Submit
                </button>
              </span>

              {message && (
                <p className="text-sm font-semibold mt-2">{message}</p>
              )}
            </form>
            
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