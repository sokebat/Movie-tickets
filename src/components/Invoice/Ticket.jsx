import React, { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import { IoTicketSharp } from "react-icons/io5";

const Ticket = () => {
  const { count, tickets } = useContext(MovieContext);

  return (
    <div className="max-w-sm rounded overflow-hidden p-4 border-2 bg-white">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <div className="relative w-16 h-24">
          <img
            className="object-cover w-full h-full rounded"
            src={tickets.Poster}
            alt={tickets.Title}
          />
        </div>
        <div className="flex flex-col justify-between ">
          <div>
            <h2 className="text-xl mb-2">{tickets.Title}</h2>
            <p className="text-gray-700 text-base">{tickets.Year}</p>
            <p className="flex items-center             gap-2">
              <IoTicketSharp color="red" size={20} />
              X1
            </p>
            <p className="font-bold text-lg">Total: $500.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
