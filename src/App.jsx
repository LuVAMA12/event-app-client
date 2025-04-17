import { useContext } from 'react'
import { Link } from "react-router"

import './App.css'
import { ServicesContext } from './context/ServicesContext.jsx'
function App() {


  const { services } = useContext(ServicesContext)

 

  return (
    <>
    <h1 className="text-3xl font-bold  mt-16 mb-10">Hello this is my event App</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10' >
      {services && services.map( service => {
        return (
          <Link to={`/service/${service._id}`}  key={service._id}>
          <div className="col-span-1 rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 ">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <div className="flex items-center justify-between mt-4">
              <p className="text-lg font-semibold text-green-600">{service.price} €</p>
              <p className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{service.category}</p>
            </div>
          </div>
          <div className="px-4 py-2">
            {service.availability === true && <button className="w-full py-2 px-4 bg-gray-900 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Réservez
            </button>}
            {service.availability === false && <button className="px-6 py-2 rounded-lg text-white bg-gray-400 cursor-not-allowed" disabled> Réservé </button>}
          </div>
        </div>
          </Link>
        )
      })}
      </div>  
    </>
  )
}

export default App
