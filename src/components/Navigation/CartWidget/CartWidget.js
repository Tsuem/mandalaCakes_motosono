import React from "react";
import { Cart3 } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';

const CartWidget = () => {
    return (
        <div >
            <Button ><Cart3 size={50} /></Button>
        </div>
    )
}

export default CartWidget;