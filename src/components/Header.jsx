import { NetflixURL } from "../../utils/ImageUrl";

const Header = () => {
    return (
      <div className="p-1 w-9/12 mx-40 my-0 absolute z-10 flex justify-between items-center">
        <div>
            <img
              className="w-40  bg-gradient-to-b from-black"
              src={NetflixURL}
              alt="logo"
            />
        </div>
      </div>
    );
  };
  
  export default Header;
  