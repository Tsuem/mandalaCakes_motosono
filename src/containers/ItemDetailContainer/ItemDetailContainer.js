import { getItem } from "../../data/Data";
import { useState,useEffect } from 'react'
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const[item,setItem]=useState([])
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        getItem
        .then((resp)=>setItem(resp))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[])

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