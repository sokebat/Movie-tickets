import React, { useContext } from "react";
import Card from "../components/Card/Card";
import { MovieContext } from "../context/MovieContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div className=" container mx-auto mt-5 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies ? (
          movies.map((movie, i) => (
            <Link key={i} to={`/event-detail/${i}`}>
              <Card {...movie} />
            </Link>
          ))
        ) : (
          <p className="text-white text-center text-xl">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
