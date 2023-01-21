import { useState } from "react"
import moviesData from "../data/moviesData"
import SingleMovie from "./SingleMovie"
const Movies = () => {

  const [displayedMovies, setDisplayedMovies] = useState(moviesData.slice(0, 9))
  const [viewLess, setViewLess] = useState(true)

  const allMovies = () => {
    if(viewLess){
      setDisplayedMovies(moviesData)
      setViewLess(false)
    }else {
      setDisplayedMovies(moviesData.slice(0, 9))
      setViewLess(true)
    }
  }

  const mygenres = Array.from(new Set(moviesData.map(movie => movie.genre).flat(Infinity)));

  // }
  return (
    <div>
      <h3 className="flex justify-center items-center">movies</h3>
      <div className="flex">
        <div className="flex flex-col ">
          <h4  className="">genre</h4>
          <div className="flex flex-col">
          { mygenres.map((genre) => <button key={genre} onClick={() => setDisplayedMovies(moviesData.filter(movie => movie.genre.includes(genre)))}>{genre}</button>) }
          </div>
        </div>
        <ul className="grid grid-cols-3 gap-x-3 gap-y-12">
          {displayedMovies.map((movie, i) => <SingleMovie key={`${movie.imdbid}Q${movie.imdbrating}`} movie={movie} /> )}
        </ul>
        <div className="flex justify-center items-center">
          <button onClick={allMovies}>{viewLess ? 'View all movies' : 'View less movies'}</button>
        </div>
      </div>
    </div>
  )
}

export default Movies