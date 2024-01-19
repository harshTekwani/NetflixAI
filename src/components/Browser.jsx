import React, { useEffect, useState } from 'react'
import BrowserHeader from './BrowserHeader'
import { options } from '../../utils/ImageUrl'
import { useDispatch, useSelector } from 'react-redux'
import { addMovies } from '../../utils/movieSlice'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GptSearch from './GptSearch'

const Browser = () => {

  const gptSearch = useSelector((state)=>state.gpt.showGptSearch)
  // console.log(gptSearch)
  
  // this state varible tracks that wether data hs been fteched and set into rdux store
  const[apiDataFetched ,setApiDataFetched]=useState(false)
  const dispatch = useDispatch()

  const getNewMovies = async()=>{
    const respond = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",options)
    const data = await respond.json()
    // console.log(data.results)
    dispatch(addMovies(data.results))
    setApiDataFetched(true)
  }

  useEffect(()=>{
    getNewMovies()
  },[])

  return (
    
    <div>
      <BrowserHeader />
      
      {gptSearch ? (
        <GptSearch />
        ) : (
              apiDataFetched && (
              <>
                <MainContainer />
                <SecondaryContainer />
              </>
            )
        )
      }


    </div>
  )
}

export default Browser
