import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Button = () => {
  return (
    <div className="flex justify-center">
      <button
        type="button"
        className="w-40 text-blue-700 pl-9 hover:text-white border hover:bg-[#3554d1] font-medium rounded-md text-medium px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white flex items-center justify-center"
      >
        View All{" "}
        <GoArrowUpRight className="ml-4" style={{ fontSize: "1.5em" }} />
      </button>
    </div>
  );
};

export default Button;
