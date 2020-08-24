import React from 'react';
import ShoppingElement from './ShoppingElement';

const ids = [0, 1]

const Featured: React.FC= () => {

    return (
        <section className="featured-section">
            <h1 className="featured-section__title">Featured Products</h1>
            <div className="featured-section__row">
                <ShoppingElement id = {ids[0]}/>
                <ShoppingElement id = {ids[1]}/>
            </div>
            <div className="featured-section__row">
                <ShoppingElement id = {ids[0]}/>
                <ShoppingElement id = {ids[1]}/>
            </div>
            <div className="featured-section__row">
                <ShoppingElement id = {ids[0]}/>
                <ShoppingElement id = {ids[1]}/>
            </div>
        </section>
    );
};

export default Featured;