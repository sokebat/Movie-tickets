import React from "react";

const Card = () => {
  return (
    <div class="max-w-sm rounded overflow-hidden  p-4  border-2 bg-white">
      <div class=" flex gap-3 ">
        <div class=" ">Image</div>
        <div class="font-bold   ">
          Antman and the Wasp: Quantumania
          <p class="text-gray-700 text-base">Sat, Apr 30, 2022 11:30 AM</p>
          <p class=" font-bold mb-2">Total: $500.00</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
