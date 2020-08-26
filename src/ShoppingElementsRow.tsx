import React from 'react';
import ShoppingElement from './ShoppingElement';

const ids = [0, 1];

const ShoppingElementsRow: React.FC= () => {

    return (
        <div className="shopping-elements-row">
            <ShoppingElement id = {ids[0]}/>
            <ShoppingElement id = {ids[1]}/>
        </div>
    )
};

export default ShoppingElementsRow;