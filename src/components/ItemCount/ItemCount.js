import './styles.css';

function ItemCount ( {stock, count, setCount} ) {

    const toAdd = () => count < stock && setCount(count + 1);

    const toSubtract = () => count > 1 && setCount(count - 1);

    return (
        <div className="d-inline-flex justify-content-center">
            <button onClick={toSubtract} type="button" className="btn btn-secondary m-3"> - </button>
            <h3 className="m-3">{count}</h3>
            <button onClick={toAdd} type="button" className="btn btn-secondary m-3"> + </button>
        </div>         
    )
}

export default ItemCount;