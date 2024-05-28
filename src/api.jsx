import axios from "axios";

export const getMovieList = async () => {
    const movie = await axios.get(`${import.meta.env.VITE_BASE_URL}/movie/top_rated?page=1&api_key=${import.meta.env.VITE_API_KEY}`)
    // console.log({movieList: movie})
    // return
    return movie.data.results
}
export const searchMovie = async (q) => {
    const search = await axios.get(`${import.meta.env.VITE_BASE_URL}/search/movie?query=${q}&page=1&api_key=${import.meta.env.VITE_API_KEY}`)
    return search.data
}