import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext(null)

export const AuthController = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()

    const handleLogin = async (e, infoUser) => {
      e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/api/login',infoUser)
            console.log(response)
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

    return (<AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, handleLogin}}>
        {children}
      </AuthContext.Provider>)
}