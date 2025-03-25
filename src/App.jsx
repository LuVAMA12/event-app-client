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


{/* <div className="lg:w-4/5 mx-auto flex flex-wrap" key={index}>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{service.category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{service.title}</h1>
        <div className="flex mb-4">
          
        </div>
        <p className="leading-relaxed">{service.description}</p>
        
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">{service.price} €</span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Réservez</button>
        </div>
      </div>
    </div> */}