import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext(null)

export const AuthController = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()

    useEffect(()=> {
        let token =  localStorage.getItem('token')
        console.log(token)
        if(token) setIsAuthenticated(true)
    }, [])

    const handleLogin = async (e, infoUser) => {
      e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/api/login',infoUser)
        if(response.status === 200){
            localStorage.setItem('token', response.data.token)
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
        } catch (error) {
            console.log(error)
        }
    }
   

    return (<AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, handleLogin, handleLogout}}>
        {children}
      </AuthContext.Provider>)
}