import { useState } from "react";
import cheeseCake from '../../cheeseCake.png';
import './styles.css';

function ItemCount (props) {

    const [initialState, setInitialState] = useState(props.initial);

    const suma = () => initialState < props.stock ? setInitialState(initialState + 1) : alert('Se alcanzó el stock máximo');

    const resta = () => initialState >= 2 && setInitialState(initialState - 1);

    return (
        <div className="card border-secondary m-3">
            <h3 className="card-header">Cheese Cake con Frutos Rojos</h3>
            <div className="card-body justify-content-center">
                <img className="cheeseCake" src={ cheeseCake } alt="mandala-cheeseCake"/>
                <h5 className="m-1">Stock: {props.stock}</h5>
                <div className="d-inline-flex justify-content-center">
                    <button onClick={resta} type="button" className="btn btn-secondary m-3"> - </button>
                    <h3 className="m-3">{initialState}</h3>
                    <button onClick={suma} type="button" className="btn btn-secondary m-3"> + </button>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-lg btn-secondary m-1" type="button">Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;