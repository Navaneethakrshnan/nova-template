import React from "react";
import Image1 from "../assets/1.svg";
import Image2 from "../assets/2.svg";
import Image3 from "../assets/3.svg";

const WhyChooseUs = () => {
  return (
    <div>
      <section class="text-gray-600 2xl:-ml-28 xl:-ml-0 lg:-ml-0 bg-[#e5f0fd] 2xl:w-[97rem] xl:w-screen lg:w-screen body-font">
        <div class="container px-30 md:px-20 lg:px-20 xl:px-5 py-12 mx-auto">
          <div class="flex flex-wrap pl-0 lg:-ml-8 xl:mx-44 2xl-ml-56">
            <div class="flex flex-col text-center w-full mb-3">
              <h1
                class="text-4xl font-mediumnt- title-font text-[#292662]"
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                Why Chose Us
              </h1>
            </div>
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-20 h-20 object-cover object-center inline-block sm:mb-0 mb-4"
                  src={Image1}
                ></img>

                <h2
                  class="text-[#292662] font-medium title-font tracking-wider text-lg mt-10"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Unmatched Timing Precision
                </h2>
                <p
                  class="leading-loose mt-4 text-zinc-600  text-xs xl:text-sm"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  NovaRace excels in precision timing solutions. Our
                  cutting-edge technology and skilled team ensure accuracy
                  beyond expectations, setting a new standard in the industry.
                </p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-20 h-20 object-cover object-center inline-block sm:mb-0 mb-4"
                  src={Image2}
                ></img>

                <h2
                  class="text-[#292662] font-medium title-font tracking-wider text-lg mt-10"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Elevate Your Event
                </h2>
                <p
                  class="leading-loose mt-4 text-zinc-600  text-xs xl:text-sm"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  NovaRace is your partner in crafting unforgettable event
                  experiences. From conceptualization to execution, we enhance
                  races, turning them into extraordinary moments that linger in
                  the memory.
                </p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 p-4">
              <div class="h-full text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-20 h-20 object-cover object-center inline-block sm:mb-0 mb-4"
                  src={Image3}
                ></img>{" "}
                <h2
                  class="text-[#292662] font-medium title-font tracking-wider text-lg mt-10"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Effortless Start to Finish
                </h2>
                <p
                  class="leading-loose mt-4 text-zinc-600 text-xs xl:text-sm"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  NovaRace streamlines the race lifecycle. Easy participant
                  registration, efficient bib distribution, and precise timing
                  seamlessly lead to prompt and accurate results publication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
