import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "./api";
const App = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])


  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div key={i} className="card flex justify-center items-center flex-col px-8 w-80 h-[550px] bg-slate-200 border-2 border-slate-300 rounded-lg mx-2 mb-3">
          <div className="movie-title text-2xl font-bold my-4">{movie.title}</div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="w-64 rounded-md" />
          <div className="movie-date py-2">{movie.release_date}</div>
          <div className="movie-rating py-2">{movie.vote_average}</div>
        </div>
      )
    })
  }

  const search = (q) => {
    console.log(q);
  }

  return (
    <>
      <header>
        <h1 className="text-center text-6xl py-5 font-bold">Movie App</h1>
          <input type="text" placeholder="Cari movie" className="Movie-search block m-auto my-5" onChange={(target) => search(target.value)} />
        <div className="flex justify-center flex-wrap m-auto">
          <PopularMovieList />
        </div>
      </header>
    </>
  )
}

export default App
