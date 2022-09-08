import ItemCount from '../ItemCount/ItemCount';
import './styles.css'

function Item ({ data }) {

    return (
        <>
            <div className="card border-secondary m-3">
                <h3 className="card-header">{data.nombre}</h3>
                <div className="card-body justify-content-center">
                    <img className="card-mandala" src={data.imagen} alt="mandala-cheeseCake"/>
                    <h5 className="m-1">Precio: {data.precio}</h5>
                    <h6 className="m-1">Stock: {data.stock}</h6>
                    <ItemCount stock={data.stock}/>
                    <div className="d-grid gap-2">
                        <button className="btn btn-lg btn-secondary m-1" type="button">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;