import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

const UserDetails = () =>  {

    const {id} = useParams()
    const [userDetails, setUserDetails]= useState(null)
    const [loading, setLoading]= useState(true)
    const navigate = useNavigate();

    const fetchUserDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/user/${id}`)
            setUserDetails(response.data)
        } catch (error) {
         console.log(error)   
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchUserDetails()
    }, [])

    return (
        <>

        
        {!loading && userDetails && (
    <div className="max-w-3xl mx-auto mt-16 bg-white shadow-lg rounded-xl overflow-hidden border">

      <div className="flex items-center px-6 py-6 bg-gray-50">
        <img
          src={userDetails.image ? `http://localhost:8000/${userDetails.image}` : `https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png`}
          alt="Image de profil"
          className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
        />
        <div className="ml-6">
          <h3 className="text-2xl font-semibold text-gray-800">User Profile</h3>
          <p className="text-sm text-gray-500 mt-1">ID: {userDetails._id}</p>
        </div>
      </div>

      <div className="px-6 py-4">
        <dl className="divide-y divide-gray-100">

          <div className="grid grid-cols-3 py-4">
            <dt className="text-sm font-medium text-gray-600">Full Name</dt>
            <dd className="col-span-2 text-sm text-gray-900">
              {userDetails.first_name} {userDetails.last_name}
            </dd>
          </div>

          <div className="grid grid-cols-3 py-4 ">
            <dt className=" text-sm font-medium text-gray-600">
              Email
            </dt>
            <dd className="col-span-2 text-sm text-gray-900">{userDetails.email}</dd>
          </div>
        </dl>
      </div>
    </div>
        )}

<button
      onClick={() => navigate(-1)}
      className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md shadow hover:bg-gray-200 transition mt-10"
    >
      <svg
        className="h-5 w-5 mr-2 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Retour
    </button>
        </>
    )
}

export default UserDetails