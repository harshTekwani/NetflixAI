import React, { useEffect, useState } from 'react'
import { options } from '../../utils/ImageUrl'
import MovieCard from './MovieCard'

const MovieList = ({url,title}) => {
const[movieData,setMovieData]=useState(null)

  const getMovies = async()=>{
    const response = await fetch(url,options)
    const data = await response.json()
    setMovieData(data.results)
  }

  useEffect(()=>{
    getMovies()
  },[])

  if(movieData){
    return (
       <div className='py-4'>
            <div><h1 className='text-3xl font-semibold text-white'>{title}</h1></div>
            <div className='flex overflow-x-scroll my-2'>
              <div className='flex gap-5'>
                {movieData.map((movie) => (
                <MovieCard key={movie.id} data={movie} />
                ))}
              </div>
            </div>
        </div>
      
    )
  }
}

export default MovieList