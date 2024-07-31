import React, { useState } from "react";
import BannerImage from "../assets/pexels-runffwpu-2168292.jpg";
import { Link, useNavigate } from "react-router-dom";

const RaceResults = () => {
  const results = [
    {
      bib: 1177,
      name: "VIKAS CHANDRA YADAV",
      finishTime: "42:16",
      pace: "4:13",
      rank: 4,
    },
    {
      bib: 1206,
      name: "NARENDRA YADAV",
      finishTime: "42:17",
      pace: "4:13",
      rank: 5,
    },
    {
      bib: 1063,
      name: "UDIT GOUTHARIYA",
      finishTime: "42:31",
      pace: "4:15",
      rank: 6,
    },
    {
      bib: 1064,
      name: "MOHIT BISEN",
      finishTime: "42:51",
      pace: "4:17",
      rank: 7,
    },
    {
      bib: 1208,
      name: "AKSHAT NEWARE",
      finishTime: "43:39",
      pace: "4:21",
      rank: 8,
    },
    {
      bib: 1096,
      name: "P SELVAM",
      finishTime: "44:06",
      pace: "4:24",
      rank: 9,
    },
    {
      bib: 1205,
      name: "MAHENDRA SINGH VERMA",
      finishTime: "45:21",
      pace: "4:32",
      rank: 10,
    },
    {
      bib: 1140,
      name: "KAMAL JOSHI",
      finishTime: "46:22",
      pace: "4:38",
      rank: 11,
    },
    {
      bib: 1211,
      name: "Ashok Pandey",
      finishTime: "47:23",
      pace: "4:44",
      rank: 12,
    },
    {
      bib: 1104,
      name: "UJJWAL SARKAR",
      finishTime: "47:25",
      pace: "4:44",
      rank: 13,
    },
    {
      bib: 1022,
      name: "NAVIN JAISWAL",
      finishTime: "47:36",
      pace: "4:45",
      rank: 14,
    },
    {
      bib: 1102,
      name: "VINOD GOSWAMI",
      finishTime: "48:45",
      pace: "4:52",
      rank: 15,
    },
  ];

  return (
    <>
      {/* banner and sea  rch input start*/}
      <section className="text-gray-600 body-font">
        <div className="container py-0 w-full flex flex-wrap relative z-0">
          <div className="mx-auto relative w-full">
            <div className="flex flex-wrap sm:w-screen lg:w-screen py-32 px-10 relative mb-4">
              <img
                alt="banner"
                className="object-cover h-full object-center block absolute inset-0 z-0 w-screen"
                src={BannerImage}
              />
              <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
              <div className="text-center relative z-10 w-full">
                <p className="text-4xl font-bold text-neutral-200 title-font mb-2">
                  SALEM MARATHON
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pl-14 sm:pl-24 lg:pl-7 lg:pr-5 md:pl-6 md:h-24 h-52 pt-7 md:rounded-full rounded-md mx-auto z-20 sticky top-0 "
          style={{
            backgroundColor: "#292662",
            marginTop: "-68px",
            maxWidth: "87%",
          }}
        >
          <input
            type="text"
            placeholder="SALEM MARATHON"
            className="border w-64 sm:w-96 md:w-56 lg:w-2/5 sm:text-center md:text-left border-gray-300 h-10 p-2 pl-6 text-zinc-950 rounded-full focus:outline-none focus:border-transparent placeholder-grey md:text-xs lg:text-lg placeholder-text-center"
          />
          <input
            type="text"
            placeholder="ENTER YOUR BIB NUMBER"
            className="border border-gray-300 w-64 sm:w-96 lg:w-2/5 sm:text-center md:text-left md:w-60 h-10 p-2 pl-6 text-zinc-950 rounded-full focus:outline-none md:text-xs lg:text-lg focus:border-transparent placeholder-grey"
          />
          <button className="bg-blue-500 w-64 sm:w-96 text-white h-10 p-2 pt-1.5 md:w-32 lg:w-32 xl:w-48 text-lg rounded-full hover:bg-blue-600">
            Search Now
          </button>
        </div>
      </section>
      {/* banner and search input end*/}
      {/* dropdown Container start*/}
      <div className="flex flex-wrap md:flex-col lg:flex-row justify-center lg:my-12 md:ml-48 lg:ml-4 md:space-y-10 lg:space-y-0 lg:space-x-4">
        <div className="flex rounded-lg h-10 bg-white flex-col mt-10 md:mt-10 lg:mt-0">
          <div className="bg-white rounded-md lg:w-80 md:w-96 shadow-md p-2">
            <div className="flex justify-between h-10 pl-4 items-center">
              <span className="text-blue-900 text-lg font-semibold">
                Category
              </span>
              <select className="text-gray-700 font-medium">
                <option value="">Select Race Type</option>
                <option value="option2">5KM</option>
                <option value="option1">10KM</option>
                <option value="option2">21KM</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex rounded-lg h-10 bg-white flex-col mt-10 md:mt-10 lg:mt-0">
          <div className="flex-grow">
            <div className="bg-white rounded-md lg:w-72 md:w-96 w-64 shadow-md p-2">
              <div className="flex justify-between h-10 pl-4 items-center">
                <span className="text-blue-900 text-lg font-semibold">
                  Gender
                </span>
                <select className="text-gray-700 font-medium w-28">
                  <option value="">Select</option>
                  <option value="option1">Male</option>
                  <option value="option2">Female</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex rounded-lg h-10 bg-white flex-col mt-10 md:mt-10 lg:mt-0">
          <div className="flex items-center mb-3">
            <div className="bg-white rounded-md md:w-96 lg:w-72 w-64 shadow-md p-2">
              <div className="flex justify-between h-10 pl-4 items-center">
                <span className="text-blue-900 text-lg font-semibold">
                  AgeGroup
                </span>
                <select className="text-gray-700 font-medium w-28">
                  <option value="">Select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* dropdown Container end*/}
      {/* card Container start*/}
      <section className="text-gray-600 body-font">
        <div className="container w-96 md:w-4/5 lg:w-10/12 mt-16 md:mt-10 lg:mt-20 sm:ml-28 md:ml-14 xl:ml-44 2xl:ml-24 md:mr-52 pl-8 md:pl-0">
          <div className="flex flex-wrap md:flex-col lg:flex-row md:ml-20 -m-4">
            <div className="p-5 rounded-xl w-full md:w-11/12 lg:w-96">
              <Link
                to="/single_result"
                className="flex h-46 bg-white rounded-xl p-8 py-4 flex-col"
                style={{
                  boxShadow:
                    "0 4px 4px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.10)",
                }}
              >
                <div className="flex items-center mb-3">
                  <div
                    className="mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0"
                    style={{
                      backgroundColor: "#292662",
                      width: "70px",
                      height: "70px",
                    }}
                  >
                    <h2 className="text-white text-4xl font-bold">1</h2>
                  </div>
                  <div>
                    <h2
                      className="text-gray-900 text-2xl text-start title-font font-semibold block"
                      style={{
                        marginTop: "-5px",
                        fontFamily: "Nunito Sans, sans-serif",
                      }}
                    >
                      SIVANATHAM
                    </h2>
                    <p
                      className="leading-relaxed text-gray-950 text-base mt-0 text-left"
                      style={{ fontFamily: "Nunito Sans, sans-serif" }}
                    >
                      MALE | BIB - 10234
                    </p>
                  </div>
                </div>
                <div className="flex-grow text-left flex mt-3 md:px-6 lg:px-2 justify-between">
                  <div>
                    <p
                      className="leading-relaxed text-black font-semibold text-md"
                      style={{ fontFamily: "Nunito Sans, sans-serif" }}
                    >
                      Pace/KM
                    </p>
                    <a
                      className="mt-1 text-neutral-800 font-semibold inline-flex items-center leading-relaxed text-base"
                      style={{ fontFamily: "Nunito Sans, sans-serif" }}
                    >
                      3:40
                    </a>
                  </div>
                  <div>
                    <p
                      className="leading-relaxed text-black font-semibold text-md"
                      style={{ fontFamily: "Nunito Sans, sans-serif" }}
                    >
                      Finish Time
                    </p>
                    <a
                      className="mt-1 text-neutral-800 font-semibold inline-flex items-center leading-relaxed text-base"
                      style={{ fontFamily: "Nunito Sans, sans-serif" }}
                    >
                      36:50
                    </a>
                  </div>
                </div>
              </Link>
            </div>
            <Link
              to="/single_result"
              className="p-5 rounded-xl w-full md:w-11/12 lg:w-96"
            >
              <div
                className="flex h-46 bg-white rounded-xl p-8 py-4 flex-col"
                style={{
                  boxShadow:
                    "0 4px 4px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.10)",
                }}
              >
                <div className="flex items-center mb-3">
                  <div
                    className="mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0"
                    style={{
                      backgroundColor: "#292662",
                      width: "70px",
                      height: "70px",
                    }}
                  >
                    <h2 className="text-white text-4xl font-bold">2</h2>
                  </div>
                  <div>
                    <h2
                      className="text-gray-900 text-2xl text-start title-font font-semibold block"
                      style={{
                        marginTop: "-5px",
                        fontFamily: "Nunito Sans, sans-serif",
                      }}
                    >
                      B CHANDRA
                    </h2>
                    <p
                      className="leading-relaxed text-gray-950 text-base mt-0 text-left"
                      style={{ fontFamily: "Nunito Sans, sans-serif" }}
                    >
                      MALE | BIB - 10628
                    </p>
                  </div>
                </div>
                <div className="flex-grow text-left flex mt-3 md:px-6 lg:px-2 justify-between">
                  <div>
                    <p
                      className="leading-relaxed text-black font-semibold text-md"
                      style={{ fontFamily: "Nunito Sans, sans-serif" }}
                    >
                      Pace/KM
                    </p>
                    <a
                      className="mt-1 text-neutral-800 font-semibold inline-flex items-center leading-relaxed text-base"
                      style={{ fontFamily: "Nunito Sans, sans-serif" }}
                    >
                      3:55
                    </a>
                  </div>
                  <div>
                    <p
                      className="leading-relaxed text-black font-semibold text-md"
                      style={{ fontFamily: "Nunito Sans, sans-serif" }}
                    >
                      Finish Time
                    </p>
                    <a
                      className="mt-1 text-neutral-800 font-semibold inline-flex items-center leading-relaxed text-base"
                      style={{ fontFamily: "Nunito Sans, sans-serif" }}
                    >
                      38:50
                    </a>
                  </div>
                </div>
              </div>
            </Link>
            <div className="p-5 rounded-xl w-full md:w-11/12 lg:w-96 lg:ml-48 xl:ml-52 2xl:ml-0">
              <Link
                to="/single_result"
                className="flex h-46 bg-white rounded-xl p-8 py-4 flex-col"
                style={{
                  boxShadow:
                    "0 4px 4px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.10)",
                }}
              >
                <div className="flex items-center mb-3">
                  <div
                    className="mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0"
                    style={{
                      backgroundColor: "#292662",
                      width: "70px",
                      height: "70px",
                    }}
                  >
                    <h2 className="text-white text-4xl font-bold">3</h2>
                  </div>
                  <div>
                    <h2
                      className="text-gray-900 text-2xl text-start title-font font-semibold block"
                      style={{
                        marginTop: "-5px",
                        fontFamily: "Nunito Sans, sans-serif",
                      }}
                    >
                      K KUMAR
                    </h2>
                    <p
                      className="leading-relaxed text-gray-950 text-base mt-0 text-left"
                      style={{ fontFamily: "Nunito Sans, sans-serif" }}
                    >
                      MALE | BIB - 10234
                    </p>
                  </div>
                </div>
                <div className="flex-grow text-left flex mt-3 md:px-6 lg:px-2 justify-between">
                  <div>
                    <p
                      className="leading-relaxed text-black font-semibold text-md"
                      style={{ fontFamily: "Nunito Sans, sans-serif" }}
                    >
                      Pace/KM
                    </p>
                    <a
                      className="mt-1 text-neutral-800 font-semibold inline-flex items-center leading-relaxed text-base"
                      style={{ fontFamily: "Nunito Sans, sans-serif" }}
                    >
                      3:57
                    </a>
                  </div>
                  <div>
                    <p
                      className="leading-relaxed text-black font-semibold text-md"
                      style={{ fontFamily: "Nunito Sans, sans-serif" }}
                    >
                      Finish Time
                    </p>
                    <a
                      className="mt-1 text-neutral-800 font-semibold inline-flex items-center leading-relaxed text-base"
                      style={{ fontFamily: "Nunito Sans, sans-serif" }}
                    >
                      39:51
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* card Container end*/}
      {/* table Container start*/}
      <section className="text-gray-600 body-font md:mx-auto hidden sm:block md:block">
        <div className="container md:px-10 sm:mt-12 -mx-8 sm:mx-1 md:mx-auto">
          <div>
            <div
              className="mx-auto border w-44 border-gray-300 bg-white rounded-lg"
              style={{ width: "85%" }}
            >
              <table
                className="table-auto w-full text-left whitespace-no-wrap"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr className="hover:bg-[#292662] hover:text-white transition-colors duration-500">
                    <th
                      className="px-4 py-3 w-32 title-font tracking-wider text-center text-gray-900 rounded-tl rounded-bl divide-x border-b text-sm font-medium border-s-1-black border-gray-300 hover:text-white"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      BIB
                    </th>
                    <th
                      className="px-4 py-3 w-80 title-font tracking-wider text-center font-medium text-gray-900 text-sm border-gray-300 border-x border-b border-s-1 hover:text-white"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      Name
                    </th>
                    <th
                      className="px-4 py-3 w-52 title-font tracking-wider text-center font-medium text-gray-900 text-sm border-gray-300 border-x border-b border-s-1 hover:text-white"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      Finish Time
                    </th>
                    <th
                      className="px-4 py-3 w-52 title-font tracking-wider text-center font-medium text-gray-900 text-sm border-gray-300 border-x border-b border-s-1 hover:text-white"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      Pace/KM
                    </th>
                    <th
                      className="px-4 py-3 w-52 title-font tracking-wider text-center font-medium text-gray-900 text-sm rounded-tr rounded-br border-gray-300 border-x border-b border-s-1 hover:text-white"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      Rank
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result) => (
                    <tr
                      key={result.rank}
                      className="hover:bg-[#292662] hover:text-white transition-colors duration-500"
                    >
                      <td
                        className="px-4 py-3 text-sm text-center border-b border-gray-300"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                      >
                        {result.bib}
                      </td>
                      <td
                        className="px-4 py-3 text-sm text-center border-b border-gray-300"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                      >
                        {result.name}
                      </td>
                      <td
                        className="px-4 py-3 text-sm text-center border-b border-gray-300"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                      >
                        {result.finishTime}
                      </td>
                      <td
                        className="px-4 py-3 text-sm text-center border-b border-gray-300"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                      >
                        {result.finishTime}{" "}
                      </td>
                      <td
                        className="px-4 py-3 text-sm text-center border-b border-gray-300"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                      >
                        {result.rank}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* table Container end */}
      {/* table Container mobile responsive start */}
      <div class="relative overflow-x-auto block sm:hidden">
        <table class="w-full text-sm text-left mt-10 border rtl:text-right text-gray-500 border-gray-300">
          <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr className="hover:bg-[#292662] hover:text-white transition-colors duration-500">
              <th
                scope="col"
                class="px-6 py-3 divide-x border-b border-s-1-black border-gray-300 text-black"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                BIB
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-black border-gray-300 border-x border-b border-s-1 "
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Name
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-black border-gray-300 border-x border-b border-s-1 "
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Finish Time
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-black border-gray-300 border-x border-b border-s-1 "
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Price
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-black border-gray-300 border-x border-b border-s-1 "
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Rank
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr class="bg-white border-b dark:border-gray-700 hover:bg-[#292662] hover:text-white transition-colors duration-500">
                <td
                  scope="row"
                  class="px-6 py-4 text-sm text-gray-900 whitespace-nowrap dark:text-black border-b border-gray-300"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  {result.bib}
                </td>
                <td
                  class="px-6 py-4 text-xs text-black border-b border-gray-300"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  {" "}
                  {result.name}
                </td>
                <td
                  class="px-6 py-4 text-black border-b border-gray-300"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  {" "}
                  {result.finishTime}
                </td>
                <td
                  class="px-6 py-4 text-black  border-b border-gray-300"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  {" "}
                  {result.finishTime}{" "}
                </td>
                <td
                  class="px-6 py-4  border-b text-black border-gray-300"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  {" "}
                  {result.rank}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* table Container mobile responsive end */}
    </>
  );
};

export default RaceResults;
