import { useRef, useState } from "react";
import Header from "./Header"
import { passwordValidation ,emailValidation } from "../../utils/validation";
import { auth } from "../../utils/firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { LoginBackgroundURL } from "../../utils/ImageUrl";


const Login = () => {

  // loginForm true == sign in form else signn up form
  const [loginForm,setLoginForm] = useState(true)
  const [emailMessage,SetEmailMesagge] =useState("")
  const [passwordMessage,SetPasswordMesagge] =useState("")
  
  const email = useRef()
  const password = useRef()

  const handelClick = ()=>{
    // validation logic
    const EmailValidationMessage = emailValidation(email.current.value)
    SetEmailMesagge(EmailValidationMessage)

    const PasswordValidationMessage = passwordValidation(password.current.value)
    SetPasswordMesagge(PasswordValidationMessage)

    // to check if there is validation meassage than dont do sign in sign up just return
    if(emailMessage!== "" && passwordMessage!== "") return

    
    if(!loginForm){
      // sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
         // Signed up 
         const user = userCredential.user;
         // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    }
    else{
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // after sign in navigate to browser
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }


  }

  const handleEmailChange = () => {
    SetEmailMesagge(""); // Clear email error message when the user starts typing a new email
  };

  const handlePasswordChange = () => {
    SetPasswordMesagge(""); // Clear password error message when the user starts typing a new password
  };

  const toggleLogin = ()=>{
    setLoginForm(!loginForm);
  }

  return (
    <div className="relative">
      <Header />

      <img
        src={LoginBackgroundURL}
        alt="background img"
        className="w-screen h-screen object-cover flex items-center justify-center bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-50"></div>
    
    <div className="flex items-center justify-center">
        <form onSubmit={(e)=>e.preventDefault()} className="absolute top-20 w-3/12">
            <div className="bg-black bg-opacity-80 px-8 py-10 rounded-md flex flex-col gap-8 ">
                <div className="p1 text-white text-5xl font-semibold mx-10">{loginForm ? "Sign In":"Sign Up"}</div>
                <div className="flex flex-col gap-2 mx-10">
                    {!loginForm && (<input className="bg-[#333333] text-white text-lg px-4 py-2" type="text" placeholder="User Name" />)}
                    <p>{null}</p>
                    <input 
                    className="bg-[#333333] text-white text-lg px-4 py-2" 
                    type="text"
                    ref={email} 
                    placeholder="Email"
                    onChange={handleEmailChange}
                    />
                    <p className="p1 text-[10px] text-white w-full">{emailMessage}</p>
                    <input 
                    className="bg-[#333333] text-white text-lg px-4 py-2 " 
                    type="password" 
                    placeholder="Password" 
                    ref={password}
                    onChange={handlePasswordChange}
                    />
                    <p className="p1 text-[10px] text-white w-full">{passwordMessage}</p>
                </div>
                <button className="bg-[#e50914] text-white text-lg font-semibold px-4 py-2 hover:bg-[#c11119] rounded mx-10" onClick={handelClick}>
                {loginForm ? "Sign In":"Sign Up"}
                </button>
                <p className="p1 text-s text-[#737373] mx-10">{loginForm ? "New to Netflix? ":"Already a User? "} <button 
                className="p1 text-white hover:underline" onClick={toggleLogin}
                >{loginForm ? "Sign Up":"Sign In"} Now</button> </p>
            </div>
        </form>

      </div>
     
    </div>
  );
};

export default Login;