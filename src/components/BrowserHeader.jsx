import { useDispatch, useSelector } from "react-redux";
import { NetflixURL, UserURL } from "../../utils/ImageUrl";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";
import { toggleSearch } from "../../utils/togleSearchSlice";

const BrowserHeader = () => {
  const gptSearch = useSelector((state)=>state.gpt.showGptSearch)
  const dispatch = useDispatch()
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };

  const toggleSearchfn = ()=>{
    dispatch(toggleSearch())
  }

    return (
        <div className="w-full px-16 absolute z-10 flex justify-between items-center bg-gradient-to-b from-black">
           <div className="flex justify-between gap-4">
              <div>
                <img
                  className="p1 w-36"
                  src={NetflixURL}
                  alt="logo"
                />
              </div>
              <div className="p1 font-semibold text-white hover:underline flex items-center">Home</div>
              <div className="p1 font-semibold text-white hover:underline flex items-center">TV Shows</div>
              <div className="p1 font-semibold text-white hover:underline flex items-center">Movies</div>
              <div className="p1 font-semibold text-white hover:underline flex items-center">New & Popular</div>
              <div className="p1 font-semibold text-white hover:underline flex items-center">Browse By Language</div>
           </div>

            <div className="flex gap-2 mx-2">
              <div className="flex gap-1">
                  <button 
                  className="bg-purple-800 text-white px-4 py-2 mx-3 rounded-lg hover:bg-purple-600"
                  onClick={toggleSearchfn}>{gptSearch?"Home Page" : "GPT Search"}</button>
                  <img
                  className="p1 w-10" 
                  src={UserURL} 
                  alt="account logo" />
                  <button 
                  className="p1 text-white flex items-end"
                  onClick={toggleDropdown}>{isDropdownOpen?"^":"v"}</button>
                  {isDropdownOpen && <DropdownMenu />}
                </div>
                
            </div>
        </div>
      
    );
  };

  export default BrowserHeader