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
        <div key={i} className="card flex justify-center items-center flex-col px-8 w-80 bg-slate-200 border-2 border-slate-300 rounded-lg mx-2 mb-3">
          <div className="movie-title text-2xl font-bold my-4 text-center">{movie.title}</div>
          <img src={`${import.meta.env.VITE_BASE_IMG_URL}/${movie.poster_path}`} className="w-64 rounded-md" />
          <div className="movie-date py-2">{movie.release_date}</div>
          <div className="movie-rating py-2">{movie.vote_average}</div>
        </div>
      )
    })
  }

  const search = async (q) => {
    if(q.length > 3) {
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    }
  }

  return (
    <>
      <header>
        <h1 className="text-center text-6xl py-5 font-bold">Movie App</h1>
          <input type="text" placeholder="Search movie..." className="Movie-search block m-auto my-5 bg-slate-300 px-5 py-2 rounded" onChange={({target}) => search(target.value)} />
        <div className="flex justify-center flex-wrap m-auto">
          <PopularMovieList />
        </div>
      </header>
    </>
  )
}

export default App
