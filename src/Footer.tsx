import React from 'react';
import { FaCcPaypal } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";

const Footer: React.FC= () => {

    return (
        <footer className="footer">
            <ul className="footer__payment-methods-icons">
                <li className="footer__payment-methods-icons__paypal-icon"><FaCcPaypal/></li>
                <li className="footer__payment-methods-icons__mastercard-icon"><FaCcMastercard/></li>
                <li className="footer__payment-methods-icons__visa-icon"><FaCcVisa/></li>
            </ul>
            <p className="footer__copyright">Copyright © 2020 by Philip Chyslou. All rights reserved.</p>
        </footer>
    );
};

export default Footer;