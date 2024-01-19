import { GoUnmute } from "react-icons/go";
import { useDispatch } from "react-redux";
import { toggleMute } from "../../utils/movieSlice";
const TitleContainer = ({title,overview}) => {

  const dispatch = useDispatch()
  const toggleMutebtn = ()=>{
    dispatch(toggleMute())
  }
  
  return (
    <div className="w-11/12 aspect-video pt-[15%] px-16  absolute text-white bg-gradient-to-r from-black flex flex-col gap-3">
    <h1 className="text-6xl font-bold">{title}</h1>
    <p className="text-lg w-2/5">{overview}</p>
    <div className="flex gap-3">
      <button className="bg-white px-8 py-2 text-black text-xl font-semibold rounded-lg hover:bg-opacity-80">Play</button>
      <button className="bg-gray-500 bg-opacity-50 px-8 py-2 text-white text-xl font-semibold rounded-lg hover:opacity-90">More Info</button>
    </div>
    <div><button className="p1 absolute right-6 text-gray text-6xl" onClick={toggleMutebtn}><GoUnmute /></button></div>
    </div>
  )
}

export default TitleContainer