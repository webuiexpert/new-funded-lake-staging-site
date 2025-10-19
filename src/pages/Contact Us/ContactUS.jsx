import { Helmet } from "react-helmet";
import ContactForm from "./components/ContactForm";
import walletIcon from "/assets/shape_wallet.png";
import lockerIcon from "/assets/shape_locker.png";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="pingback" href="https://fundedlake.com/xmlrpc.php" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>Contact Us - FundedLake</title>
        <meta
          name="description"
          content="FundedLake is a prop trading firm offering instant funding up to $400K, fast payouts, and flexible rules for traders of all levels."
        />
        <link rel="canonical" href="https://fundedlake.com/contact-us/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Contact Us - FundedLake" />
        <meta
          property="og:description"
          content="FundedLake is a prop trading firm offering instant funding up to $400K, fast payouts, and flexible rules for traders of all levels."
        />
        <meta property="og:url" content="https://fundedlake.com/contact-us/" />
        <meta property="og:site_name" content="FundedLake" />
        <meta
          property="article:modified_time"
          content="2025-04-11T07:56:30+00:00"
        />
        <meta
          property="og:image"
          content="https://fundedlake.com/wp-content/uploads/2025/04/favicon.png"
        />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* ------------- */}

      <div className="Faq-wrapper overflow-hidden">
        <div className="flex flex-col items-center justify-center lg:pt-42 lg:pb-20 md:pt-32 md:pb-16 pt-24 pb-12 md:px-0 px-4 overflow-hidden relative">
          <div className="tg-bg-gradient d-block navy-bg-gradient"></div>
          <div className="navy-left-side-gradient d-block"></div>
          <div className="upDownAnim tg-bg-gradient d-block hero-gradient-ball alltuchtopdown bg-[radial-gradient(114.99% 94.16% at 72.92% 82.18%,#111111 47.39%,#091534 68.23%,#00c4f4 86.63%)]"></div>
          {/* <div className="ripple-shape2 z-30">
            <span className="ripple-11"></span>
            <span className="ripple-12"></span>
            <span className="ripple-13"></span>
            <span className="ripple-14"></span>
            <span className="ripple-15"></span>
          </div> */}
          <img
            className="upDownAnim absolute lg:w-24 w-20 md:bottom-6 bottom-10 md:left-10 left-5 opacity-60"
            src={walletIcon}
            alt=""
          />
          <div className="flex flex-wrap w-full flex-col items-center text-center relative z-10">
            <h2 className="md:leading-[1.1em] font-bold title-font mb-2 text-white">
              <span className="text-white">CONTACT</span> US <br />
            </h2>
            <p className="text-white md:text-xl text-base mt-6 md:max-w-[800px] w-full">
              We’re here to help you. Feel free to reach out with any questions
              or feedback — our team will get back to you as soon as possible.
            </p>
          </div>
        </div>
        <ContactForm />
      </div>

      {/* ------- */}
    </>
  );
};

export default ContactUs;
