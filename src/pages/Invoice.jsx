import React, { useContext, useRef } from "react";
import Scissor from "../components/Invoice/Scissor";
import { FaRegPaperPlane } from "react-icons/fa";
import Ticket from "../components/Invoice/Ticket";
import { MovieContext } from "../context/MovieContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Invoice = () => {
  const { movies, count, total, formData, totalAfterTax, imgUrl } =
    useContext(MovieContext);

  const { firstName, email, address, country, state, city, postCode } =
    formData;
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

  const downloadPdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight, imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("Invoice.pdf");
    });
  };

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
            <p className="text-xl font-semibold">Invoice to {firstName}</p>
            <p className="my-2">
              {address} {state} {country}
            </p>
            <p>Sunsari, Nepal</p>
          </div>
          <div className=" ">
            <p className="text-gray-600 mb-2">Invoice ID: YCCURW-000000</p>
            <p className="text-gray-600">Order Date: 10/05/2022</p>
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
                <td className="border py-2 text-center">title</td>
                <td className="border py-2 text-center">Concert</td>
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
            onClick={downloadPdf}
          >
            Download PDF
          </button>
        </div>
      </div>
    </>
  );
};

export default Invoice;
