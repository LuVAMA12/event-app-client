import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../context/AuthContext.jsx'

function Profile() {

  const { tokenStorage } = useContext(AuthContext)
  const [infoUser, setInfoUser] = useState(null)
  const [loading, setLoading] = useState(true)




  const fetchUserProfile = async () => {
    setLoading(true)
    try {
      const response = await axios.get('http://localhost:8000/api/profile', {
        headers: {
          'Authorization': `Bearer ${tokenStorage}`
        }
      })

      if(response.status === 200) {
        setInfoUser(response.data)
        }
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
   }
   useEffect(() => {
    if(tokenStorage){

      fetchUserProfile()
    }
   }, []) 

  return (
    <>
    { !loading && infoUser &&
    <div className="max-w-3xl mx-auto mt-16 bg-white shadow-lg rounded-xl overflow-hidden border">

      <div className="flex items-center px-6 py-6 bg-gray-50">
        <img
          src={`http://localhost:8000/${infoUser.image}`}
          alt="Image de profil"
          className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
        />
        <div className="ml-6">
          <h3 className="text-2xl font-semibold text-gray-800">User Profile</h3>
          <p className="text-sm text-gray-500 mt-1">ID: {infoUser._id}</p>
        </div>
      </div>

      <div className="px-6 py-4">
        <dl className="divide-y divide-gray-100">

          <div className="grid grid-cols-3 py-4">
            <dt className="text-sm font-medium text-gray-600">Full Name</dt>
            <dd className="col-span-2 text-sm text-gray-900">
              {infoUser.first_name} {infoUser.last_name}
            </dd>
          </div>

          <div className="grid grid-cols-3 py-4 ">
            <dt className=" text-sm font-medium text-gray-600">
              Email
            </dt>
            <dd className="col-span-2 text-sm text-gray-900">{infoUser.email}</dd>
          </div>
        </dl>
      </div>
    </div>
  }
    </>
  )
}

export default Profile
