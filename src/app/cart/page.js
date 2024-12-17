'use client';

import React, { useEffect, useState } from "react";
import styles from './page.module.css';
import { useCart } from '../../context/CartContext';
import CartItem from '../components/CartItem/CartItem';
import Link from 'next/link';

export default function CartPage() {
    const { cart, removeFromCart } = useCart();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Set isClient to true after the component mounts
        setIsClient(true);
    }, []);

    return (
        <div className={styles.cart_container}>
            <div className={styles.title_wrapper}>
                <h1>CART ({cart.length})</h1>
            </div>
            <div className={styles.items_list}>
                {isClient && cart.length > 0 ? ( // Only render cart items if on client and cart is not empty
                    cart.map((item) => (
                        <CartItem key={item.id} item={item} onRemove={() => removeFromCart(item.id)} />
                    ))
                ) : null}
            </div>
            <div className={styles.bottom_content}>
                <Link href="/" aria-label="Continue shopping">
                    <button className={styles.continue}>
                        <h4>CONTINUE SHOPPING</h4>
                    </button>
                </Link>
            </div>
        </div>
    );
}