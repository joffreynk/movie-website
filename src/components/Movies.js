import { useState } from "react"
import moviesData from "../data/moviesData"
import SingleMovie from "./SingleMovie"
const Movies = () => {
  return (
    <div>
      <h3>movies</h3>
      <div>

      </div>
      <ul className="grid grid-cols-3 gap-3">
        {moviesData.map((movie) => <SingleMovie key={movie.imdbid} movie={movie} /> )}
      </ul>
    </div>
  )
}

export default Movies