import { createContext, useState } from "react";

export const AuthContext = createContext(null)

export const AuthController = ({children}) => {
    const [isAthenticated, setIsAuthenticated] = useState(false)

    return (<AuthContext.Provider value={[isAthenticated, setIsAuthenticated]}>
        {children}
      </AuthContext.Provider>)
}