import MovieItem from '@/components/MovieItem';

export default function MovieList({ movies }) {
  // console.log(movies);

  return (
    <ul className="grid grid-cols-2 mt-[20px] gap-x-[15px] gap-y-[30px]">
      {movies?.length > 0 ? (
        movies.map((movie) => <MovieItem key={movie.imdbID} movie={movie} />)
      ) : (
        <p>영화 데이터 없음</p>
      )}
    </ul>
  );
}
