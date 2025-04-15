import axios from "axios"
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"

const AddService = () => {

    const { tokenStorage} = useContext(AuthContext)
    const [serviceInfo, setServiceInfo] = useState({
        title: '',
        description: '',
        price: null,
        category: '',
        address: '',
        availability: null,
      
    })
console.log(serviceInfo)
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
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>

        <div className="flex columns-2 justify-items-start mt-10">

        <form action="" onSubmit={handleServiceSubmit}>
            <label htmlFor="">Title</label>
            <input type="text" onChange={ e => setServiceInfo({...serviceInfo, title: e.target.value})}/>
            <label htmlFor="">Description</label>
            <input type="text" onChange={ e => setServiceInfo({...serviceInfo, description: e.target.value})}/>
            <label htmlFor="">Price</label>
            <input type="number" onChange={ e => setServiceInfo({...serviceInfo, price: e.target.value})}/>
            <label htmlFor="">Category</label>
            <input type="text" onChange={ e => setServiceInfo({...serviceInfo, category: e.target.value})}/>
            <label htmlFor="">Address</label>
            <input type="text" onChange={ e => setServiceInfo({...serviceInfo, address: e.target.value})}/>
            <label htmlFor="">Availability</label>
            <input type="text" onChange={ e => setServiceInfo({...serviceInfo, availability: e.target.value})}/>

            <input type="submit" value='Add service'/>
        </form>
        </div>
        </>
    )
}

export default AddService