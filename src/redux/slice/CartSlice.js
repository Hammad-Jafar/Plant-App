import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartCount: 0,
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item.title === action.payload.title)
            if (!existingItem) {
                state.cartItems.push({ ...action.payload, quantity: 1 })
                state.cartCount += 1
                saveCartToLocalStorage(state.cartItems)
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.title !== action.payload.title);
            state.cartCount -= action.payload.quantity;
            saveCartToLocalStorage(state.cartItems);
        },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.title === action.payload.title);
            if (item) {
                item.quantity += 1;
                saveCartToLocalStorage(state.cartItems);
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.title === action.payload.title);
            if (item) {
                item.quantity = Math.max(0, item.quantity - 1);
                if (item.quantity === 0) {
                    state.cartCount -= 1;
                }
                saveCartToLocalStorage(state.cartItems);
            }
        },
    },
});


export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
