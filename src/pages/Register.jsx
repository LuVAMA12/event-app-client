import axios from 'axios'
import { useState } from "react"
import { useNavigate } from 'react-router'

const Register = () => {
    let navigate = useNavigate()
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [image, setImage] = useState(null)


const handleRegistration = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('first_name', firstName)
    formData.append('last_name', lastName)
    formData.append('email', email)
    formData.append('password', password)
    if(image){
        formData.append('image', image)
    }
    console.log( formData)
    try {
        const newUser = await axios.post(`http://localhost:8000/api/register/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if(newUser.status === 201) {
            alert(newUser.data)
            navigate('/')
        }
    } catch (error) {
        console.log(error)
        if(error){
            alert(error.response.data)
        }
    }
}
    return (
    <>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Register a new account
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST" onSubmit={handleRegistration}>
                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="first_name" className="block text-sm/6 font-medium text-gray-900">First name</label>
                    </div>
                        <div className="mt-2">
                            <input type="text" name="first_name" id="first_name" autoComplete="given-name" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                    </div>

                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="last_name" className="block text-sm/6 font-medium text-gray-900">Last name</label>
                    </div>
                        <div className="mt-2">
                            <input type="text" name="last_name" id="last_name" autoComplete="family-name" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                    </div>


                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                    </div>
                        <div className="mt-2">
                            <input type="email" name="email" id="email" autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                        </div>
                        <div className="mt-2">
                            <input type="password" name="password" id="password" autoComplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="image" className="block text-sm/6 font-medium text-gray-900">Profile picture</label>
                        </div>
                        <div className="mt-2">
                            <input type="file" 
                            name="image" 
                            id="image" 
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            onChange={(e) => setImage(e.target.files[0])}/>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
                    </div>
                </form>

            </div>
        </div>
    </>
    )
}

export default Register
