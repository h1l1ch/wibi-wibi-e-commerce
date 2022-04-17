import React from 'react';
import ShoppingElementsRow from './ShoppingElementsRow';

const ids = [0, 1]

const Featured: React.FC= () => {
    async function fetchShoppingElementsHandler() {
        const response = await fetch('https://wibi-wibi.firebaseio.com/');
        const data = await response.json();
    
        const transformedShoppingElements = data.results.map((shoppingElementData) => {
            return {
                id: shoppingElementData.id,
                title: shoppingElementData.title,
                image: shoppingElementData.image,
                description: shoppingElementData.description,
                type: shoppingElementData.type
            }
        }) 
    }

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