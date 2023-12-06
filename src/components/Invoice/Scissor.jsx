import React from "react";
import { RiScissorsCutLine } from "react-icons/ri";

const Scissor = () => {
  return (
    <div class="flex gap-0">
      <div>
        <RiScissorsCutLine color="gray" />
      </div>
      <div class="border-t-2 border-dashed border-gray-300 w-full mx-2 mt-2 "></div>
    </div>
  );
};

export default Scissor;
