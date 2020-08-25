import React from 'react';
import ShoppingElement from './ShoppingElement';

const ids = [0, 1]

const Results: React.FC= () => {

    return (
        <section className="results-section">
            <h1 className="results-section__title">Results</h1>
            <div className="results-section__row">
                <ShoppingElement id = {ids[0]}/>
                <ShoppingElement id = {ids[1]}/>
            </div>
            <div className="results-section__row">
                <ShoppingElement id = {ids[0]}/>
                <ShoppingElement id = {ids[1]}/>
            </div>
            <div className="results-section__row">
                <ShoppingElement id = {ids[0]}/>
                <ShoppingElement id = {ids[1]}/>
            </div>
        </section>
    );
};

export default Results;