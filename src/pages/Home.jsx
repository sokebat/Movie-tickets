import { useContext } from "react";
import Card from "../components/Card/Card";
import { MovieContext } from "../context/MovieContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div className=" container mx-auto  ">
      <div className="grid  sm:grid-cols-2 lg:grid-cols-3   gap-10 mt-9 px-4  place-content-center place-items-center ">
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
