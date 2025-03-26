import { Route, Routes } from 'react-router'
import App from './App'
import NavBar from './components/NavBar.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import Register from './pages/Register.jsx'

const MyRouter = () => {
    return (<>
        <NavBar/>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<p>404 Not found</p>}/>
        </Routes>
    </>
    )
}

export default MyRouter