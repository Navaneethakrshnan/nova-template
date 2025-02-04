import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="text-gray-600 2xl:w-[95.8rem] 2xl:-ml-24 bg-[#292662] body-font">
        <div class="container px-10 md:pl-64 lg:px-10 py-8 mx-auto">
          <div class="flex flex-wrap text-start md:text-center -mb-10 -mx-4 md:space-x-2 lg:space-x-10 xl:space-x-10 2xl:space-x-14">
            <div class="lg:w-1/6 md:w-1/2  w-full px-4">
              <h2
                class="title-font font-medium text-white tracking-widest text-sm mb-3"
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                Reach Us At:
              </h2>
              <nav
                class="list-none mb-10"
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                <li>
                  <a
                    class="text-white"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    First Link
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2
                class="title-font font-medium text-white tracking-widest text-sm mb-3"
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                About Us
              </h2>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2
                class="title-font font-medium text-white tracking-widest text-sm mb-3"
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                Privacy Policy
              </h2>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2
                class="title-font font-medium text-white tracking-widest text-sm mb-3"
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                Refund and Cancellation
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a
                    class="text-white"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    Policy
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2
                class="title-font font-medium text-white tracking-widest text-sm mb-3"
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                Terms and Conditions
              </h2>
            </div>
          </div>
        </div>
        <hr></hr>
        <div class="container px-10 py-6 mx-auto flex items-start md:items-center sm:flex-row flex-col">
          <p
            class="text-sm text-white text-start m:mt-0 mt-4"
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
          >
            © 2024 NovaRace Management Solutions LLP. All Rights Reserved
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 2xl:pr-12 justify-center sm:justify-start">
            <a
              href="https://www.facebook.com/novaraceindia/"
              class="text-white"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="https://x.com/novaraceindia/" class="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/novaracetimingservices?igsh=OXBwcTBncHVxd3Bn&utm_source=qr"
              class="ml-3 text-white"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              a
              href="https://www.linkedin.com/company/novarace/"
              class="ml-3 text-white"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
