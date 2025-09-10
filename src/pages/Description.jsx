/**
 * Description page
 * - Reads the movie `id` from the URL
 * - Finds the corresponding movie and displays full details
 * - If not found, shows a fallback message
 */
import { useParams } from "react-router-dom";
import movies from "../data/movies";

const Description = () => {
  // Extract `id` route parameter and find the matching movie
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));
  return (
    <div>
      {/* Render movie details if found */}
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <p>{movie.rating}</p>
          {/* Show trailer iframe when available */}
          {movie.trailerURL && (
            <iframe src={movie.trailerURL} title="trailer" />
          )}
        </div>
      ) : (
        <div>
          <h1>Movie not found</h1>
        </div>
      )}
    </div>
  );
};

export default Description;
