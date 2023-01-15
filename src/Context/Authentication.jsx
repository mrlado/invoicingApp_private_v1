import { VolunteerActivismOutlined } from '@mui/icons-material'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'



const Logedin = localStorage.getItem('logedIn')|| false


export const AuthContext = createContext()


export const AuthConProvider = ({children}) => {
    const [CurrentUser, setCurrentUser] = useState()
    const [islogin, setIslogin] = useState(Logedin)
 
    useEffect(()=>{
        axios.get('https://ec2-13-53-205-89.eu-north-1.compute.amazonaws.com/api/v1/')
        .then(res => res.data.map((value, index, array) => {
                    setCurrentUser(value)
        }))
        
    


        // localStorage.setItem('User',JSON.stringify(CurrentUser))
    },[])
    console.log(CurrentUser)
    return (
    <AuthContext.Provider value={{CurrentUser, setCurrentUser,islogin, setIslogin}}>
        {children}
    </AuthContext.Provider>
  )
}


export default AuthConProvider;