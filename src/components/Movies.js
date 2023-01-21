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

  return (
    <div>
      <h3>movies</h3>
      <div>

      </div>
      <ul className="grid grid-cols-3 gap-x-3 gap-y-12">
        {displayedMovies.map((movie) => <SingleMovie key={movie.imdbid} movie={movie} /> )}
      </ul>
      <div className="flex justify-center items-center">
        <button onClick={allMovies}>{viewLess ? 'View all movies' : 'View less movies'}</button>
      </div>
    </div>
  )
}

export default Movies