import { Link } from "react-router"


const NavBar = () => {
    return (
        <>
            <nav className="bg-gray-900 text-white shadow-md p-4 fixed w-full top-0 left-0 z-10">
                <div className="flex justify-center space-x-6">
                    <Link to='/'className="hover:text-blue-400 transition duration-300"><li>Home</li></Link>
                    <Link to='/profile' className="hover:text-blue-400 transition duration-300"><li>Profile</li></Link>
                    <Link to='/register'className="hover:text-blue-400 transition duration-300"><li>Register</li></Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar