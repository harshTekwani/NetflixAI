import React from 'react'
import { useRef } from 'react';
import { genAI } from '../../utils/Googleai';
import { useDispatch } from 'react-redux';
import { addGptMovies } from '../../utils/togleSearchSlice';
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import { options } from '../../utils/ImageUrl';

const GptSearchbox = () => {

  const searchText = useRef()
  const dispatch = useDispatch()

  const moviedata = async (movies)=>{
    const response =await fetch("https://api.themoviedb.org/3/search/movie?query="+ movies + "&include_adult=false&language=en-US&page=1",options)
    const data = await response.json()
    return data.results
}

    async function gptSearch() {
      // console.log(searchText.current.value)
      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ];
      const model = genAI.getGenerativeModel({ model: "gemini-pro",safetySettings});

      const prompt ="Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      // console.log(text);
      const movies = text.split(",")

      const promiseArray = movies.map((movie,index)=> moviedata(movie))

      const tmdbResults = await Promise.all(promiseArray)

      dispatch(addGptMovies(tmdbResults))
      
    }
  
 

  return (
        <div className='pt-[10%] w-2/5 mx-auto'>
            <div className='bg-black flex justify-center px-2'>
                <input 
                type="text" 
                placeholder='What do you want to watch today?'
                ref = {searchText}
                className='w-full my-10 mx-5 px-4 py-2 ring-1 ring-black ' />
                <button className="bg-[#e50914] text-white text-lg font-semibold px-4 py-2 hover:bg-  [#c11119] rounded my-10" onClick={gptSearch}>Search</button>
            </div>
      </div>
  )
}

export default GptSearchbox