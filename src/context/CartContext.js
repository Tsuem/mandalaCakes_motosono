import { createContext, useState } from "react";
import toast from 'react-hot-toast';

export const CartContext = createContext();

export const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            toast.error(`${item.name} is already in your Cart.`, {
                duration: 2500,
            });
        } else {
            setCart([...cart, { ...item, quantity }]);
            toast.success('Added to your Cart.');
            console.log('cart', [...cart, {...item, quantity}]);
        }
        console.log(quantity);
    };
  

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    /* const clear = () => {
        setCart([])
    }

    const removeItem = (itemId) => {
        if (itemID === item.id) {
            setCart.splice(itemId, 1)
        }
    } */

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}