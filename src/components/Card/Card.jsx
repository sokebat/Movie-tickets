const Card = ({ ...movieProps }) => {
  return (
    <div className="relative transition ease-in-out delay-15 md:hover:-translate-y-1 md:hover:scale-105 duration-300 shadow-sm hover:shadow-lg  w-[277px] bg-[#1C1C24]">
      <img
        className="object-cover w-[350px]  h-[250px] md:w-[277px]"
        src={movieProps.Poster}
        alt={movieProps.Title}
      />
      <p className="absolute top-2 right-2 text-white p-2 font-bold bg-[#22252CCC]  rounded-md">
        {movieProps.Type}
      </p>
      <div className="text-white p-4">
        <p className="text-md font-bold mb-2">{movieProps.Title}</p>
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
