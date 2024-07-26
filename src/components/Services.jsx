import React, { useState } from "react";
import Registration from "../assets/contact.jpg";
import RaceTime from "../assets/racetime.jpg";
import RaceDay from "../assets/raceday.jpg";
import Result from "../assets/result.jpg";
import "./Events.css";

const Services = () => {
  const [activeTab, setActiveTab] = useState("tabs-home01");

  const handleTabClick = (tabId, event) => {
    event.preventDefault();
    setActiveTab(tabId);
  };

  return (
    <div>
      <div class="flex flex-col lg:px-44 text-center  w-full mt-7 mb-10">
        <h1
          class="text-4xl font-mediumnt- title-font text-[#292662]"
          style={{ fontFamily: "Nunito Sans, sans-serif" }}
        >
          Novarace Services
        </h1>
      </div>
      <ul
        className="mb-5 mt-0 flex list-none flex-row flex-wrap border-b-0 ps-0 mx-10 md:mx-20 lg:mx-20 xl:mx-20"
        role="tablist"
        data-twe-nav-ref
      >
        <li role="presentation" className="flex-auto text-center">
          <a
            href="#tabs-home01"
            className={`rounded-lg py-6 tab-link capitalize text-[#292662] text-lg font-semibold ${
              activeTab === "tabs-home01" ? "active" : ""
            }`}
            onClick={(e) => handleTabClick("tabs-home01", e)}
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
            role="tab"
            aria-controls="tabs-home01"
            aria-selected={activeTab === "tabs-home01"}
          >
            Registration
          </a>
        </li>
        <li role="presentation" className="flex-auto text-center">
          <a
            href="#tabs-profile01"
            className={`rounded-lg py-6 tab-link capitalize text-[#292662] text-lg font-semibold ${
              activeTab === "tabs-profile01" ? "active" : ""
            }`}
            onClick={(e) => handleTabClick("tabs-profile01", e)}
            role="tab"
            aria-controls="tabs-profile01"
            aria-selected={activeTab === "tabs-profile01"}
          >
            Timing
          </a>
        </li>
        <li role="presentation" className="flex-auto text-center">
          <a
            href="#tabs-messages01"
            className={`rounded-lg py-6 tab-link capitalize text-[#292662] text-lg font-semibold ${
              activeTab === "tabs-messages01" ? "active" : ""
            }`}
            onClick={(e) => handleTabClick("tabs-messages01", e)}
            role="tab"
            aria-controls="tabs-messages01"
            aria-selected={activeTab === "tabs-messages01"}
          >
            Race Day Services
          </a>
        </li>
        <li role="presentation" className="flex-auto text-center">
          <a
            href="#tabs-contact01"
            className={`rounded-lg py-6 tab-link capitalize text-[#292662] text-lg font-semibold ${
              activeTab === "tabs-contact01" ? "active" : ""
            }`}
            onClick={(e) => handleTabClick("tabs-contact01", e)}
            role="tab"
            aria-controls="tabs-contact01"
            aria-selected={activeTab === "tabs-contact01"}
          >
            Results
          </a>
        </li>
      </ul>

      <div className="mb-6">
        <div
          className={`container mx-auto flex px-10 md:px-10 lg:px-20 xl:px-20 2xl:px-5 py-10 md:flex-row flex-col items-center${
            activeTab === "tabs-home01"
              ? "block opacity-100"
              : "hidden opacity-0"
          }`}
          id="tabs-home01"
          role="tabpanel"
          aria-labelledby="tabs-home-tab01"
        >
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p
              class="title-font lg:mt-4 xl:mt-20 lg:text-xl mb-4 font-medium text-[#292662]"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Registration
            </p>
            <h1
              class="title-font md:text-xl lg:text-3xl xl:text-3xl md:leading-relaxed lg:leading-normal xl:leading-relaxed mb-4 lg:-mr-20 xl:mr-0 font-medium text-[#292662]"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Registration Support with NovaRace: Streamlined Excellence
            </h1>
            <p
              class="mb-8 lg:text-sm md:text-sm md:leading-relaxed lg:leading-loose xl:text-md xl:leading-loose md:-mr-14 lg:-mr-20 xl:mr-0 text-[#292662]"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              At NovaRace, we understand that the journey to a successful race
              begins with seamless and efficient registration. Our simplify the
              process, ensuring a hassle-free experience for both organizers and
              participants.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-2/4 xl-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={Registration}
            />
          </div>
        </div>
        <div
          className={`container -mt-[37rem] md:-mt-[22rem] lg:-mt-[25rem] xl:-mt-[28rem] 2xl:-mt-[30rem] mx-auto flex px-10 md:px-10 lg:px-20 xl:px-20 2xl:px-5 py-10 md:flex-row flex-col items-center${
            activeTab === "tabs-profile01"
              ? "block opacity-100"
              : "hidden opacity-0"
          }`}
          id="tabs-profile01"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab01"
        >
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p
              class="title-font lg:mt-4 xl:mt-20 lg:text-xl mb-4 font-medium text-[#292662]"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Timing
            </p>
            <h1
              class="title-font md:text-xl lg:text-3xl xl:text-3xl md:leading-relaxed lg:leading-normal xl:leading-relaxed mb-4 lg:-mr-20 xl:mr-0 font-medium text-[#292662]"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Timing Solutions with NovaRace: Precision Redefined with RFID
              Technology
            </h1>
            <p
              class="mb-8 lg:text-sm md:text-sm md:leading-relaxed lg:leading-loose xl:text-md xl:leading-loose md:-mr-14 lg:-mr-20 xl:mr-0 text-[#292662]"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              At NovaRace, we recognize that accurate timing is the heartbeat of
              every race. Our Timing Solutions, powered by cutting-edge RFID
              (Radio-Frequency Identification) technology, represent the
              pinnacle of precision, ensuring that every participant's journey
              is captured with unmatched accuracy and efficiency.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-2/4 xl-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={RaceTime}
            />
          </div>
        </div>

        <div
          className={`container mx-auto -mt-[40rem] md:-mt-[27rem] lg:-mt-[32rem] 2xl:-mt-[28rem] flex px-10 md:px-10 lg:px-20 xl:px-20 2xl:px-5 py-10 md:flex-row flex-col items-center${
            activeTab === "tabs-messages01"
              ? "block opacity-100"
              : "hidden opacity-0"
          }`}
          id="tabs-messages01"
          role="tabpanel"
          aria-labelledby="tabs-messages-tab01"
        >
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p
              class="title-font lg:mt-4 xl:mt-20 lg:text-xl mb-4 font-medium text-[#292662]"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Race Day Services
            </p>
            <h1
              class="title-font md:text-xl lg:text-3xl xl:text-3xl md:leading-relaxed lg:leading-normal xl:leading-relaxed mb-4 lg:-mr-20 xl:mr-0 font-medium text-[#292662]"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Race day services are seamless and memorable experience for both
              participants and organizers
            </h1>
            <p
              class="mb-8 lg:text-sm md:text-sm md:leading-relaxed lg:leading-loose xl:text-md xl:leading-loose md:-mr-14 lg:-mr-20 xl:mr-0 text-[#292662]"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              With the comprehensive race day services, NovaRace aims to create
              exceptional race experiences, leaving a lasting impact on both
              participants and organizers.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-2/4 xl-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={RaceDay}
            />
          </div>
        </div>

        <div
          className={`container mx-auto 2xl:-mt-[30rem] xl:-mt-[33rem] lg:-mt-[30rem] md:-mt-[24rem] -mt-[41rem] flex px-10 md:px-10 lg:px-20 xl:px-20 2xl:px-5 py-10 md:flex-row flex-col items-center${
            activeTab === "tabs-contact01"
              ? "block opacity-100"
              : "hidden opacity-0"
          }`}
          id="tabs-contact01"
          role="tabpanel"
          aria-labelledby="tabs-contact-tab01"
        >
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p
              class="title-font lg:mt-4 xl:mt-20 lg:text-xl mb-4 font-medium text-[#292662]"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Results
            </p>
            <h1
              class="title-font md:text-xl lg:text-3xl xl:text-3xl md:leading-relaxed lg:leading-normal xl:leading-relaxed mb-4 lg:-mr-20 xl:mr-0 font-medium text-[#292662]"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Results and Advanced Data Analysis with NovaRace: Elevating the
              Post-Race Experience
            </h1>
            <p
              class="mb-8 lg:text-sm md:text-sm md:leading-relaxed lg:leading-loose xl:text-md xl:leading-loose md:-mr-14 lg:-mr-20 xl:mr-0 text-[#292662]"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-2/4 xl-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={Result}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
