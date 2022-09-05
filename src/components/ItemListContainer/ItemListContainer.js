import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({welcome}) => {
    const stock = 5
    const initial = 1

    return (
        <div>
            <h1 className="m-3">{welcome}</h1>
            <ItemCount stock={stock} initial={initial} />
        </div> 
    )
}

export default ItemListContainer;