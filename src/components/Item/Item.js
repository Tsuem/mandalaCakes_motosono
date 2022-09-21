import ItemCount from '../ItemCount/ItemCount';
import { useState } from "react";
import './styles.css'
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Item({ data }) {
    const [initialState, setInitialState] = useState(1);
    const [initialButton, setInitialButton] = useState(false);

    const notify = () => {
        toast.success('Added to your Cart.');
        setInitialButton(true)
    }

    const handleClick = () => {
        console.log(initialState);
    }

    return (
        <div className="col-md-12 col-lg-6 col-xl-4">
            <div className="card border-secondary m-3">
                <h3 className="card-header">{data.name}</h3>
                <div className="card-body justify-content-center">
                    <Link key={data.id} to={`/item/${data.id}`}>
                        <img className="card-mandala p-4" src={data.img} alt="mandala-cakes" />
                    </Link>
                    <h5 >Price: ${data.price}</h5>
                    <h6>Stock: {data.stock}</h6>
                    <ItemCount stock={data.stock} initialState={initialState} setInitialState={setInitialState} />
                    <div className="d-grid gap-2">
                        {(initialButton === false) ? (<button onClick={notify} className="btn btn-lg btn-secondary m-1" type="button">Add to Cart</button>) : (<Link to={'/cart'}> <button onClick={handleClick} className="btn btn-lg btn-secondary m-1" type="button">Go to Cart</button> </Link>)}
                        <Toaster position="top-right" reverseOrder={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;