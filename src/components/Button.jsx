import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Button = () => {
  return (
    <div className="flex justify-center">
      <button
        type="button"
        className="w-40 text-blue-700 pl-9 hover:text-white border border-blue-700 hover:bg-[#3554d1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-medium px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 flex items-center justify-center"
      >
        View All{" "}
        <GoArrowUpRight className="ml-4" style={{ fontSize: "1.5em" }} />
      </button>
    </div>
  );
};

export default Button;
