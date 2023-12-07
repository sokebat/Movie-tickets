import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden  p-4  border-2 bg-white">
      <div className=" flex gap-3 ">
        <div className=" ">Image</div>
        <div className="font-bold   ">
          Antman and the Wasp: Quantumania
          <p className="text-gray-700 text-base">Sat, Apr 30, 2022 11:30 AM</p>
          <p className=" font-bold mb-2">Total: $500.00</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
