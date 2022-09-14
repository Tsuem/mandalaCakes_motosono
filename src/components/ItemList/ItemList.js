import React from 'react'
import Item from '../Item/Item'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemList = ({ products }) => {
    const { id } = useParams()
    const[items,setItems]=useState([])

    useEffect(()=>{
        setItems([])
        id ? productsByCategory(products, id) : setItems(products)
    },[id])

    const productsByCategory = (arr, category) => {
        return arr.map(product => {
            if (product.category === category) {
                return setItems(items => [...items, product])
            } else {
                return null
            } 
        })
    }

    return (
        <div className="row">
            { id && <h1>Categoría: {id}</h1> } 
            { items.map((cake) => <Item key={cake.id} data={cake}/>) }
        </div>
    )
}

export default ItemList;