import { useEffect } from "react";
import Login from "./components/Login"
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Outlet, useNavigate } from "react-router-dom";


function App() {
  const user = useSelector((state)=>state.user)
  const dispatch  = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid , email , displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))

        navigate("/browser")
        
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
        // ...
      }
    });

    return unsubscribe
  },[])

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
