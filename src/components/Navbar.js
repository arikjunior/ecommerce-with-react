import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../Method Draw Image.png";
import { ButtonNavbar } from './ButtonNavbar';

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className='navbar-brand' />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ms-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ms-auto">
                    <ButtonNavbar>
                        <span className="me-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        MY CART
                    </ButtonNavbar>
                </Link>
            </NavWrapper>
        );
    }
}

export default Navbar;

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;