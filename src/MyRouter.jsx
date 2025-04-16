import { Route, Routes } from 'react-router'
import App from './App'
import NavBar from './components/NavBar.jsx'
import AddService from './pages/AddService.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import Register from './pages/Register.jsx'
import ServiceDetails from './pages/ServiceDetails.jsx'
import UserDetails from './pages/UserDetails.jsx'
import Users from './pages/Users.jsx'
import ProtectedRoute from './utils/ProtectedRoute.jsx'

const MyRouter = () => {
    return (<>
        <NavBar/>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/profile' element={
                <ProtectedRoute>
                <Profile/>
                </ProtectedRoute>
                }/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/user/:id' element={<UserDetails/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/addservice' element={ 
                <ProtectedRoute>
                <AddService/>
                </ProtectedRoute>}/>
            <Route path='/service/:id' element={<ServiceDetails/>}/>
            <Route path='*' element={<p>404 Not found</p>}/>
        </Routes>
    </>
    )
}

export default MyRouter