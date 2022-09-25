import '../Item/styles.css'
import { Link } from 'react-router-dom';

function Item({ data }) {

    return (
        <div className="col-md-12 col-xl-6 col-xxl-4">
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