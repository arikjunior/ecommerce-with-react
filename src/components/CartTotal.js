import React from 'react';
import { Link } from 'react-router-dom';


export default function CartColumn({ value }) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-10 mt-2 ms-sm-5 ms-md-auto col-sm-8 text-capitalize text-end">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-5 px-5" type="button" onClick={() => clearCart()}>
                                clear Cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">subtotal: </span>
                            <strong>Rp. {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">tax: </span>
                            <strong>Rp. {cartTax}</strong>
                        </h5>
                        <h5 className='mb-5'>
                            <span className="text-title">total: </span>
                            <strong>Rp. {cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
