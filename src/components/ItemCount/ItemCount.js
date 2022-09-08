import { useState } from "react";
import './styles.css';

function ItemCount ( {stock} ) {

    const [initialState, setInitialState] = useState(1);

    const toAdd = () => initialState < stock ? setInitialState(initialState + 1) : alert('You have reached the maximum stock');

    const toSubtract = () => initialState > 1 && setInitialState(initialState - 1);

    return (
        <div className="d-inline-flex justify-content-center">
            <button onClick={toSubtract} type="button" className="btn btn-secondary m-3"> - </button>
            <h3 className="m-3">{initialState}</h3>
            <button onClick={toAdd} type="button" className="btn btn-secondary m-3"> + </button>
        </div>         
    )
}

export default ItemCount;