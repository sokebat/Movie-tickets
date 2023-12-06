import React, { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { useForm } from "react-hook-form";

const Order = () => {
  const countries = [
    "Nepal",
    "China",
    "India",
    "United States",
    "Indonesia",
    "Pakistan",
    "Brazil",
    "Nigeria",
    "Bangladesh",
    "Russia",
    "Mexico",
    "Japan",
    "Ethiopia",
    "Philippines",
    "Egypt",
    "Vietnam",
    "DR Congo",
    "Turkey",
    "Iran",
    "Germany",
    "Thailand",
    "United Kingdom",
  ];

  const { count, total } = useContext(MovieContext);
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState([]);

  const totalAfterTax = total + 130.0;

  const onSubmit = (data) => {
    setFormData(data);
  };

  const handleConfirmAndPay = () => {
    // Manually trigger form submission
    handleSubmit(onSubmit)();
  };

  return (
    <div className="flex justify-around items-center">
      <div className="bg-[#1C1C24] p-8 rounded shadow-md w-1/2 my-4 sm:mb-0 border-[#252D3C] border-2">
        <h2 className="text-2xl font-bold mb-4 text-white">Information</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-2 text-white"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              {...register("FirstName")}
              placeholder="eg. Jane Copper"
              className="w-full p-2 bg-[#1C1C24]  border-[#252D3C] border-2 rounded text-white"
              required
            />
          </div>

          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="mb-4 sm:mb-0">
              <label
                className="block text-sm font-semibold mb-2 text-white"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("E-mail")}
                placeholder="eg. janecopper@xyz.com"
                className="w-full p-2 bg-[#1C1C24] border-[#252D3C] border-2 rounded text-white"
                required
              />
            </div>

            <div className="mb-4 sm:mb-0">
              <label
                className="block text-sm font-semibold mb-2 text-white"
                htmlFor="address"
              >
                Address
              </label>
              <input
                {...register("Address")}
                placeholder="eg. 123 Main Street"
                className="w-full p-2 bg-[#1C1C24] border-[#252D3C] border-2 rounded text-white"
                required
              />
            </div>

            <div className="mb-4 sm:mb-0">
              <label
                className="block text-sm font-semibold mb-2 text-white"
                htmlFor="country"
              >
                Country
              </label>
              <select
                {...register("Country")}
                className="w-full p-2 bg-[#1C1C24] border-[#252D3C] border-2 rounded text-white"
                required
              >
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4 sm:mb-0">
              <label
                className="block text-sm font-semibold mb-2 text-white"
                htmlFor="state"
              >
                State
              </label>
              <input
                {...register("State")}
                placeholder="Your State"
                className="w-full p-2 bg-[#1C1C24] border-[#252D3C] border-2 rounded text-white"
                required
              />
            </div>

            <div className="mb-4 sm:mb-0">
              <label
                className="block text-sm font-semibold mb-2 text-white"
                htmlFor="city"
              >
                City
              </label>
              <input
                {...register("City")}
                placeholder="Your City"
                className="w-full p-2 bg-[#1C1C24] border-[#252D3C] border-2 rounded text-white"
                required
              />
            </div>

            <div className="mb-4 sm:mb-0">
              <label
                className="block text-sm font-semibold mb-2 text-white"
                htmlFor="zipCode"
              >
                Zip/Post Code
              </label>
              <input
                {...register("Post_Code")}
                placeholder="Your Zip/Post Code"
                className="w-full p-2 bg-[#1C1C24] border-[#252D3C] border-2 rounded text-white"
                required
              />
            </div>
          </div>
        </form>
        {formData}
      </div>

      <div className="bg-[#1C1C24] h-auto p-5 rounded border-[#252D3C] border-2 mb-0">
        <h2 className="text-2xl font-bold mb-4 text-white">Checkout Summary</h2>
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
          type="button"
          onClick={handleConfirmAndPay}
          className="bg-[#E14658] w-full rounded-lg text-lg text-white py-2 mb-0 mt-4"
        >
          Confirm & Pay
        </button>
      </div>
    </div>
  );
};

export default Order;
