import React from "react";

const Card = ({ ...movieProps }) => {
  return (
    <div className="relative w-80 h-auto rounded-xl overflow-hidden mt-3">
      <img
        className="object-cover w-full h-80"
        src={movieProps.Poster}
        alt={movieProps.Title}
      />
      <p className="absolute top-2 right-2 text-white p-2 font-bold bg-[#22252CCC]  rounded-md">
        {movieProps.Type}
      </p>
      <div className="text-white p-4">
        <p className="text-xl font-bold mb-2">{movieProps.Title}</p>
        <section className="flex gap-4">
          <div>
            <p>{movieProps.Year}</p>
          </div>
          <div>
            <p>
              {" "}
              <span> ◉ </span>Kathmandu, Nepal
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
