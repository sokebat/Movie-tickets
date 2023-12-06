// Home.js
import React, { useContext } from "react";
import Card from "../components/Card";
import { MovieContext } from "../context/MovieContext";

const Home = () => {
  const { movies,} = useContext(MovieContext);

  return (
    <div className="mx-auto border-2 mt-5 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4gap-4">
        {movies ? (
          movies.map((movie, i) => <Card key={i} {...movie} id={i}  />)
        ) : (
          <p className="text-white text-center text-xl">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
