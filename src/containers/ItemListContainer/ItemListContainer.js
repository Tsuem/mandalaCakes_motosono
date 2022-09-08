import React from 'react'
import { useState,useEffect } from 'react'
import getFetch from '../../data/Data'
import ItemList from "../../components/ItemList/ItemList";

const ItemListContainer = ({welcome}) => {
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        getFetch
        .then((resp)=>setData(resp))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[])

    return (
        <>
            <h1 className="m-3">{welcome}</h1>
            <div className="container p-4">
                {
                    loading ? <h2>Loading...</h2> :
                    <ItemList products={data}/>
                }
            </div>
        </> 
    )
}

export default ItemListContainer;