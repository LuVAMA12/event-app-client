import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext(null)

export const AuthController = ({children}) => {
    const navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [tokenStorage, setTokenStorage] = useState(null)
    

    useEffect(()=> {
        const token =  localStorage.getItem('token')
        try {
            if(token) {
                setTokenStorage(token)
                setIsAuthenticated(true)
            }
        } catch (error) {
            console.log(error)
        }
       
    }, [])

    const handleLogin = async (e, infoUser) => {
      e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/api/login',infoUser)
        if(response.status === 200){
            localStorage.setItem('token', response.data.token)
            setTokenStorage(response.data.token)
            setIsAuthenticated(true)
            alert(response.data.message)
            navigate('/')
        }
        } catch (error) {
            alert(error.response.data)
        }
    }

    const handleLogout = async () => {
        try {
            localStorage.removeItem('token')
            setIsAuthenticated(false)
            navigate('/login',{replace:true})
        } catch (error) {
            console.log(error)
        }
    }
   

    return (<AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, handleLogin, handleLogout, tokenStorage}}>
        {children}
      </AuthContext.Provider>)
}