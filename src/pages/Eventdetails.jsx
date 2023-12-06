import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { useNavigate, useParams } from "react-router-dom";
import { IoCalendarSharp, IoLocationSharp } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { TbMinus } from "react-icons/tb";
import { MovieContext } from "../context/MovieContext";

const Eventdetails = () => {
  const { movies, count, setCount, total, setTotal } = useContext(MovieContext);
  const { id } = useParams();
  const movie = movies[id];
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(count * 500.0);
  }, [count]);

  return (
    <div className=" container flex justify-evenly items-center ">
      <Card {...movie} />

      <div className=" w-4/12 h-auto p-6 bg-[#1C1C24] rounded-lg ">
        <h2 className="text-2xl text-white font-semibold m-2">Event Details</h2>
        <hr className="border border-[#6d737d]" />

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

        <section className="flex items-center gap-3 m-2">
          <div className="bg-[#252D3C] rounded-full p-3">
            <IoLocationSharp color="white" size={24} />
          </div>
          <div>
            <p className="text-white font-semibold">Location</p>
            <p className="text-white font-semibold">Kathmandu, Nepal</p>
          </div>
        </section>

        <a href="#" className="text-red-500 hover:underline  ">
          View on Map
        </a>

        <hr className="border border-[#252D3C]" />

        <div className="  text-white font-semibold">
          <h2 className="text-2xl text-white font-semibold mb-4">
            Select Tickets
          </h2>
          <div className=" flex justify-around ">
            <div className="">
              <h2> 1x Ticket(s)</h2>
              <label className="mr-2">USD $500.00</label>
            </div>

            <div className="flex items-center gap-2">
              <div
                className="text-white bg-[#292932]   rounded p-1"
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                <TbMinus />
              </div>
              <p className="text-white">{count}</p>
              <div
                className="text-white bg-[#E14658] rounded p-1"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <GoPlus />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center mt-5">
          <button
            className=" bg-[#E14658] w-full rounded-lg text-lg text-white py-2 "
            onClick={() => {
              navigate("/order");
            }}
          >
            Check out for USD ${total}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Eventdetails;
