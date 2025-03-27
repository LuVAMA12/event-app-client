import axios from "axios"
import { useEffect, useState } from "react"


function Profile() {

  const [infoUser, setInfoUser] = useState(null)

  const fetchAPI = async () => {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.get('http://localhost:8000/api/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
   }
   useEffect(() => {
     fetchAPI()
   }, [])

  return (
    <>
      <h1 className="mt-16">Hello my name is john</h1>
    </>
  )
}

export default Profile
