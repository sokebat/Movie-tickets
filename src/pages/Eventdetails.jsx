import React from "react";
import Card from "../components/Card";
import { IoCalendarSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { TbMinus } from "react-icons/tb";

const Eventdetails = () => {
  return (
    <>
      <div>
        <Card />
        <div>
          <div className="max-w-md mx-auto p-6 bg-[#1C1C24] rounded-lg shadow-md">
            <h2 className="text-2xl text-white font-semibold m-2">
              Event Details
            </h2>
            <hr className="border border-[#6d737d]" />

            {/* Date and Time */}
            <section className="flex items-center gap-3 m-2">
              <div className="bg-[#252D3C] rounded-full p-3">
                <IoCalendarSharp color="white" size={24} />
              </div>
              <div>
                <p className="text-white font-semibold">Date and Time</p>
                <p className="text-white font-semibold">
                  Sat, Apr 30, 2022 11:30 AM
                </p>
              </div>
            </section>

            <hr className="border border-[#6d737d]" />

            {/* Location*/}
            <section className="flex items-center gap-3 m-2">
              <div className="bg-[#252D3C] rounded-full p-3">
                <IoLocationSharp color="white" size={24} />
              </div>
              <div>
                <p className="text-white font-semibold">Location</p>
                <p className="text-white font-semibold">Kathmandu, Nepal</p>
              </div>
            </section>
            {/* View on Map */}
            <a href="#" className="text-red-500 hover:underline  ">
              View on Map
            </a>

            <hr className="border border-[#6d737d]" />

            {/* Select Tickets */}

            <div className="  text-white font-semibold">
              <h2 className="text-2xl text-white font-semibold mb-4">
                Select Tickets
              </h2>
              <div className=" flex justify-around ">
                <div className="">
                  <h2> 1x Ticket(s)</h2>
                  <label className="mr-2">USD $500.00</label>
                </div>

                {/* Plus--Minus--Buttons */}
                <div className="flex items-center gap-2">
                  <div className="text-white bg-[#292932]   rounded p-1">
                    <TbMinus />
                  </div>
                  <p className="text-white">6</p>
                  <div className="text-white bg-[#E14658] rounded p-1">
                    <GoPlus />
                  </div>
                </div>
              </div>
            </div>

            {/* Check Out */}
            <div className="flex items-center mt-5">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventdetails;
