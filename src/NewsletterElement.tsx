import React from 'react';

const NewsletterElement: React.FC= () => {

    return (
        <div className="newsletter">
            <h3 className="newsletter-title">Newsletter</h3>
            <p className="newsletter__joining-mailing-list">Join our mailing list</p>
            <input type="text" className="newsletter__enter-email-input" placeholder="your@email.com"/>
            <button className="newsletter__submit-email-button">Subscribe</button>
            <ul className="newsletter__social-icons">
                <li className="newsletter__social-icons__facebook-icon"></li>
                <li className="newsletter__social-icons__instagram-icon"></li>
                <li className="newsletter__social-icons__twitter-icon"></li>
                <li className="newsletter__social-icons__linkedin-icon"></li>
            </ul>
        </div>
    );
};

export default NewsletterElement;