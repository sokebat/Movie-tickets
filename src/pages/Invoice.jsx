import React, { useContext, useRef } from "react";
import Scissor from "../components/Invoice/Scissor";
import { FaRegPaperPlane } from "react-icons/fa";
import Ticket from "../components/Invoice/Ticket";
import { MovieContext } from "../context/MovieContext";
import { useReactToPrint } from "react-to-print";

const Invoice = () => {
  const { count, formData, totalAfterTax, tickets } = useContext(MovieContext);

  const { fullName, address, country, state, city } = formData;

  const pdfRef = useRef();

  const renderTickets = () => {
    const tickets = [];
    for (let i = 0; i < count; i++) {
      tickets.push(
        <div key={i}>
          <Scissor />
          <Ticket />
        </div>
      );
    }
    return tickets;
  };

  const generatePDF = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: "Movie-Tickets",
    onafterprint: () => alert("Pdf is printed"),
  });

  return (
    <>
      <div
        className="container mx-auto bg-[#F7F8F9] rounded-lg p-5"
        ref={pdfRef}
      >
        <div className=" flex items-center gap-2 bg-[#E14658] rounded-lg p-4 ">
          <FaRegPaperPlane color="white" size={23} />
          <span className="text-white text-xl  hover:text-blue-200">
            TickTicketing
          </span>
        </div>
        <h1 className="text-2xl font-semibold mt-4">Invoice</h1>
        <div className="flex justify-between items-center text-gray-600">
          <div className="mt-8">
            <p className="text-xl font-semibold">Invoice to {fullName}</p>
            <p className="my-2">
              {address},{city}
            </p>
            <p>
              {state} ,{country}
            </p>
          </div>
          <div className=" ">
            <p className="text-gray-600 mb-2">Invoice ID: YCCURW-000000</p>
            <p className="text-gray-600">Order Date: 12/09/2023</p>
          </div>
        </div>

        <div className="container mx-auto p-8 mt-8">
          <table className=" w-full border  rounded-md">
            <thead>
              <tr>
                {" "}
                <th className="border py-2 text-center">#</th>
                <th className="border py-2 text-center">Event Details</th>
                <th className="border py-2 text-center">Event Type</th>
                <th className="border py-2 text-center">Ticket</th>
                <th className="border py-2 text-center">Unit Price</th>
                <th className="border py-2 text-center">Discount</th>
                <th className="border py-2 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border py-2 text-center">1</td>
                <td className="border py-2 text-center">{tickets.Title}</td>
                <td className="border py-2 text-center">{tickets.Type}</td>
                <td className="border py-2 text-center">x{count}</td>
                <td className="border py-2 text-center">$500.00</td>
                <td className="border py-2 text-center">$0.00</td>
                <td className="border py-2 text-center">${totalAfterTax}</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-8 flex justify-end">
            <p className="mb-2">Invoice Total: USD ${totalAfterTax}</p>
          </div>

          <div>
            {renderTickets()}
            <Scissor />
          </div>
          <button
            className="text-white mt-6 text-xl bg-[#E14658] p-2 rounded-lg border-red hover:text-blue-200"
            onClick={generatePDF}
          >
            Download PDF
          </button>
        </div>
      </div>
    </>
  );
};

export default Invoice;
