import topSep from "/assets/top-saprator.jpg";
import botSep from "/assets/bot-saprator.jpg";
import dollarCubeIcon from "/assets/bicon-icons-bg-left.png";
import coineCubeIcon from "/assets/bicon-icons-bg-right.png";
import PrimaryButton from "../../../Components/PrimaryButton";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9tlup5a", "template_6ym46re", form.current, {
        publicKey: "", //iSAUlRGczFV4MCVV6
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMessage("Your message has been sent successfully!");
          form.current.reset(); // Clear the form fields
          setTimeout(() => {
            setMessage(""); // Clear the message after 5 seconds
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setMessage("Failed to send message. Please try again.");
          setTimeout(() => {
            setMessage(""); // Clear the message after 5 seconds
          }, 5000);
        }
      );
  };

  return (
    <div className="lg:px-0 mx-auto relative bg-[var(--accent-color)]">
      <img className="saperator w-full" src={topSep} alt="" />
      <div className="md:px-0 px-8">
        <div className="form-col md:max-w-4xl md:my-16 my-10 mx-auto p-8 rounded-2xl text-white">
          <div className="navy-left-side-gradient d-block"></div>
          <div className="navy-right-side-gradient d-block"></div>
          <img
            className="scale-plus-animation absolute top-1/2 left-10 w-56 rotate-28"
            src={dollarCubeIcon}
            alt=""
          />
          <img
            className="scale-plus-animation absolute top-1/2 right-20 w-56 -rotate-32"
            src={coineCubeIcon}
            alt=""
          />
          <form ref={form} onSubmit={sendEmail}>
            <div className="name-mail flex md:flex-row flex-col items-center justify-between gap-4">
              <div className="user-name md:w-1/2 w-full">
                {/* <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-3 md:my-3"
                >
                  <span className="required text-lg">Name*</span>
                </label> */}
                <input
                  className="w-full bg-white placeholder:text-black placeholder:font-bold outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] focus:shadow-none transition-shadow duration-300 md:mt-2 text-black px-3 py-4 rounded-xl"
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Your Name *"
                  required
                />
              </div>
              <div className="mail md:w-1/2 w-full">
                {/* <label
                  htmlFor="name"
                  className="block text-sm font-medium  my-3"
                >
                  <span className="required text-lg">Email*</span>
                </label> */}
                <input
                  className="w-full bg-white placeholder:text-black placeholder:font-bold outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] focus:shadow-none transition-shadow duration-300 focus md:mt-2 text-black px-3 py-4 rounded-xl"
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Your Email *"
                  required
                />
              </div>
            </div>
            <div className="contact-number w-full mt-4">
              {/* <label htmlFor="name" className="block text-sm font-medium my-3">
                <span className="required text-lg">Contact Number*</span>
              </label> */}
              <input
                className="w-full bg-white placeholder:text-black placeholder:font-bold outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] focus:shadow-none transition-shadow duration-300 focus md:mt-2 text-black px-3 py-4 rounded-xl"
                type="tel"
                id="number"
                name="user_number"
                placeholder="Your Number *"
                required
              />
            </div>
            <div className="subject w-full mt-4">
              {/* <label htmlFor="name" className="block text-sm font-medium my-3">
                <span className="required text-lg">Subject*</span>
              </label> */}
              <input
                className="w-full bg-white placeholder:text-black placeholder:font-bold outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] focus:shadow-none transition-shadow duration-300 focus md:mt-2 text-black px-3 py-4 rounded-xl"
                type="text"
                id="subject"
                name="user_subject"
                placeholder="Subject *"
                required
              />
            </div>
            <div className="your-message w-full mt-4">
              {/* <label htmlFor="name" className="block text-sm font-medium my-3">
                <span className="required text-lg">Your Message*</span>
              </label> */}
              <textarea
                className="bg-white placeholder:text-black placeholder:font-bold outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] focus:shadow-none transition-shadow duration-300  w-full md:mt-2 text-black px-3 py-4 rounded-xl h-[140px]"
                type="text"
                id="message"
                name="user_message"
                placeholder="Your Message *"
                required
              />
            </div>

            <button type="submit" value="Send" className="mt-5">
              <PrimaryButton text="SUBMIT" />
            </button>
            {message && (
              <p className="w-full text-center p-2 text-2xl font-semibold text-[#ffff]">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
      <img className="saperator w-full" src={botSep} alt="" />
    </div>
  );
}

export default ContactForm;
