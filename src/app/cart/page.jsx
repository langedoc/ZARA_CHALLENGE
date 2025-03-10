'use client';

import React, { useEffect, useState } from "react";
import styles from './page.module.css';
import { useCart } from '../../context/CartContext';
import CartItem from '../components/CartPage/CartItem/CartItem';
import Link from 'next/link';

export default function CartPage() {
    const { cart, removeFromCart } = useCart();
    const [isClient, setIsClient] = useState(false);

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

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
                {isClient && window.innerWidth > 480 ? ( // Desctop rendering
                    <>
                        <Link href="/" aria-label="Continue shopping">
                            <button className={`${styles.continue} ${styles.button}`}>
                                <h4>CONTINUE SHOPPING</h4>
                            </button>
                        </Link>
                        <div className={styles.total_pay}>
                            <div className={styles.total}>
                                <h3>TOTAL</h3>
                                <h3>{totalPrice} EUR</h3>
                            </div>
                            <button className={`${styles.pay} ${styles.button}`}>
                                <h3>PAY</h3>
                            </button>
                        </div>
                    </>
                ) : ( // Mobile rendering
                    <>
                        <div className={styles.total}>
                            <h3>TOTAL</h3>
                            <h3>{totalPrice} EUR</h3>
                        </div>
                        <div className={styles.buttons}>
                            <Link href="/" aria-label="Continue shopping">
                                <button className={`${styles.continue} ${styles.button}`}>
                                    <h4>CONTINUE SHOPPING</h4>
                                </button>
                            </Link>
                            <button className={`${styles.pay} ${styles.button}`}>
                                <h3>PAY</h3>
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
