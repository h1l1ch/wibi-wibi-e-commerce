import React from 'react';
import CustomerCareElement from './CustomerCareElement';
import AboutElement from './AboutElement';
import NewsletterElement from './NewsletterElement';

const About: React.FC= () => {

    return (
        <section className="about-section">
            <CustomerCareElement/>
            <AboutElement/>
            <NewsletterElement/>
        </section>
    );
};

export default About;