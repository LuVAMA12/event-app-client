import { useContext } from "react"
import { Link } from "react-router"
import { AuthContext } from "../context/AuthContext"


const NavBar = () => {
    // const navigate = useNavigate()
    const { isAuthenticated, handleLogout } = useContext(AuthContext)
    return (
        <>
            <nav className="bg-gray-900 text-white shadow-md p-4 fixed w-full top-0 left-0 z-10">
                <ul className="flex justify-center space-x-6">
                    <Link to='/'className="hover:text-blue-400 transition duration-300">Home</Link>
                    {!isAuthenticated ? 
                    (
                        <>
                        <Link to='/register'className="hover:text-blue-400 transition duration-300">Register</Link>
                        <Link to='/login'className="hover:text-blue-400 transition duration-300">Login</Link>
                        
                        </>
                    ): 
                    (<>
                        <Link to='/profile' className="hover:text-blue-400 transition duration-300">Profile</Link>
                        <Link to='/users' className="hover:text-blue-400 transition duration-300">Users</Link>
                        <Link to='/addservice' className="hover:text-blue-400 transition duration-300">New Service</Link>
                        <li onClick={handleLogout} className="hover:text-blue-400 transition duration-300 ">Logout </li>
                    </>)
                    } 
                </ul>
            </nav>
        </>
    )
}

export default NavBar