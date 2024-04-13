import React, { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Information = () => {
  const countries = ["Nepal", "China", "India", "United States", "Indonesia"];
  const navigate = useNavigate();

  const { count, total, totalAfterTax, setFormData, setTotalAfterTax } =
    useContext(MovieContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  setTotalAfterTax(total + 130.0);

  const onSubmit = (data) => {
    setFormData(data);
    navigate("/invoice");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center pb-3 ">
      <div className="flex flex-wrap gap-y-5 gap-4 justify-around items-center mt-12 container px-5 mx-auto ">
        <div className="bg-[#1C1C24]   rounded shadow-md mx-auto p-2 sm:p-8  my-4 sm:mb-0 border-[#252D3C] border-2">
          <h2 className="text-2xl font-bold mb-4 text-white">Information</h2>

          <div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2 text-white"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                {...register("fullName", {
                  required: "This field is required",
                  maxLength: 20,
                })}
                placeholder="eg. Jane Copper"
                className={`w-full p-2 bg-[#1C1C24]  border-[#252D3C] border-2 rounded text-white ${
                  errors.fullName ? "border-red-500" : ""
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className=" flex flex-col gap-y-4 ">
              <div className=" flex justify-between gap-4 flex-wrap">
                <div className="mb-4 sm:mb-0  ">
                  <label
                    className="block text-sm font-semibold mb-2 text-white"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: "This field is required",
                      pattern: {
                        value:
                          /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="eg. janecopper@xyz.com"
                    className={`w-full p-2 bg-[#1C1C24] border-[#252D3C] border-2 rounded text-white ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="mb-4 sm:mb-0">
                  <label
                    className="block text-sm font-semibold mb-2 text-white"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    {...register("address", {
                      required: "This field is required",
                    })}
                    placeholder="eg. 123 Main Street"
                    className={`w-full p-2 bg-[#1C1C24] border-[#252D3C] border-2 rounded text-white ${
                      errors.address ? "border-red-500" : ""
                    }`}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.address.message}
                    </p>
                  )}
                </div>
              </div>

              <div className=" flex justify-between gap-4 flex-wrap">
                {" "}
                <div className="mb-4 sm:mb-0">
                  <label
                    className="block text-sm font-semibold mb-2 text-white"
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <select
                    {...register("country", {
                      required: "This field is required",
                    })}
                    className={`w-full p-2 bg-[#1C1C24] border-[#252D3C] border-2 rounded text-white ${
                      errors.country ? "border-red-500" : ""
                    }`}
                  >
                    <option value="" disabled>
                      Select Country
                    </option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  {errors.country && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.country.message}
                    </p>
                  )}
                </div>
                <div className="mb-4 sm:mb-0">
                  <label
                    className="block text-sm font-semibold mb-2 text-white"
                    htmlFor="state"
                  >
                    State
                  </label>
                  <input
                    {...register("state", {
                      required: "This field is required",
                    })}
                    placeholder="Your State"
                    className={`w-full p-2 bg-[#1C1C24] border-[#252D3C] border-2 rounded text-white ${
                      errors.state ? "border-red-500" : ""
                    }`}
                  />
                  {errors.state && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.state.message}
                    </p>
                  )}
                </div>
              </div>

              <div className=" flex justify-between gap-4 flex-wrap">
                <div className="mb-4 sm:mb-0">
                  <label
                    className="block text-sm font-semibold mb-2 text-white"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    {...register("city", {
                      required: "This field is required",
                    })}
                    placeholder="Your City"
                    className={`w-full p-2 bg-[#1C1C24] border-[#252D3C] border-2 rounded text-white ${
                      errors.city ? "border-red-500" : ""
                    }`}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.city.message}
                    </p>
                  )}
                </div>

                <div className="mb-4 sm:mb-0">
                  <label
                    className="block text-sm font-semibold mb-2 text-white"
                    htmlFor="zipCode"
                  >
                    Zip/Post Code
                  </label>
                  <input
                    {...register("postCode", {
                      required: "This field is required",
                    })}
                    placeholder="Your Zip/Post Code"
                    className={`w-full p-2 bg-[#1C1C24] border-[#252D3C] border-2 rounded text-white ${
                      errors.postCode ? "border-red-500" : ""
                    }`}
                  />
                  {errors.postCode && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.postCode.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* <button type="submit">Submit</button> */}
          </div>
        </div>

        <div className="bg-[#1C1C24] h-auto p-5 rounded border-[#252D3C] border-2 mb-0">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Checkout Summary
          </h2>
          <hr className="border border-[#252D3C]" />
          <div className="mb-4">
            <p className="text-lg font-semibold mt-2 text-white">
              Antman and the Wasp Quantumania
            </p>
            <section className=" flex gap-3">
              <p className="text-sm text-[#97ABC0]"> Concert</p>
              <p className="text-sm text-[#97ABC0]"> Kathmandu, Nepal</p>
            </section>
          </div>
          <hr className="border border-[#252D3C]" />
          <div className="my-4">
            <div className="flex justify-between items-center ">
              <p className="text-sm text-[#97ABC0]"> Normal</p>
              <p className="text-white"> X{count}</p>
              <p className="text-white">${total}</p>
            </div>
            <div className="flex justify-between items-center  ">
              <p className="text-[#97ABC0]">Tax (13%)</p>
              <p className="text-white">$130.00</p>
            </div>
            <div className="flex justify-between items-center text-white">
              <p className="text-[#97ABC0]">Sub Total</p>
              <p>${total}</p>
            </div>
            <div className="flex justify-between items-center ">
              <p className="text-[#97ABC0]">Discount (0%)</p>
              <p className="text-white">$0.00</p>
            </div>
          </div>
          <hr className="border border-[#252D3C]" />
          <div className="flex justify-between items-center font-bold text-xl my-3 ">
            <p className="text-[#97ABC0]">Total</p>
            <p className="text-white">
              <span className="text-[#97ABC0] text-sm mr-3">USD</span>$
              {totalAfterTax}
            </p>
          </div>

          <button
            type="submit"
            className="bg-[#E14658] w-full rounded-lg text-lg text-white py-2 mb-0 mt-4"
          >
            Confirm & Pay
          </button>
        </div>
      </div>
    </form>
  );
};

export default Information;
