/**
 * MovieCard component
 * - Displays poster, title, description, and rating for a movie
 * - Wraps content in a link to the movie description page using the movie `id`
 */
import { Link } from "react-router-dom";

const MovieCard = ({
  id,
  title = "No Title",
  description = "No description",
  posterURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OFdYEiUBHCvCWNHWq5OeMX0nh7P5sdviSg&s",
  rating = 0.0,
}) => {
  return (
    <Link to={`/description/${id}`} className="border rounded w-[200px]">
      <div className="w-full h-32 overflow-hidden flex justify-center items-center">
        <img src={posterURL} alt="" className="w-full" />
      </div>
      <div className="p-1">
        <p className="text-xl font-bold line-clamp-1">{title}</p>
        <p className=" line-clamp-2 h-[2lh]">{description}</p>
        <p className="text-end font-bold">{rating}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
