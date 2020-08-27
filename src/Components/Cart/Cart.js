import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart ;
    const totalPrice = cart.reduce((total, crse) => total+crse.price , 0) ;

    const tax = (totalPrice / 10).toFixed(2) ;
    const grandTotal = (totalPrice + Number(tax)).toFixed(2) ;

    return (
        <div>
            <h2 style={{color:'purple'}}>Order Summary</h2>
            <hr/>
            <br/>
            <p>Total Course Added: {cart.length}</p>
            <p>Course Price: ${totalPrice}</p>
            <p>Tax + Vat: ${tax}</p>
            <button className="button">Total Price: ${grandTotal}</button>

        </div>
    );
};

export default Cart;