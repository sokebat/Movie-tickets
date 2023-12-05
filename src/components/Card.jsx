import React from "react";

const Card = () => {
  return (
    <div className="relative w-80 h-auto rounded-xl overflow-hidden">
      <img
        className="object-cover w-full h-43"
        src="https://images.unsplash.com/photo-1530878955558-a6c31b9c97db?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmljZXxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
      />

      <p className="absolute top-2 right-2 text-white p-2 font-bold bg-red-500 rounded-full">
        Movies
      </p>

      <div className="text-white p-4">
        <p className="text-xl font-bold mb-2">
          Title: Movie Title
        </p>

        <section className="flex gap-4">
          <div>
            <h4 className="font-bold">Date:</h4>
            <p>April 30, 2022</p>
          </div>
          <div>
            <h4 className="font-bold">Location:</h4>
            <p>Kathmandu, Nepal</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
