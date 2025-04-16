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
          <div className="max-w-4xl mx-auto mt-10 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={service.image ? `http://localhost:8000/${service.image}`: `https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png`}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-8 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h2>
                    <p className="text-gray-600 text-sm mb-2"><span className="font-semibold">Catégorie :</span> {service.category}</p>
                    <p className="text-gray-600 text-sm mb-2"><span className="font-semibold">Adresse :</span> {service.address}</p>
                    <p className="text-gray-600 text-sm mb-4"><span className="font-semibold">Prix :</span> {service.price} €</p>

                    <p className="text-gray-700 text-base mb-6">{service.description}</p>

                    <div className="flex items-center space-x-4 mb-6">
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full ${
                          service.availability ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {service.availability ? 'Disponible' : 'Indisponible'}
                      </span>

                      {/* <span className="text-xs text-gray-500">ID du créateur : {service.userID}</span> */}
                    </div>
                  </div>
                  {service.availability && (
                    <button
                      className="w-full mt-4 bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg shadow-md transition"
                      onClick={() => alert('Réservation en cours...')}
                    >
                      Réserver ce service
                    </button>
                  )}
              </div>
          </div>
        </div>}
      </>
    )
}

export default ServiceDetails