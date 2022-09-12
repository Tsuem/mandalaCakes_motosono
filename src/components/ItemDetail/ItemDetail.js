function ItemDetail ({item}) {
    return (
        <>
            <div className="col-md-12 col-lg-6 col-xl-4">
                <div className="card border-secondary m-3">
                    <h3 className="card-header">{item.name}</h3>
                    <div className="card-body justify-content-center">
                        <img className="card-mandala p-4" src={item.img} alt="mandala-cakes"/>
                        <p className="card-text">Description: {item.description}</p>
                        <h6 className="m-1">Stock: {item.stock}</h6>
                        <h5 className="m-1">Price: ${item.price}</h5>
                        {/* <ItemCount stock={item.stock}/> */}
                        <div className="d-grid gap-2">
                            <button className="btn btn-lg btn-secondary m-1" type="button">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail