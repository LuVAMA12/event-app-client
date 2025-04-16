import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { AuthContext } from "../context/AuthContext"

const AddService = () => {
    const navigate = useNavigate()
    const { tokenStorage} = useContext(AuthContext)
    const [serviceInfo, setServiceInfo] = useState({
        title: '',
        description: '',
        price: null,
        category: '',
        address: '',
        availability: null,
      
    })
    const handleServiceSubmit = async ( e )=> {
        e.preventDefault()
        try {
            const response = await axios.post(`http://localhost:8000/api/services`, serviceInfo, {
                headers:
                {

                    'Authorization': `Bearer ${tokenStorage}`
                }
            }        
        )

        if(response.status === 201) {
            alert(response.data.message)
            navigate(`/service/${response.data.newService._id}`)
        }
        } catch (error) {
            console.log(error)
        }
    }
    return (
       
        <div className="max-w-3xl mx-auto mt-16 bg-white p-10 rounded-xl shadow-xl ring-1 ring-gray-200">
  <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Créer un Service</h2>

  <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleServiceSubmit}>
  
    <div className="col-span-1">
      <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
      <input type="text" placeholder="Nom du service" required
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" onChange={ e => setServiceInfo({...serviceInfo, title: e.target.value})} />
    </div>


    <div className="col-span-1">
      <label className="block text-sm font-medium text-gray-700 mb-1">Prix (€)</label>
      <input type="number" min="0" placeholder="Ex: 50" required
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"  onChange={ e => setServiceInfo({...serviceInfo, price: e.target.value})} />
    </div>


    <div className="col-span-1">
      <label className="block text-sm font-medium text-gray-700 mb-1" onChange={ e => setServiceInfo({...serviceInfo, category: e.target.value})} >Catégorie</label>
      <input type="text" placeholder="Ex: Jardinage, Dépannage..." required
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
    </div>


    <div className="col-span-1 md:col-span-2">
      <label className="block text-sm font-medium text-gray-700 mb-1" onChange={ e => setServiceInfo({...serviceInfo, address: e.target.value})} >Adresse</label>
      <input type="text" placeholder="Adresse complète" required
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
    </div>

    <div className="col-span-1 md:col-span-2">
      <label className="block text-sm font-medium text-gray-700 mb-1" onChange={ e => setServiceInfo({...serviceInfo, availability: e.target.value})} >Disponibilité</label>
      <input type="text" required
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
    </div>
    
    <div className="col-span-1 md:col-span-2">
      <label className="block text-sm font-medium text-gray-700 mb-1" onChange={ e => setServiceInfo({...serviceInfo, description: e.target.value})} >Description</label>
      <textarea rows="5" placeholder="Décrivez votre service en détail" required
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"></textarea>
    </div>


    <div className="col-span-1 md:col-span-2">
      <button type="submit"
        className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition">
        Créer le service
      </button>
    </div>
  </form>
</div>
    
       
    )
}

export default AddService