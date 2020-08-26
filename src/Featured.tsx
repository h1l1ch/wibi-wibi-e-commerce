import React from 'react';
import ShoppingElementsRow from './ShoppingElementsRow';

const ids = [0, 1]

const Featured: React.FC= () => {

    return (
        <section className="featured-section">
            <h1 className="featured-section__title">Featured Products</h1>
            <ShoppingElementsRow/>
            <ShoppingElementsRow/>
            <ShoppingElementsRow/>
            <ShoppingElementsRow/>
        </section>
    );
};

export default Featured;