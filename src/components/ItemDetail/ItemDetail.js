import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { CartContext } from "../../context/CartContext";
import { ArrowLeft } from 'react-bootstrap-icons';


function ItemDetail({ item }) {
    const { addToCart } = useContext(CartContext);
    const [count, setCount] = useState(1);
    const [initialButton, setInitialButton] = useState(false);
    const [initialItemCount, setInitialItemCount] = useState(true);


    const onAdd = (item, count) => {
        setInitialButton(true)
        setInitialItemCount(false)
        addToCart(item, count)
    }

    console.log(count);

    return (
        <>
            <Link to={'/'} className="d-flex justify-content-start m-3 text-decoration-none">
                <h4 className="text-secondary"><ArrowLeft className="me-2" />Continue Shopping</h4>
            </Link>
            <div className="d-flex justify-content-center m-4">
                <div className="card border-secondary m-3 w-auto" style={{ maxWidth: '600px' }}>
                    <div className="row g-0">
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <img src={item.img} className="img-fluid rounded-start p-3" alt="mandala-cakes" />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h3 className="card-title">{item.name}</h3>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text">Stock: {item.stock}</p>
                                <p className="card-text">Price: ${item.price}</p>
                                <div className="d-grid gap-2">
                                    {initialItemCount && <ItemCount stock={item.stock} count={count} setCount={setCount} />}
                                    {(initialButton === false) ?
                                        (<button onClick={() => onAdd(item, count)} className="btn btn-lg btn-secondary m-1" type="button">Add to Cart</button>) :
                                        (<Link to={'/cart'}> <button className="btn btn-lg btn-secondary m-1" type="button">Go to Cart</button> </Link>)}
                                    <Toaster position="top-right" reverseOrder={false} />
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



