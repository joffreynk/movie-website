import React from 'react'

const SingleMovie = ({movie}) => {
  return (
    <li className='flex flex-col gap-4 p-5  bg-[#3f3f3f] '>
        <div>
          <img src={movie.imageurl[0]} alt={movie.title} className="w-full" />
        </div>
        <ul className='flex justify-between gap-2'>
          {movie.genre.map(genre => <li>{genre}</li>)}
        </ul>
        <div>

        </div>
    </li>
  )
}

export default SingleMovie;