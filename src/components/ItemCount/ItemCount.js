import { useState } from "react";
/* import cheeseCake from '../.img/CheeseCake.png'; */
import './styles.css';

function ItemCount ( {stock} ) {

    const [initialState, setInitialState] = useState(1);

    const suma = () => initialState < stock ? setInitialState(initialState + 1) : alert('Se alcanzó el stock máximo');

    const resta = () => initialState > 1 && setInitialState(initialState - 1);

    return (
        <div className="d-inline-flex justify-content-center">
            <button onClick={resta} type="button" className="btn btn-secondary m-3"> - </button>
            <h3 className="m-3">{initialState}</h3>
            <button onClick={suma} type="button" className="btn btn-secondary m-3"> + </button>
        </div>         
    )
}

export default ItemCount;