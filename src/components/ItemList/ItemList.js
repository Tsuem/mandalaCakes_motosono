import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ products }) => {
    return (
        <>
            {
                products.map((cake) => <Item key={cake.id} data={cake}/>)
            }
        </>
    )
}

export default ItemList;