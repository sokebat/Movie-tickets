import React, { useEffect, useState } from "react";
import { MovieContext } from "./MovieContext";

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const search = "man";
      const apiKey = "2e2ff57c";
      const response = await fetch(
        `https://www.omdbapi.com/?s=${search}&apikey=${apiKey}`
      );
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      // alert("Error Occured", error);
      console.error("Error Occured",error)
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ movies, fetchMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
