import React from "react";
import BannerImage from "../assets/salem.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";

const EventLanding = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-0 py-12 pt-32 mx-auto flex flex-wrap items-center">
          <div className="2xl:w-[59rem] xl:w-[50rem] lg:w-[35rem] lg:pr-0 pr-0">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={BannerImage}
              />
            </div>
          </div>
          <div className="lg:w-96 md:w-[44em] bg-white border border-gray-400 rounded-lg p-8 flex flex-col ml-7 w-92">
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8976338574876!2d77.72550947590221!3d12.978398714727524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1103906e8b25%3A0x9f694071740256a1!2sNOVARACE%20-%20Your%20Race%20Timing%20Solution!5e0!3m2!1sen!2sin!4v1721946182449!5m2!1sen!2sin"
                width="100%"
                height="200"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <h2 className="text-gray-900 text-lg mt-6 text-left font-semibold title-font mb-5">
              Location & Date:
            </h2>
            <div className="flex items-center mt-0">
              <IoLocationOutline className="mr-2" />
              <span>Location Text</span>
            </div>
            <div className="flex items-center mt-2">
              <MdDateRange className="mr-2" />
              <span>July 11, 2024 - Tuesday</span>
            </div>
            <hr className="border-2 mt-5"></hr>
            <h2 className="text-gray-900 text-lg mt-6 text-left font-semibold title-font mb-5">
              Organiser Details:
            </h2>
            <div className="flex items-center mt-0">
              <FaRegEnvelope className="mr-2" />
              <span>info@gmail.com</span>
            </div>
            <div className="flex items-center mt-2">
              <CiPhone className="mr-2" />
              <span>8849499322</span>
            </div>
            <div className="flex items-center mt-2">
              <CiPhone className="mr-2" />
              <span>8849499322</span>
            </div>
            <hr className="border-2 mt-5"></hr>
            <h2 className="text-gray-900 text-lg mt-6 text-left font-semibold title-font mb-5">
              Registration Platform Support:
            </h2>
            <div className="flex items-center mt-0">
              <FaRegEnvelope className="mr-2" />
              <span>info@gmail.com</span>
            </div>
          </div>
          <div className="justify-center lg:ml-[48rem] xl:ml-[62rem] 2xl:ml-[72rem]  mt-8 lg:mt-4 ml-12 space-x-2">
            <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              class="mb-2 inline-block rounded-full bg-[#25d366] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <a href="">
                <span class="[&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </span>
              </a>
            </button>
            <a
              href="https://www.facebook.com/novaraceindia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                class="mb-2 inline-block rounded-full bg-[#0965fe] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                <span class="[&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>
              </button>
            </a>
            <a
              href="https://x.com/novaraceindia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                class="mb-2 inline-block rounded-full bg-[#000] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                <span class="[&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </span>
              </button>
            </a>
            <a
              href="https://www.linkedin.com/company/novarace/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                class="mb-2 inline-block rounded-full bg-[#0077b5] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                <span class="[&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </button>
            </a>
          </div>
        </div>
      </section>
      <hr className="border-2 mt-2"></hr>
      <h2 className="text-gray-900 text-lg mt-6 text-left font-semibold pl-12 md:pl-12 title-font mb-5">
        Choose your Categories:
      </h2>
      <section className="text-gray-600 body-font">
        <div className="container pl-7 ms:pl-0 px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-full p-4">
              <div className="bg-[#daedf3] p-6 border-t-8 border-[#0965fe] rounded-lg">
                <h2
                  className="text-lg text-gray-900 font-semibold title-font mb-3"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  1Km
                </h2>
                <h3
                  className="tracking-widest text-indigo-500 text-sm font-bold title-font"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  ₹100
                </h3>
                <p
                  className="leading-relaxed text-base"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Minimum Age :{" "}
                  <span
                    className="font-bold text-black text-md"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    12
                  </span>
                </p>
                <p
                  className="leading-relaxed text-base"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Maximum Age :{" "}
                  <span
                    className="font-bold text-black text-md mt-2"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    20
                  </span>
                </p>
                <p
                  className="leading-relaxed text-base mt-1"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Distance :{" "}
                  <span
                    className="font-bold text-black text-md"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    6 - hour
                  </span>
                </p>
                <button
                  type="button"
                  className="focus:outline-none 2xl:w-64 xl:w-48 lg:w-44 text-white bg-[#0965fe] mt-5 font-medium rounded-md text-sm px-5 py-2.5 mb-2"
                >
                  Register
                </button>
              </div>
            </div>
            <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-full p-4">
              <div className="bg-[#daedf3] p-6 border-t-8 border-[#0965fe] rounded-lg">
                <h2
                  className="text-lg text-gray-900 font-semibold title-font mb-3"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  1Km
                </h2>
                <h3
                  className="tracking-widest text-indigo-500 text-sm font-bold title-font"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  ₹100
                </h3>
                <p
                  className="leading-relaxed text-base"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Minimum Age :{" "}
                  <span
                    className="font-bold text-black text-md"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    12
                  </span>
                </p>
                <p
                  className="leading-relaxed text-base"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Maximum Age :{" "}
                  <span
                    className="font-bold text-black text-md mt-2"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    20
                  </span>
                </p>
                <p
                  className="leading-relaxed text-base mt-1"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Distance :{" "}
                  <span
                    className="font-bold text-black text-md"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    6 - hour
                  </span>
                </p>
                <button
                  type="button"
                  className="focus:outline-none 2xl:w-64 xl:w-48 lg:w-44 text-white bg-[#0965fe] mt-5 font-medium rounded-md text-sm px-5 py-2.5 mb-2"
                >
                  Register
                </button>
              </div>
            </div>
            <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-full p-4">
              <div className="bg-[#daedf3] p-6 border-t-8 border-[#0965fe] rounded-lg">
                <h2
                  className="text-lg text-gray-900 font-semibold title-font mb-3"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  1Km
                </h2>
                <h3
                  className="tracking-widest text-indigo-500 text-sm font-bold title-font"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  ₹100
                </h3>
                <p
                  className="leading-relaxed text-base"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Minimum Age :{" "}
                  <span
                    className="font-bold text-black text-md"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    12
                  </span>
                </p>
                <p
                  className="leading-relaxed text-base"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Maximum Age :{" "}
                  <span
                    className="font-bold text-black text-md mt-2"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    20
                  </span>
                </p>
                <p
                  className="leading-relaxed text-base mt-1"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Distance :{" "}
                  <span
                    className="font-bold text-black text-md"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    6 - hour
                  </span>
                </p>
                <button
                  type="button"
                  className="focus:outline-none 2xl:w-64 xl:w-48 lg:w-44 text-white bg-[#0965fe] mt-5 font-medium rounded-md text-sm px-5 py-2.5 mb-2"
                >
                  Register
                </button>
              </div>
            </div>
            <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-full p-4">
              <div className="bg-[#daedf3] p-6 border-t-8 border-[#0965fe] rounded-lg">
                <h2
                  className="text-lg text-gray-900 font-semibold title-font mb-3"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  1Km
                </h2>
                <h3
                  className="tracking-widest text-indigo-500 text-sm font-bold title-font"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  ₹100
                </h3>
                <p
                  className="leading-relaxed text-base"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Minimum Age :{" "}
                  <span
                    className="font-bold text-black text-md"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    12
                  </span>
                </p>
                <p
                  className="leading-relaxed text-base"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Maximum Age :{" "}
                  <span
                    className="font-bold text-black text-md mt-2"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    20
                  </span>
                </p>
                <p
                  className="leading-relaxed text-base mt-1"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Distance :{" "}
                  <span
                    className="font-bold text-black text-md"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    6 - hour
                  </span>
                </p>
                <button
                  type="button"
                  className="focus:outline-none 2xl:w-64 xl:w-48 lg:w-44 text-white bg-[#0965fe] mt-5 font-medium rounded-md text-sm px-5 py-2.5 mb-2"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default EventLanding;
