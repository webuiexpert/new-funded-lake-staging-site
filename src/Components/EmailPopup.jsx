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
    <div className="fixed inset-0 bg-[#000000cb] bg-opacity-60 z-[9999] flex items-center justify-center font-lexend">
      <div className="relative bg-gradient-to-br from-[#221f4a] to-[#080611] text-white lg:w-full w-[90%] max-w-5xl rounded-lg shadow-lg overflow-hidden lg:mt-0 mt-28">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 cursor-pointer text-white"
          onClick={() => setShow(false)}
        >
          <X className="bg-[#dd0000] rounded-full p-1 md:size-6 size-6" />
        </button>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left Section (Image only) */}
          <div className="md:w-1/2 w-full">
            <img
              src={popupImg100}
              alt="100K Giveaway"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section (Form) */}
          <div className="sib-form md:w-1/2 w-full flex flex-col justify-center p-8">
            <div id="sib-form-container" className="sib-form-container w-full">
              <div
                id="sib-container"
                className="sib-container--large sib-container--horizontal"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <form
                  id="sib-form"
                  method="POST"
                  action="Shttps://c1bbd682.sibforms.com/serve/MUIFAOiQlwKSnl2D6DmemYvQQDYMOaXu2I8RJ8y9-DvzkBzM_VEuZhXinHxRM-_GixilaCEDOsh2ZlO9KReqUkata1eE09xgWB7PpUZ5P4P9l1sr0vp-Xb-tq8HScQUh4TxQ-hKhlofA0P14vco3pW9WDLo1IpEwCO716aJvZuAQMCQyX4HPJFbKIbXGHwzDOBu8M5rqMUQMXU0rOA=="
                  className="flex flex-col"
                >
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    ⚡ WIN A FREE 100k 2-STEP CHALLENGE GIVEAWAY ⚡
                  </h3>
                  <p className="text-gray-200 text-base mb-6 text-center">
                    Enter your email and join our discord for a chance to win a 100k 2-Step
                    challenge account. Winner will be announced on discord.
                  </p>

                  <div className="flex w-full bg-white rounded-md overflow-hidden">
                    <input
                      className="w-full px-4 py-3 text-black outline-none"
                      type="text"
                      id="EMAIL"
                      name="EMAIL"
                      autoComplete="off"
                      placeholder="Enter your email..."
                      data-required="true"
                      required
                    />
                    <button
                      className="bg-[var(--primary-color)] hover:bg-[#00aee0] transition font-bold px-6 uppercase text-white"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>

                  <input
                    type="text"
                    name="email_address_check"
                    defaultValue=""
                    className="hidden"
                  />
                  <input type="hidden" name="locale" defaultValue="en" />
                  <input type="hidden" name="html_type" defaultValue="simple" />
                </form>
              </div>
            </div>
             <div className="contact-btns md:gap-5 gap-2 flex flex-col justify-center">
              <PrimaryButton
                text="JOIN OUR DISCORD"
                link="https://discord.gg/vDSnjmxndy"
              />
              <PrimaryButton
                text="SIGNUP NOW"
                link="https://fundedlakedashboard.propaccount.com/en/sign-up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailPopup;