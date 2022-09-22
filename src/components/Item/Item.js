import '../Item/styles.css'
import { Link } from 'react-router-dom';
/* import ItemCount from '../ItemCount/ItemCount';
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast'; */

function Item({ data }) {
/*     const [initialState, setInitialState] = useState(1);
    const [initialButton, setInitialButton] = useState(false);
    const [initialCount, setInitialCount] = useState(true);


    const onAdd = () => {
        toast.success('Added to your Cart.');
        setInitialButton(true)
        setInitialCount(false)

    }*/

    return (
        <div className="col-md-12 col-lg-6 col-xl-4">
            <div className="card border-secondary m-3">
                <h3 className="card-header">{data.name}</h3>
                <div className="card-body justify-content-center">
                    <Link key={data.id} to={`/item/${data.id}`}>
                        <img className="card-mandala p-4" src={data.img} alt="mandala-cakes" />
                    </Link>
                    <hr/>
                    <h4>Price: ${data.price}</h4>                    
                </div>
            </div>
        </div>
    )
}

export default Item;