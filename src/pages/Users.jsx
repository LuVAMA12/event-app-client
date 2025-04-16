import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router"

const Users = () => {

    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/users')
            setUsers(response.data)
    
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

useEffect(() => {
    fetchUsers()
}, [])
    return (
        <>
            <h1>I'm the users page</h1>
            <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Liste des utilisateurs</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Photo</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600 ">Nom</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600">Email</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {!loading && users && users.map((user) => (
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={user.image ? `http://localhost:8000/${user.image}` : `https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png`}
                    alt={user.first_name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                  {user.first_name} {user.last_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                <Link to={`/user/${user._id}`}>
                  <button className="text-sm text-indigo-600 hover:underline mr-4">Voir</button>
                  </Link>
                  <button className="text-sm text-red-500 hover:underline">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </>
    )
}

export default Users