import ItemCount from "../ItemCount/ItemCount"
import './styles.css'

function ItemDetail({ item }) {
    return (
        <>
            <div className ="col-lg-12">
                <div className="card card-mandala border-secondary m-3">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={item.img} className="img-fluid rounded-start" alt="mandala-cakes" />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text">Stock: {item.stock}</p>
                                <p className="card-text">Price: ${item.price}</p>
                                <div className="d-grid gap-2">
                                    <ItemCount stock={item.stock}/>
                                    <button className="btn btn-lg btn-secondary m-1" type="button">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </>
    )
}

export default ItemDetail


    
