export const emailValidation = (email)=>{
    const emailIsValid= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    if(emailIsValid === false){
        const message = "Please enter a valid email address"
        return message
    }
    return ""
}

export const passwordValidation = (password)=>{
    const passwordIsValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/.test(password);
    
    if(passwordIsValid === false){
        const message = "Please enter a Valid Password"
        return message
    }
    return ""
}
    
