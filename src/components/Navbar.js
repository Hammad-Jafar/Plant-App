import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0); // Sum of quantities

    return (
        <nav className="navbar">
            <div className="d-flex align-items-center">
                <Link className="text-decoration-none d-flex align-items-center" to="/">
                    <div className="ms-2 me-5">
                        <img className="logo" src={require('../assets/Logo.png')} alt="logo" />
                    </div>
                    <div className="text-white">
                        <h3>Paradise Nursery</h3>
                        <h6>When green meets serenity</h6>
                    </div>
                </Link>
            </div>
            <div className="plants text-white">
                <h3>Plants</h3>
            </div>

            <div className="mx-4">
                <Link to="/cart" className="text-white">
                    <span className="cart-count me-2">{cartCount}</span>
                    <i className="fas fa-shopping-cart cart-icon" />
                </Link>
            </div>

        </nav>
    );
};

