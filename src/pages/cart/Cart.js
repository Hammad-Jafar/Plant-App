import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/slice/CartSlice';
import { Navbar } from '../../components/Navbar';
import './Cart.css';
//hhhh
export const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };

    const handleIncreaseQuantity = (item) => {
        dispatch(increaseQuantity(item));
    };

    const handleDecreaseQuantity = (item) => {
        dispatch(decreaseQuantity(item));
    };

    const calculateTotalCost = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleCheckout = () => {
        alert('Coming soon!');
    };

    return (
        <>
            <Navbar />
            <div className="cart-container">
                <h2 className="cart-title">Shopping Cart</h2>
                <div className="cart-total">
                    <h4>Total: ${calculateTotalCost()}</h4>
                </div>
                <div className="cart-content">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <div className="cart-items">
                            {cartItems.map((item, index) => (
                                <div key={index} className="cart-item-card">
                                    <div className="cart-item-image">
                                        <img
                                            src={item.imgUrl}
                                            className="card-img-top"
                                            alt={item.title}
                                        />
                                    </div>
                                    <div className="cart-item-details">
                                        <h2 className="cart-item-title">{item.title}</h2>
                                        <p className="cart-item-price">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                        <div className="cart-item-quantity">
                                            <button
                                                onClick={() => handleDecreaseQuantity(item)}
                                                className="btn-quantity"
                                            >
                                                -
                                            </button>
                                            <span className="cart-item-quantity-count p-4">{item.quantity}</span>
                                            <button
                                                onClick={() => handleIncreaseQuantity(item)}
                                                className="btn-quantity"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => handleRemoveFromCart(item)}
                                            className="btn-remove"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="cart-actions">
                    <Link to="/product-listing">
                        <button className="btn-continue-shopping">Continue Shopping</button>
                    </Link>
                    <button className="btn-checkout" onClick={handleCheckout}>Checkout</button>
                </div>
            </div>
        </>
    );
};
