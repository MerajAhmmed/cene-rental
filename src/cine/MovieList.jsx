import { getALlMovies } from "../Data/movies";
import MovieCart from "./MovieCart";

export default function MovieList() {
  const movies = getALlMovies();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <MovieCart movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
