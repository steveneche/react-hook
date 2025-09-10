/**
 * Home page
 * - Manages movie list state, search inputs, and new movie creation
 * - Conditionally renders either a filtered list or all movies
 */
import { useState } from "react";
import movies from "../data/movies";
import Filter from "../components/Filter";
import MovieList from "../components/MovieList";

const Home = () => {
  // Master list of movies and search filters
  const [allMovies, setAllMovies] = useState(movies);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  // Controlled form state for adding a new movie
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating,
  });
  // const [search, setSearch] = useState(false);
  // const title = useRef();
  // const rating = useRef();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // setSearch(true);
  // };
  // Add a new movie to the list and reset the form
  const handleAddNewMovie = (e) => {
    e.preventDefault();
    console.log(newMovie);
    console.log(allMovies);
    setAllMovies([...allMovies, newMovie]);

    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating,
    });
  };
  return (
    <>
      <div className=" flex justify-between">
        <div>
          {/* Search inputs for title and rating */}
          <p>Search</p>
          <div>
            <label htmlFor="">Title:</label>
            <input
              type="text"
              // ref={title}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="title"
            />
          </div>
          <div>
            <label htmlFor="">Rating (0-5):</label>
            <input
              type="text"
              // ref={rating}
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="rating"
            />
          </div>
        </div>
        <div>
          <p>Add New Movie</p>
          <form onSubmit={handleAddNewMovie}>
            <input
              type="text"
              value={newMovie.title}
              onChange={(e) =>
                setNewMovie({ ...newMovie, title: e.target.value })
              }
              placeholder="title"
            />
            <input
              type="text"
              value={newMovie.description}
              placeholder="description"
              onChange={(e) =>
                setNewMovie({ ...newMovie, description: e.target.value })
              }
            />
            <input
              type="text"
              value={newMovie.posterURL}
              placeholder="posterURL"
              onChange={(e) =>
                setNewMovie({ ...newMovie, posterURL: e.target.value })
              }
            />
            <input
              type="text"
              onChange={(e) =>
                setNewMovie({ ...newMovie, rating: e.target.value })
              }
              value={newMovie.rating}
              placeholder="rating"
            />
            <button type="submit">Add movie</button>
          </form>
        </div>
      </div>
      {/* Conditionally show filtered results when any search input is provided */}
      {/* <button type="submit">Search</button> */}
      {/* </form> */}
      {title || rating ? (
        <Filter movies={allMovies} title={title} rating={rating} />
      ) : (
        <MovieList movies={allMovies} />
      )}
    </>
  );
};

export default Home;
