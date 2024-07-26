import React from 'react'
import Image1 from "../assets/FB new.jpg";
import Image2 from "../assets/451840760.jpg";

import "./Events.css"; 

const UpcomingEvents = () => {
  return (
    <div>
      <div>
        <section class="text-gray-600 lg:px-12 body-font">
          <div class="container px-5 pt-6 mb-12 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1
                class="text-4xl font-mediumnt- title-font text-[#292662]"
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                Upcoming Events
              </h1>
            </div>
            <div class="flex flex-wrap lg:-mt-12 -m-4">
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <div className="overflow-hidden">
                    <div className="flex items-start">
                      <div className="relative overflow-hidden">
                        <span className="mt-4 absolute top-0 left-0 text-white text-xs font-medium me-2 px-7 py-2 rounded dark:bg-[#292662] z-10">
                          OPEN
                        </span>
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-md w-full h-56 object-cover object-center mb-4 transition ease-in-out duration-1000 hover:-translate-y-1 hover:scale-105 py-9"
                          src={Image1}
                        />
                      </div>
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

              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <div className="flex items-start">
                    <div className="relative overflow-hidden">
                      <span className="mt-4 absolute top-0 left-0 text-white text-xs font-medium me-2 px-7 py-2 rounded dark:bg-[#292662] z-10">
                        OPEN
                      </span>
                      <img
                        alt="team"
                        className="flex-shrink-0 rounded-md w-full h-56 object-cover object-center mb-4 transition ease-in-out duration-1000 hover:-translate-y-1 hover:scale-105 py-9"
                        src={Image2}
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
    </div>
  );
}

export default UpcomingEvents