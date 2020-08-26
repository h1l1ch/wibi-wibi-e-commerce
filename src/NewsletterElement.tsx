import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const NewsletterElement: React.FC= () => {

    return (
        <div className="newsletter">
            <h3 className="newsletter-title">Newsletter</h3>
            <p className="newsletter__joining-mailing-list">Join our mailing list</p>
            <input className="newsletter__enter-email-input" type="text"  placeholder="your@email.com"/>
            <button className="newsletter__submit-email-button">Subscribe</button>
            <ul className="newsletter__social-icons">
                <li className="newsletter__social-icons__facebook-icon"><FaFacebookSquare/></li>
                <li className="newsletter__social-icons__instagram-icon"><FaInstagram/></li>
                <li className="newsletter__social-icons__twitter-icon"><FaTwitter/></li>
                <li className="newsletter__social-icons__linkedin-icon"><FaLinkedin/></li>
            </ul>
        </div>
    );
};

export default NewsletterElement;