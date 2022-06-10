import React from "react";
import styled from 'styled-components';

class Footer extends React.Component {
    render() {
        return (
            <FooterWrapper>
                <footer>
                    <div className="footer-inner">
                        <div className="footer-logo">
                            <img src="logo512.png" alt="" />
                            <p>Toko Online with React</p>
                        </div>
                        <ul className="footer-list">
                            <li>Pelayanan</li>
                            <li>Bantuan</li>
                            <li>Hubungi Kami</li>
                        </ul>
                    </div>
                </footer>
            </FooterWrapper>
        );
    }
}
export default Footer;

const FooterWrapper = styled.div`
footer {
    padding: 40px 80px;
    background-color: rgb(29, 26, 26);
  }
  .footer-inner {
    display: flex;
    flex-direction: space-around;
  }
  
  .footer-logo {
    display: inline-block;
    text-align: center;
  }
  
  .footer-logo img {
    height: 40px;
  }
  
  .footer-logo p {
    color: #b1c0c0;
    font-size: 18px;
  }
  .footer-list {
      position:absolute;
      right: 80px;
  }
  .footer-inner li {
    color: #2b546a;
    display: inline-block;
    margin-top: 30px;
    padding-left: 16px;
  }

  @media screen and (max-width: 1078px) {
        footer{
            padding: 40px;
        }
    }     
@media screen and (max-width: 764px) {
        .footer-inner, .footer-inner ul {
            display:flex;
            flex-direction: column;
            justify-content: center;
        
        }
        .footer-list{
            position: relative;
        }
        .footer-inner li {
            color: #2b546a;
            display: inline-block;
            margin-left:110px;
            text-align: center;
          }
    } 
`;