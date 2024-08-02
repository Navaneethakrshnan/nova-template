import React from "react";
import Image1 from "../assets/salem.jpg";
import Image2 from "../assets/vincera_eventposter.jpg";
import Image3 from "../assets/sivagiri.jpg";
import Image4 from "../assets/erode.jpg";
import "./Events.css";

const Events = () => {
  return (
    <div>
      <section class="text-gray-600 lg:px-12 body-font">
        <div class="container px-5 pt-12 lg:pt-24 mb-0 mx-auto">
          <div class="flex flex-wrap lg:-mt-12 -m-4 justify-center md:justify-start">
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <div className="flex items-start">
                  <div className="relative overflow-hidden">
                    <span className="mt-4 absolute top-0 left-0 text-white text-xs font-medium me-2 px-7 py-2 rounded dark:bg-[#3554d1] z-10">
                      CLOSED
                    </span>
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-md w-full h-56 object-cover object-center mb-4 transition ease-in-out duration-1000 hover:-translate-y-1 hover:scale-105"
                      src={Image1}
                    />
                  </div>
                </div>
                <div
                  class="w-full text-left justify-start"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  <h2 class="title-font font-medium text-lg text-[#292662] underline-from-left">
                    Salem Runners Marathon 2024
                  </h2>
                  <h3 class="text-gray-500 mb-3 mt-2 text-sm">
                    Salem, Tamil Nadu, India
                  </h3>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2 justify-center">
              <div class="h-full flex flex-col items-center text-center">
                <div className="flex items-start">
                  <div className="relative overflow-hidden">
                    <span className="mt-4 absolute top-0 left-0 text-white text-xs font-medium me-2 px-7 py-2 rounded dark:bg-[#3554d1] z-10">
                      CLOSED
                    </span>
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-md w-full h-56 object-cover object-center mb-4 transition ease-in-out duration-1000 hover:-translate-y-1 hover:scale-105"
                      src={Image2}
                    />
                  </div>
                </div>
                <div
                  class="w-full text-left justify-start"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  <h2 class="title-font font-medium text-lg text-[#292662] underline-from-left">
                    Vincera Social Marathon
                  </h2>
                  <h3 class="text-gray-500 mb-3 mt-2 text-sm">
                    Besant Nagar, Chennai
                  </h3>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <div className="flex items-start">
                  <div className="relative overflow-hidden">
                    <span className="mt-4 absolute top-0 left-0 text-white text-xs font-medium me-2 px-7 py-2 rounded dark:bg-[#3554d1] z-10">
                      CLOSED
                    </span>
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-md w-full h-56 object-cover object-center mb-4 transition ease-in-out duration-1000 hover:-translate-y-1 hover:scale-105"
                      src={Image3}
                    />
                  </div>
                </div>
                <div
                  class="w-full text-left justify-start"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  <h2 className="title-font font-medium text-lg text-[#292662] underline-from-left">
                    Sivagiri Marathon 2024
                  </h2>
                  <h3 class="text-gray-500 mb-3 mt-2 text-sm">
                    Sivagiri, Erode
                  </h3>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <div className="flex items-start">
                  <div className="relative overflow-hidden">
                    <span className=" mt-4 absolute top-0 left-0 text-white text-xs font-medium me-2 px-7 py-2 rounded dark:bg-[#3554d1] z-10">
                      CLOSED
                    </span>
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-md w-full h-56 object-cover object-center mb-4 transition ease-in-out duration-1000 hover:-translate-y-1 hover:scale-105"
                      src={Image4}
                    />
                  </div>
                </div>
                <div
                  class="w-full text-left justify-start"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  <h2 class="title-font font-medium text-lg text-[#292662] underline-from-left">
                    Erode Runners Timed 10K Run
                  </h2>
                  <h3 class="text-gray-500 text-sm mt-2 mb-3">Erode</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
