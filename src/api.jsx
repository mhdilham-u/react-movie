import axios from "axios";

export const getMovieList = async () => {
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=91066d075c180b9da912a79df5f20f80
    `)
    // console.log({movieList: movie})
    // return
    return movie.data.results
}
export const searchMovie = async (q) => {
    const search = await axios.get(q)
    return
}