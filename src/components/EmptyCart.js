import React from 'react';
import styled from 'styled-components';


export default function CartColumn() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <EmptyCart className='mb-5'>
                        <h1>Your cart is Empty</h1>
                    </EmptyCart>
                </div>
            </div>
        </div>
    );
};

const EmptyCart = styled.div`
    h1 {
        text-align:center;
        padding-bottom: 37%;
    }

`;