import { createContext, useState } from "react";
import toast from 'react-hot-toast';

export const CartContext = createContext();

export const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [qty, setQty] = useState(0);

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            toast.error(`${item.name} is already in your Cart.`, {
                duration: 2500,
                position: "top-center"
            });
        } else {
            setCart([...cart, { ...item, quantity }]);
            toast.success('Added to your Cart.', {
                position: "top-center"
            });
            console.log('cart', [...cart, { ...item, quantity }]);
            calculateTotalPrice(item.price, quantity);
            setQty(quantity + qty)
        }
    };


    const isInCart = (id) => {
        return cart.some((item) => item.id === id);

    };

    const calculateTotalPrice = (price, quantity) => {
        setTotal(price * quantity + total)
    }

    const removeItem = (productId) => {
        let newArray = [];
        cart.forEach((product) => {
            if (product.id === productId) {
                setTotal(total - product.price * product.quantity)
                setQty(qty - product.quantity)
            } else {
                newArray.push(product)
            }
        });
        setCart(newArray);
    }

    const clearCart = () => {
        setCart([]);
        setTotal(0);
        setQty(0);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, total, qty, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}