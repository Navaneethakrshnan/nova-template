import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";

const Enquiry = () => {
  return (
    <div>
      <section className="w-full text-gray-600 bg-[#3554d1] body-font">
        <div className="container px-10 flex py-12 items-center justify-center flex-col">
          <div className="flex flex-col text-center w-full mb-12">
            <div className="flex justify-center items-center mb-4">
              <FaEnvelopeOpenText className="text-white text-5xl" />
            </div>
            <h1
              className="sm:text-3xl text-2xl font-medium title-font mb-3 text-white"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Enquire Now
            </h1>
            <p
              className="lg:max-w-full w-full mx-auto leading-relaxed text-xl text-white"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Elevate Your Marathon Event with NovaRace's Precision Timing and
              Online Registration Platform!
            </p>
            <p
              className="lg:max-w-6xl leading-loose w-full mx-auto mt-4 text-base text-white"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              NovaRace specializes in end-to-end race management, powered by
              cutting-edge BIB Tag systems for precise timing. With our
              intuitive online registration platform seamlessly integrated,
              organizing your marathon has never been easier. From 5K Fun run to
              Full marathons, trust NovaRace to streamline your event
              registration and timing processes. Contact us today to
              revolutionize your marathon experience!
            </p>
          </div>

          <form className="flex items-center max-w-lg mx-auto">
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
              <input
                type="text"
                id="voice-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm justify-start rounded-md block w-full ps-10 p-2.5 dark:bg-white dark:placeholder-gray-500 dark:text-black focus:border-transparent focus:outline-none h-16"
                placeholder="Your Email"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 end-0 flex items-center pe-3"
              ></button>
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white w-72 bg-[#292662] rounded-md border border-blue-700 h-16 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-white hover:text-black justify-center"
            >
              Request Call Back
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
