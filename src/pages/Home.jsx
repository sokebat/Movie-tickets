// Home.js
import React, { useContext } from "react";
import Card from "../components/Card";
import { MovieContext } from "../context/MovieContext";
import { Link } from "react-router-dom";
import Invoice from "./Invoice";

const Home = () => {
  const { movies } = useContext(MovieContext);

  return (
    // <div className="mx-auto border-2 mt-5 p-4">
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4gap-4">
    //     {movies ? (
    //       movies.map((movie, i) => (
    //         <Link to={`/event-detail/${i}`}>
    //           <Card key={i} {...movie}   />
    //         </Link>
    //       ))
    //     ) : (
    //       <p className="text-white text-center text-xl">Loading...</p>
    //     )}
    //   </div>
    // </div>
    <Invoice />
  );
};

export default Home;
