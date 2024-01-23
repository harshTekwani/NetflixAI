import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import { options } from '../../utils/ImageUrl'

const GptMovieSujjestionBox = () => {
  const movies = useSelector((state)=>state.gpt.gptMovies)

  if(!movies) return "Error search for another input"
  

  return (
    <div>
        {movies && (<div className='flex justify-center bg-black bg-opacity-80  gap-5 p-10 mt-5 px-48'>
                {movies.map((movie) => (
                <MovieCard key={movie[0].id} data={movie[0]} />
                ))}
        </div>)}
    </div>
  )
}

export default GptMovieSujjestionBox