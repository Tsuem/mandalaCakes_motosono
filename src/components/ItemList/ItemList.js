import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ products }) => {
    return (
        <div className="row">
            {
                products.map((cake) => <Item key={cake.id} data={cake}/>)
            }
        </div>
    )
}

export default ItemList;