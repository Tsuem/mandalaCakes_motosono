import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";


function ItemDetail({ item }) {
    const [initialState, setInitialState] = useState(1);
    const [initialButton, setInitialButton] = useState(false);
    const [initialCount, setInitialCount] = useState(true);

    const notify = () => {
        toast.success('Added to your Cart.');
        setInitialButton(true)
        setInitialCount(false)
    }
    
    const handleClick = () => {
        console.log(initialState);
    }

    return (
        <>
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
                                    {initialCount && <ItemCount stock={item.stock} initialState={initialState} setInitialState={setInitialState} />}
                                    { (initialButton === false) ? ( <button onClick={notify} className="btn btn-lg btn-secondary m-1" type="button">Add to Cart</button> )  :  (<Link to={'/cart'}> <button onClick={handleClick} className="btn btn-lg btn-secondary m-1" type="button">Go to Cart</button> </Link> ) }
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



