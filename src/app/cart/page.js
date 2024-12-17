'use client';

import React from "react";
import styles from './page.module.css';
import { useCart } from '../../context/CartContext';
import CartItem from '../components/CartItem/CartItem';

export default function CartPage() {
    const { cart } = useCart();
    // const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className={styles.cart_container}>
            <div className={styles.title_wrapper}>
                <h1>CART ({cart.length})</h1>
            </div>
            <div className={styles.items_list}>
                {cart.map((item, index) => (
                    <CartItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
}