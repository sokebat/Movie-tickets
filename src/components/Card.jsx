import React from "react";
import { Link } from "react-router-dom";

const Card = ({ ...movieProps }) => {
  return (
    <div className="relative w-80 h-auto rounded-xl overflow-hidden mt-3">
      <img
        className="object-cover w-full h-43"
        src={movieProps.Poster}
        alt={movieProps.Title}
      />
      <p className="absolute top-2 right-2 text-white p-2 font-bold bg-red-500 rounded-full">
        Movies
      </p>
      <div className="text-white p-4">
        <p className="text-xl font-bold mb-2">{movieProps.Title}</p>
        <section className="flex gap-4">
          <div>
            <p>{movieProps.Year}</p>
          </div>
          <div>
            <p>Kathmandu, Nepal</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
