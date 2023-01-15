import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'



// const currentUser = JSON.parse(localStorage.getItem('User'))|| null


export const AuthContext = createContext()


export const AuthConProvider = ({children}) => {
    const [CurrentUser, setCurrentUser] = useState()
    const [islogin, setIslogin] = useState(true)
 
    useEffect(()=>{
        axios.get('https://ec2-13-53-205-89.eu-north-1.compute.amazonaws.com/api/v1/')
        .then(res => setCurrentUser(res.data))
          
        // localStorage.setItem('User',JSON.stringify(CurrentUser))
    },[])
 
    return (
    <AuthContext.Provider value={{CurrentUser, setCurrentUser,islogin, setIslogin}}>
        {children}
    </AuthContext.Provider>
  )
}


export default AuthConProvider;