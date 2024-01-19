import React from 'react'
import MovieList from './MovieList'
import { List } from '../../utils/CategoryAPIList'

const SecondaryContainer = () => {
  const Movielist = List
  // console.log(Movielist)
  return (
    <div className='bg-black bg-opacity-90'>
     <div className='-my-72 relative z-20 mx-6'>
        {Movielist.map((obj,index)=>
        (<MovieList  key={index} url={obj.url} title={obj.title} />)
        )}
     </div>
    </div>
  )
}

export default SecondaryContainer