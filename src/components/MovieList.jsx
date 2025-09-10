/**
 * MovieList component
 * - Receives an array of `movies` and renders a grid of `MovieCard`s
 */
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <>
      <h2>All Movies</h2>
      <div className="flex gap-3 flex-wrap">
        {movies.map((movie, index) => (
          <MovieCard {...movie} />
        ))}
      </div>
    </>
  );
};

export default MovieList;
