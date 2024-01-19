import {signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";

const DropdownMenu = () => {

  const handelSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
      <div className="absolute right-0 mt-12 w-48 rounded-md shadow-lg bg-black text-white ring-1 ring-white ring-opacity-5 cursor-pointer">
        <div className="py-1" role="menu" aria-orientation="vertical"                      aria-labelledby="user-menu">
          {/* Add your dropdown items here */}
          <div className="px-4 py-2" role="menuitem">
            Manage Profile
          </div>
          <div className="px-4 py-2" role="menuitem">
            Transfer Profile
          </div>
          <div className="px-4 py-2" role="menuitem">
            Account
          </div>
          <div className="px-4 py-2" role="menuitem">
            Help
          </div>
          <div className="border-t border-white"></div>
          <div className="px-4 py-2 cursor-pointer" role="menuitem" onClick={handelSignOut}>
            Sign Out
          </div>
        </div>
      </div>
    );
  };

  export default DropdownMenu