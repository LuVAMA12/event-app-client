import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const ServiceDetails = () => {
    const {id} = useParams()
    const [ service, setService ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    const fetchServiceByID = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/service/${id}`)
            if(response.status === 200) {
                setService(response.data)
            }
        } catch (error) {
            console.log(error)   
        }
        finally{
            setLoading(false)

        }
    }

    useEffect(()=> {
        fetchServiceByID()
    }, [])
    return(
        <>
        {!loading&& service &&
             <div className="col-span-1 rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 mt-16 mb-10">
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
            }
        </>
    )
}

export default ServiceDetails