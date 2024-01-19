import { useEffect, useRef, useState } from "react"
import { options } from "../../utils/ImageUrl"
import { useDispatch, useSelector } from "react-redux"
import { addTrailerKey } from "../../utils/movieSlice"

const VedioContainer = ({movieId}) => {
  const trailerKey = useSelector((state)=>state.movies.trailerKey)
  const toggleState = useSelector((state)=>state.movies.mute)
  console.log(toggleState)
  const dispatch =useDispatch()
  
  const getMovieVedio = async()=>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,options)
    const data  = await response.json()
    // console.log(data.results)
    const trailer = data.results.filter((vedio)=>{
      return vedio.type == "Trailer"
    })
    // if movie doest have trailer ie trailer.length==0 then use any clip
    dispatch(addTrailerKey(trailer.length? trailer[0].key: data.results[0].key))
    // console.log(trailer)
  }

  useEffect(()=>{
    getMovieVedio()
  },[])
  
  const a = toggleState ? "0":"1"
  return (
    <div className=" w-screen">
      <iframe
        key={trailerKey}
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerKey+
          "?&autoplay=1&mute="+a
          
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share,fullscreen">
      </iframe>
    </div>
  )
}

export default VedioContainer