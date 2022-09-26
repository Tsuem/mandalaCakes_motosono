import Item from '../Item/Item'

const ItemList = ({ list }) => {
    return (
        <div className="row">
            { list.map((cake) => <Item key={cake.id} data={cake}/>) }
        </div>
    )
}

export default ItemList;