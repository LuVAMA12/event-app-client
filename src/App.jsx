import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
function App() {
const [services, setServices] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

  const fetchServices = async () => {
    try {
      const response  = await axios.get(`http://localhost:8000/api/services`)
      if(response.status === 200) {
        setServices(response.data)
      }
    } catch (err) {
      setError(err.code)
      if(error) {
        console.log(error)
      }
    }
    finally{
      setLoading(false)
    }
  }
  useEffect(()=> {
    fetchServices()
  },[])


  console.log(services)
  return (
    <>
    <h1 className="text-3xl font-bold  mt-16 mb-10">Hello this is my event App</h1>


    
    
          
      {services && !loading && services.map( (service, index) => {
        return (

          <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200" key={index}>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-semibold text-green-600">{service.price} €</span>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{service.category}</span>
            </div>
          </div>
          <div className="px-4 py-2">
            <button className="w-full py-2 px-4 bg-gray-900 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Réservez
            </button>
          </div>
        </div>
        )
      })}
    </>
  )
}

export default App


