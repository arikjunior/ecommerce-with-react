import styled from 'styled-components';

export const ButtonNavbar = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    border:none;
    background: transparent;
    color: var(--mainWhite);
    border-radius: 10px;
    &:hover {
        background: var(--mainDark);
        color: var(--mainRed);
    }
`;