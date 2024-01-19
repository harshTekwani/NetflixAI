import React from 'react'
import { MovieCardImg } from '../../utils/ImageUrl'

const MovieCard = ({data}) => {
    // console.log(data)
  return (
    <div className='w-48'>
        <img src={MovieCardImg +data.poster_path} alt="logo" />
    </div>
  )
}

export default MovieCard