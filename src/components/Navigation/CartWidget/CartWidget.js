import React from "react";
import { Cart3 } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

const CartWidget = () => {
    const { qty } = useContext(CartContext);

    return (
        <div>
            <Link to={'/cart'} className="btn btn-secondary border p-3 me-4 g-col-2">
                <div className="d-flex align-items-center">
                    {qty !== 0 && <h2 className="me-2 mt-2 text-white">{qty}</h2>}
                    <Cart3 size={50} />
                </div>
            </Link>
        </div>
    )
}

export default CartWidget;