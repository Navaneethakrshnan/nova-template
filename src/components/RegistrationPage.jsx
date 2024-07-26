import React, { useState } from "react";

const RegistrationPage = () => {
  const IndianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    pincode: "",
    email: "",
    mobilenumber: "",
    emergencycontactname: "",
    emergencycontactnumber: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
    } else if (/\d/.test(formData.firstName)) {
      newErrors.firstName = "First Name should not contain numbers";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
    } else if (/\d/.test(formData.lastName)) {
      newErrors.lastName = "Last Name should not contain numbers";
    }

    if (!formData.pincode) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d+$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode should contain only numbers";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not in the correct format";
    }

    if (!formData.mobilenumber) {
      newErrors.mobilenumber = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(formData.mobilenumber)) {
      newErrors.mobilenumber = "Mobile Number should be a 10-digit number";
    }

    if (!formData.emergencycontactname) {
      newErrors.emergencycontactname = "Emergency Contact Name is required";
    } else if (/\d/.test(formData.emergencycontactname)) {
      newErrors.emergencycontactname =
        "Emergency Contact Name should not contain numbers";
    }

    if (!formData.emergencycontactnumber) {
      newErrors.emergencycontactnumber = "Emergency Contact Number is required";
    } else if (!/^\d{10}$/.test(formData.emergencycontactnumber)) {
      newErrors.emergencycontactnumber =
        "Emergency Contact Number should be a 10-digit number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className="text-gray-600 mt-5 body-font overflow-hidden">
          <div className="container px-10 lg:py-24 md:py-12 sm:py-10 py-10 2xl:mx-auto">
            <div className="flex flex-wrap -m-12 lg:items-start justify-center">
              <div className="p-8 2xl:w-1/2 xl:w-[37rem] lg:w-[30rem] md:w-[40rem] sm:w-[32rem] w-[25rem]  flex flex-col items-start">
                <div>
                  <h5 className="text-xl font-medium mb-1 text-black">
                    Please Enter Runner Details:
                  </h5>
                </div>
                <div className="pb-10 mb-4 pl-8 sm:pl-12 border pt-7 border-grey-300 mt-auto w-full">
                  <h2 className="text-lg font-medium -ml-3 justify-start text-left text-gray-700 mb-4">
                    SELECT YOUR CATEGORY
                  </h2>
                  <div className="flex items-center space-x-4">
                    <label
                      htmlFor="category"
                      className="2xl:w-52 xl:w-44 lg:w-28 md:w-52 sm:w-32 w-20   text-base justify-start text-start"
                    >
                      Categories<span className="text-red-500">*</span>
                    </label>
                    <select className="block px-5 py-2 2xl:w-80 xl:w-64 lg:w-52 md:w-64 sm:w-56 w-44 border border-gray-300 h-12 bg-white rounded-md shadow-sm focus:outline-none focus:ring-grey-500 sm:text-sm">
                      <option className="px-5" value="" disabled selected>
                        Select
                      </option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                </div>
                <div className="pb-10 mb-4 pl-8 sm:pl-12 border pt-7 border-[#e2e5e9] mt-auto w-full">
                  <h2 className="text-lg font-medium -ml-3 justify-start text-left text-gray-700 mb-4">
                    PERSONAL DATA
                  </h2>
                  <div className="flex items-center space-x-4">
                    <label
                      htmlFor="firstName"
                      className="2xl:w-52 xl:w-44 lg:w-28 md:w-52 sm:w-32 w-20 text-base justify-start text-start"
                    >
                      FirstName<span className="text-red-500">*</span>
                    </label>
                    <div className="bg-gray-100 inline-flex rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="block px-3 py-2  2xl:w-80 xl:w-64 lg:w-52 md:w-64 sm:w-56 w-44 border border-gray-300 h-12 bg-white rounded-md shadow-sm focus:outline-none focus:ring-grey-500 sm:text-sm"
                      ></input>
                    </div>
                    {errors.firstName && (
                      <div className="text-red-500 text-xs">
                        {errors.firstName}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center mt-2 space-x-4">
                    <label
                      htmlFor="lastName"
                      className="2xl:w-52 xl:w-44 lg:w-28 md:w-52 sm:w-32 w-20 text-base justify-start text-start"
                    >
                      LastName<span className="text-red-500">*</span>
                    </label>
                    <div className="bg-gray-100 inline-flex rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="block px-3 py-2 2xl:w-80 xl:w-64 lg:w-52 md:w-64 sm:w-56 w-44    border border-gray-300 h-12 bg-white rounded-md shadow-sm focus:outline-none focus:ring-grey-500 sm:text-sm"
                      ></input>
                    </div>
                    {errors.lastName && (
                      <p className="text-red-500 text-xs">{errors.lastName}</p>
                    )}
                  </div>
                  <div className="flex items-center mt-2 space-x-4">
                    <label
                      htmlFor="dob"
                      className="2xl:w-52 xl:w-44 lg:w-28 md:w-52 sm:w-32 w-20   text-base justify-start text-start"
                    >
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <div className="bg-gray-100 inline-flex rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                      <input
                        className="block px-3 py-2 2xl:w-80 xl:w-64 lg:w-52 sm:w-56 md:w-64 w-44 border border-gray-300 h-12 bg-white rounded-md shadow-sm focus:outline-none focus:ring-grey-500 sm:text-sm"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        format="DD/MM/YYYY"
                        type="date"
                        placeholder="Select your date of birth"
                      ></input>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 space-x-4">
                    <label
                      htmlFor="gender"
                      className="2xl:w-52 xl:w-44 lg:w-28 md:w-52 sm:w-32 w-20   text-base justify-start text-start"
                    >
                      Gender<span className="text-red-500">*</span>
                    </label>
                    <div className="bg-gray-100 inline-flex rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                      <select
                        className="block px-5 py-2 2xl:w-80 xl:w-64 lg:w-52  sm:w-56 md:w-64 w-44 border border-gray-300 h-12 bg-white rounded-md shadow-sm focus:outline-none focus:ring-grey-500 sm:text-sm"
                        name="gender"
                        id="gender"
                      >
                        <option className="px-5" value="" disabled selected>
                          Select
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center mt-2 space-x-4">
                    <label
                      htmlFor="bloodGroup"
                      className="2xl:w-52 xl:w-44lg:w-28 lg:w-28 md:w-52 sm:w-32 w-20 text-base justify-start text-start"
                    >
                      Blood Group <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="block px-5 py-2 2xl:w-80 xl:w-64 lg:w-52 md:w-64 sm:w-56 w-44 border border-gray-300 h-12 bg-white rounded-md shadow-sm focus:outline-none focus:ring-grey-500 sm:text-sm"
                      id="bloodgroup"
                      name="bloodgroup"
                    >
                      <option className="" value="" disabled selected>
                        Select
                      </option>
                      <option value="A+">A+</option>
                      <option value="B+">B+</option>
                      <option value="AB+">AB+</option>
                      <option value="O+">O+</option>
                      <option value="A-">A-</option>
                      <option value="B-">B-</option>
                      <option value="AB-">AB-</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                  <div className="flex items-center mt-2 space-x-4">
                    <label
                      htmlFor="bibName"
                      className="2xl:w-52 xl:w-44 lg:w-28 md:w-52 sm:w-32 w-20   text-base justify-start text-start"
                    >
                      Name On the bib <span className="text-red-500">*</span>
                    </label>
                    <div className="bg-gray-100 inline-flex rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                      <input
                        type="text"
                        id="bibName"
                        name="bibName"
                        className="block px-3 py-2 2xl:w-80 xl:w-64 md:w-64 sm:w-56 lg:w-52 w-44 border border-gray-300 h-12 bg-white rounded-md shadow-sm focus:outline-none focus:ring-grey-500 sm:text-sm"
                      ></input>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 space-x-4">
                    <label
                      htmlFor="tShirtSize"
                      className="2xl:w-52 xl:w-44 lg:w-28 md:w-52 sm:w-32 w-20   text-base justify-start text-start"
                    >
                      T Shirt size <span className="text-red-500">*</span>
                    </label>
                    <select className="block px-5 py-2 2xl:w-80 xl:w-64 lg:w-52 md:w-64 sm:w-56 w-44 pr-6 border border-gray-300 h-12 bg-white rounded-md shadow-sm focus:outline-none focus:ring-grey-500 sm:text-sm">
                      <option
                        className="text-blue-900 text-lg font-semibold"
                        value=""
                        disabled
                        selected
                      >
                        Select
                      </option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                      <option value="3XL">3XL</option>
                      <option value="2-4 Yrs 24 inches">
                        2-4 Yrs 24 inches
                      </option>
                      <option value="4-5 Yrs 26 inches">
                        4-5 Yrs 26 inches
                      </option>
                      <option value="5-7 Yrs 28 inches">
                        5-7 Yrs 28 inches
                      </option>
                      <option value="7-8 Yrs 30 inches">
                        7-8 Yrs 30 inches
                      </option>
                      <option value="8-10 Yrs 32 inches">
                        8-10 Yrs 32 inches
                      </option>
                    </select>
                  </div>
                  <div className="flex items-center mt-2 space-x-4">
                    <label
                      htmlFor="medicalIssues"
                      className="2xl:w-52 xl:w-44 lg:w-28 md:w-52 sm:w-32 w-20   text-base justify-start text-start"
                    >
                      Medical Issues
                    </label>
                    <div className="bg-gray-100 inline-flex rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                      <input
                        type="text"
                        id="medicalIssues"
                        name="medicalIssues"
                        className="block px-3 py-2 2xl:w-80 xl:w-64 lg:w-52 md:w-64 sm:w-56 w-44    border border-gray-300 h-12 bg-white rounded-md shadow-sm focus:outline-none focus:ring-grey-500 sm:text-sm"
                      ></input>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 space-x-4">
                    <label
                      htmlFor="address"
                      className="2xl:w-52 xl:w-44 lg:w-28 md:w-52 sm:w-32 w-20   text-base justify-start text-start"
                    >
                      Address <span className="text-red-500">*</span>
                    </label>
                    <div className="bg-gray-100 inline-flex rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                      <textarea
                        type="text"
                        id="medicalIssues"
                        name="medicalIssues"
                        className="block px-3 py-2 2xl:w-80 xl:w-64 lg:w-52 md:w-64 sm:w-56 w-44    border border-gray-300 h-12 bg-white rounded-md shadow-sm focus:outline-none focus:ring-grey-500 sm:text-sm"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 space-x-4">
                    <label
                      htmlFor="tShirtSize"
                      className="2xl:w-52 xl:w-44 lg:w-28 md:w-52 sm:w-32 w-20 text-base justify-start text-start"
                    >
                      State <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="block px-5 py-2 2xl:w-80 xl:w-64 lg:w-52 md:w-64 sm:w-56 w-44 pr-6 border border-gray-300 h-12 bg-white rounded-md shadow-sm focus:outline-none focus:ring-grey-500 sm:text-sm"
                      id="state"
                      name="state"
                    >
                      <option
                        className="text-blue-900 text-lg font-semibold"
                        value=""
                        disabled
                        selected
                      >
                        Select
                      </option>
                      {IndianStates.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center mt-2 space-x-4">
                    <label
                      htmlFor="pincode"
                      className="2xl:w-52 xl:w-44 lg:w-28 md:w-52 sm:w-32 w-20   text-base justify-start text-start"
                    >
                      Pincode <span className="text-red-500">*</span>
                    </label>
                    <div className="bg-gray-100 inline-flex rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                      <textarea
                        type="text"
                        id="pincode"
                        name="pincode"
                        className="block px-3 py-2 2xl:w-80 xl:w-64 lg:w-52 sm:w-56 md:w-64 border border-gray-300 h-12 bg-white rounded-md shadow-sm focus:outline-none focus:ring-grey-500 sm:text-sm"
                      ></textarea>
                    </div>
                    {errors.pincode && (
                      <p className="text-red-500 text-xs">{errors.pincode}</p>
                    )}
                  </div>
                </div>
                <div className="mt-4 hidden lg:block">
                  <label
                    htmlFor="lastName"
                    className="w-52 text-base justify-start text-start"
                  >
                    Indicates mandatory fields{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div class="flex mt-4 items-center mb-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-checkbox"
                      class="ms-2 text-sm font-sm text-gray-400"
                    >
                      I have read and agree to the terms and conditions
                    </label>
                  </div>
                  <button
                    type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Register
                  </button>
                </div>
              </div>
              <div className="p-8 2xl:w-1/2 xl:w-[37rem] lg:w-[30rem] md:w-[40rem] sm:w-[32rem] flex flex-col items-start 2xl:mx-auto ">
                <div className="pb-10 mb-4 pl-8 sm:pl-12 border pt-7 border-grey-300 mt-6 w-full">
                  <h2 className="text-lg font-medium -ml-3 justify-start text-left text-gray-700 mb-4">
                    CONTACT
                  </h2>
                  <p className="text-md pr-10 font-sm -ml-3 justify-start text-left text-gray-700 mb-4">
                    Email and Phone number on which you will receive the
                    communication regarding the race
                  </p>
                  <div className="flex items-center space-x-4">
                    <label
                      htmlFor="category"
                      className="2xl:w-52 xl:w-44 lg:w-28 md:w-52 sm:w-32 w-20   text-base justify-start text-start"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="bg-gray-100 inline-flex rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="block px-3 py-2 2xl:w-80 xl:w-64 lg:w-52 md:w-64 sm:w-56 w-48 border border-gray-300 h-12 bg-white rounded-md shadow-sm focus:outline-none focus:ring-grey-500  sm:text-sm"
                      ></input>
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-xs">{errors.email}</p>
                    )}
                  </div>
                  <div className="flex items-center mt-2 space-x-4">
                    <label
                      htmlFor="mobilenumber"
                      className="2xl:w-52 xl:w-44 lg:w-28 md:w-52 sm:w-32 w-20   text-base justify-start text-start"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="bg-gray-100 inline-flex rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                      <input
                        type="text"
                        id="mobilenumber"
                        name="mobilenumber"
                        className="block px-3 py-2 2xl:w-80 xl:w-64 lg:w-52 md:w-64 sm:w-56 w-48 border border-gray-300 h-12 bg-white rounded-md shadow-sm focus:outline-none focus:ring-grey-500  sm:text-sm"
                      ></input>
                    </div>
                    {errors.mobilenumber && (
                      <p className="text-red-500 text-xs">
                        {errors.mobilenumber}
                      </p>
                    )}
                  </div>
                  <h2 className="text-lg font-medium mt-3 -ml-3 justify-start text-left text-gray-700 mb-4">
                    EMERGENCY CONTACT
                  </h2>
                  <div className="flex items-center mt-2 space-x-4">
                    <label
                      htmlFor="emergencycontactname"
                      className="2xl:w-52 xl:w-44 lg:w-28 md:w-52 sm:w-32 w-20   text-base justify-start text-start"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <div className="bg-gray-100 inline-flex rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                      <input
                        type="text"
                        id="emergencycontactname"
                        name="contactName"
                        className="block px-3 py-2 2xl:w-80 xl:w-64 lg:w-52 md:w-64 sm:w-56 w-48 border border-gray-300 h-12 bg-white rounded-md shadow-sm focus:outline-none focus:ring-grey-500  sm:text-sm"
                      ></input>
                    </div>
                    {errors.emergencycontactname && (
                      <p className="text-red-500 text-xs">
                        {errors.emergencycontactname}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center mt-2 space-x-4">
                    <label
                      htmlFor="emergencycontactnumber"
                      className="2xl:w-52 xl:w-44 lg:w-28 md:w-52 sm:w-32 w-20   text-base justify-start text-start"
                    >
                      Number <span className="text-red-500">*</span>
                    </label>
                    <div className="bg-gray-100 inline-flex rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                      <input
                        type="text"
                        id="emergencycontactnumber"
                        name="contactNumber"
                        className="block px-3 py-2 2xl:w-80 xl:w-64 lg:w-52 md:w-64 sm:w-56 w-48 border border-gray-300 h-12 bg-white rounded-md shadow-sm focus:outline-none focus:ring-grey-500  sm:text-sm"
                      ></input>
                    </div>

                    {errors.emergencycontactnumber && (
                      <p className="text-red-500 text-xs">
                        {errors.emergencycontactnumber}
                      </p>
                    )}
                  </div>
                  <h2 className="text-lg font-medium mt-3 -ml-3 justify-start text-left text-gray-700 mb-4">
                    Enter Coupon code if exists
                  </h2>
                  <div className="flex items-center mt-2 space-x-4">
                    <label
                      htmlFor="couponCode"
                      className="2xl:w-52 xl:w-44 lg:w-28 md:w-52 sm:w-32 w-20   text-base justify-start text-start"
                    >
                      Code
                    </label>
                    <div className="bg-gray-100 inline-flex rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                      <input
                        type="text"
                        id="couponCode"
                        name="couponCode"
                        className="block px-3 py-2 2xl:w-80 xl:w-64 lg:w-52 md:w-64 sm:w-56 w-48 border border-gray-300 h-12 bg-white rounded-md shadow-sm focus:outline-none focus:ring-grey-500  sm:text-sm"
                      ></input>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 space-x-4">
                    <label
                      htmlFor="runnerClub"
                      className="2xl:w-52 xl:w-44 lg:w-28 md:w-52 sm:w-32 w-20   text-base justify-start text-start"
                    >
                      Runner Club
                    </label>
                    <div className="bg-gray-100 inline-flex rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                      <select
                        id="runnerClub"
                        name="runnerClub"
                        className="block px-5 py-2 2xl:w-80 xl:w-64 lg:w-52 md:w-64 sm:w-56 w-48 border border-gray-300 h-12 bg-white rounded-md shadow-sm focus:outline-none focus:ring-grey-500 sm:text-sm"
                      >
                        <option className="px-5" value="" disabled selected>
                          Select
                        </option>
                        <option value="option1">Option 1</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-10 block lg:hidden ">
                    <label
                      htmlFor="lastName"
                      className="w-52 text-base justify-start text-start"
                    >
                      Indicates mandatory fields{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div class="flex mt-4 items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 justify-center text-center"
                      />
                      <label
                        for="default-checkbox"
                        class="ms-2 text-sm font-sm text-gray-400"
                      >
                        I have read and agree to the terms and conditions
                      </label>
                    </div>
                    <button
                      type="submit"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default RegistrationPage;
