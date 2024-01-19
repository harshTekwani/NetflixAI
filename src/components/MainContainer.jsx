import TitleContainer from "./TitleContainer"
import VedioContainer from "./VedioContainer"
import { useSelector } from "react-redux"

function MainContainer() {
  // we are accesing movies that we had fetch in browser component and set it in redux store
  const movies = useSelector((state)=>state.movies.newMovies)
  

  const getRandomMovie = () => {
    if (!movies) {
      return null;
    }

    // Generate a random index within the length of the movies array
    const randomIndex = Math.floor(Math.random() * movies.length);

    // Get the random movie using the random index
    const randomMovie = movies[randomIndex];

    return randomMovie;
  };

  const randomMovie = getRandomMovie();
  // console.log(randomMovie)

  const {original_title,overview,id} = randomMovie
  // console.log(original_title,overview,id)
  return (
    
    <div className="overflow-x-hidden">
        <TitleContainer title={original_title} overview={overview} />
        <VedioContainer movieId={id} />
    </div>
  )
}

export default MainContainer