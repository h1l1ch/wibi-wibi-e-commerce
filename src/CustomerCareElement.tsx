import React from 'react';

const CustomerCareElement: React.FC= () => {

    return (
        <div className="customer-care">
            <h3 className="customer-care__title">Customer Care</h3>
            <ul className="customer-care__list">
                <li className="customer-care__list__contact-us">Contact Us</li>
                <li className="customer-care__list__faqs">FAQs</li>
                <li className="customer-care__list__the-story">The Story</li>
                <li className="customer-care__list__store-location">Store Location</li>
                <li className="customer-care__list__blog">Blog</li>
                <li className="customer-care__list__careers">Careers</li>
                <li className="customer-care__list__terms-of-use">Terms of Use</li>
                <li className="customer-care__list__shipping">Shipping</li>
                <li className="customer-care__list__returns">Returns</li>
                <li className="customer-care__list__privacy-policy">Privacy Policy</li>
            </ul>
        </div>
    );
};

export default CustomerCareElement;