import { getFetch } from "../../data/Data";
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const[item,setItem]=useState([])
    const[loading,setLoading]=useState(true)

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        getFetch
        .then((resp)=> {
            const product = resp.find(product => product.id === parseInt(id))
            if (product) {
                setItem(product)
                setLoading(false)
            } else {
                navigate("/error")
            }
        })
        .catch(err=>console.log(err))
    },[id])

    return (
        <>
            <div className="container p-4">
                {
                    loading ? <h2>Loading...</h2> :
                    <ItemDetail item={item}/>
                }
            </div>
        </> 
    )
}

export default ItemDetailContainer