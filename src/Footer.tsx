import React from 'react';

const Footer: React.FC= () => {

    return (
        <footer className="footer">
            <ul className="footer__payment-methods-icons">
                <li className="footer__payment-methods-icons__alipay-icon"></li>
                <li className="footer__payment-methods-icons__paypal-icon"></li>
                <li className="footer__payment-methods-icons__mastercard-icon"></li>
                <li className="footer__payment-methods-icons__american-express-icon"></li>
                <li className="footer__payment-methods-icons__visa-icon"></li>
            </ul>
            <p className="footer__copyright">Copyright © 2020 by Philip Chyslou. All rights reserved.</p>
        </footer>
    );
};

export default Footer;