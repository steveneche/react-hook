/**
 * Filter component
 * - Receives the full `movies` list and user-provided `title` and `rating` filters
 * - Filters by title (case-insensitive) and, if present, exact rating match
 * - Renders a list of `MovieCard` components
 */
import MovieCard from "./MovieCard";

const Filter = ({ movies, title, rating }) => {
  // Debug: whether a rating filter is active
  console.log(!!rating);
  return (
    <>
      <h2>Filter</h2>
      <div className="flex gap-3 flex-wrap">
        {/* If a rating is provided, apply both title and rating filters */}
        {rating
          ? movies
              .filter((movie) =>
                movie.title.toLowerCase().includes(title.toLowerCase())
              )
              .filter((movie) => movie.rating == rating)
              .map((movie, index) => <MovieCard {...movie} />)
          : // Otherwise only filter by title
            movies
              .filter((movie) =>
                movie.title.toLowerCase().includes(title.toLowerCase())
              )
              .map((movie, index) => <MovieCard {...movie} />)}
      </div>
    </>
  );
};

export default Filter;
