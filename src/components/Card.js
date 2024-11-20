import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice/CartSlice';

export const Card = ({ title, imgUrl, description, price }) => {
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const isItemInCart = storedCartItems.some(item => item.title === title);
        setIsAddedToCart(isItemInCart);
    }, [title, isAddedToCart]);


    const handleAddToCart = () => {
        const storedCartState = JSON.parse(localStorage.getItem('cartState')) || {};

        const updatedCartState = { ...storedCartState, [title]: true };

        localStorage.setItem('cartState', JSON.stringify(updatedCartState));

        dispatch(addToCart({
            title,
            imgUrl,
            description,
            price,
        }));
        setIsAddedToCart(true);
    };

    return (
        <div className="card text-center" style={{ width: '18rem', minHeight: '300px' }}>
            <h5 className="card-title">{title}</h5>
            <img
                src={imgUrl}
                className="card-img-top"
                alt="product"
                style={{ height: '150px', width: '100%', objectFit: 'contain' }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
                <p className="card-text">{description}</p>
                <p className="card-text">{price}$</p>
                <button
                    className="btn btn-success"
                    onClick={handleAddToCart}
                    disabled={isAddedToCart}
                >
                    {isAddedToCart ? "Added to cart" : "Add to cart"}
                </button>
            </div>
        </div>
    );
};
