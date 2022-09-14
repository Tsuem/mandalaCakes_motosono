import ItemCount from '../ItemCount/ItemCount';
import './styles.css'
import { Link } from 'react-router-dom';

function Item ({ data }) {

    return (
        <div className="col-md-12 col-lg-6 col-xl-4">
            <div className="card border-secondary m-3">
                <h3 className="card-header">{data.name}</h3>
                <div className="card-body justify-content-center">
                    <Link key={data.id} to={`/item/${data.id}`}>
                        <img className="card-mandala p-4" src={data.img} alt="mandala-cakes"/>
                    </Link>
                    <h5 >Price: ${data.price}</h5>
                    <h6>Stock: {data.stock}</h6>
                    <ItemCount stock={data.stock}/>
                    <div className="d-grid gap-2">
                        <button className="btn btn-lg btn-secondary m-1" type="button">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;