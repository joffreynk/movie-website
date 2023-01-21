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

  return (
    <div className="flex flex-col gap-20">
      <h3 className="uppercase text-transparent font-extrabold tracking-[20px] text-5xl bg-clip-text bg-gradient-to-r from-[#f5065e] to-[#0004e0]">movies</h3>
      <div className="flex gap-8">
        <div className="flex flex-col gap-5">
          <h4  className="uppercase font-bold text-[#cac9c9]">genre</h4>
          <div className="flex flex-col items-start justify-start group gap-2 text-lg">
          { mygenres.map((genre) => <button className="bg-[#cac9c9] mx-0 px-0 text-[#1f1f1f] w-full text-start pl-2 pr-6 rounded-md" key={genre} onClick={() => setDisplayedMovies(moviesData.filter(movie => movie.genre.includes(genre)))}>{genre}</button>) }
          </div>
        </div>
        <div className="flex flex-col gap-20">
          <ul className="grid grid-cols-3 gap-x-3 gap-y-12">
            {displayedMovies.map((movie, i) => <SingleMovie key={`${movie.imdbid}Q${movie.imdbrating}`} movie={movie} /> )}
          </ul>
          <div className="flex justify-center items-center w-full">
            <button className="capitalize bg-gradient-to-r from-[#ef4d88] to-[#4e51ff] py-2 rounded-lg text-lg w-full" onClick={allMovies}>{viewLess ? 'View all movies' : 'View less movies'}</button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Movies