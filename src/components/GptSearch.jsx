import React from 'react'
import { LoginBackgroundURL } from '../../utils/ImageUrl'
import GptSearchbox from './GptSearchbox'
import GptMovieSujjestionBox from './GptMovieSujjestionBox'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img 
        src={LoginBackgroundURL} 
        alt="background image"
        className="w-screen h-screen object-cover flex items-center justify-center bg-cover   bg-center"/>
      </div>
      <GptSearchbox />
      <GptMovieSujjestionBox />
    </div>
  )
}

export default GptSearch