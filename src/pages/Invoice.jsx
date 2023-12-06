import React from "react";
import Scissor from "../components/Invoice/Scissor";
import { FaRegPaperPlane } from "react-icons/fa";
import Card from "../components/Invoice/Card";

const Invoice = () => {
  return (
    <div className="container mx-auto bg-[#F7F8F9] rounded-lg p-5">
      <div className=" flex items-center gap-2 bg-[#E14658] rounded-lg p-4 ">
        <FaRegPaperPlane color="white" size={23} />
        <span className="text-white text-xl  hover:text-blue-200">
          TickTicketing
        </span>
      </div>
      <h1 className="text-2xl font-semibold mt-4">Invoice</h1>
      <div className="flex justify-between items-center text-gray-600">
        <div className="mt-8">
          <p className="text-xl font-semibold">Invoice to John Doe</p>
          <p className="my-2">Baliya Chowk, Itahari</p>
          <p>Sunsari, Nepal</p>
        </div>
        <div className=" ">
          <p className="text-gray-600 mb-2">Invoice ID: YCCURW-000000</p>
          <p className="text-gray-600">Order Date: 10/05/2022</p>
        </div>
      </div>

      <div class="container mx-auto p-8 mt-8">
        <table class=" w-full border  rounded-md">
          <thead>
            <tr>
              {" "}
              <th class="border py-2 text-center">#</th>
              <th class="border py-2 text-center">Event Details</th>
              <th class="border py-2 text-center">Event Type</th>
              <th class="border py-2 text-center">Ticket</th>
              <th class="border py-2 text-center">Unit Price</th>
              <th class="border py-2 text-center">Discount</th>
              <th class="border py-2 text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td class="border py-2 text-center">1</td>
              <td class="border py-2 text-center">title</td>
              <td class="border py-2 text-center">Concert</td>
              <td class="border py-2 text-center">x2</td>
              <td class="border py-2 text-center">$500.00</td>
              <td class="border py-2 text-center">$0.00</td>
              <td class="border py-2 text-center">$1130.00</td>
            </tr>
          </tbody>
        </table>

        <div class="mt-8 flex justify-end">
          <p class="mb-2">Invoice Total: USD $1130.00</p>
        </div>

        <Scissor />

        <Card />
      </div>
    </div>
  );
};

export default Invoice;
