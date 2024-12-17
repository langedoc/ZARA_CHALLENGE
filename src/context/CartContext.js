'use client';

import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Initialize the cart from local storage
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);
     
    // Save cart in local storage when cart changes 
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // To add item into the cart
    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item])
    };

    // To remove item from the cart
    const removeFromCart = (itemId) => {
        setCart((prevCart) => {
            // The logic for cases when the same item is added more than once
            const index = prevCart.findIndex((item) => item.id === itemId); // Finds index of the item in the prevCart
            if (index !== -1) {
                const newCart = [...prevCart]; // If the item is found creates new array
                newCart.splice(index, 1); // Removes item at the found index
                return newCart;
            }
            return prevCart;
        });
    };

    return (
        <CartContext.Provider value = {{ cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.node,
};