import React from 'react';
import sellingItem from "./img/zara-clothes.jpg";

interface FeaturedProps {
    id: number
};

const ShoppingElement: React.FC<FeaturedProps> = ({id}: FeaturedProps) => {
    
    return (        
        <div className={["shopping-element-", `${id}`].join('')}>
            <img src={sellingItem} alt="Selling Item" className="shopping-element__photo"/>
            <div className="shopping-element__info">
                <h5 className="shopping-element__info__brand-name">Brand Name</h5>
                <h5 className="shopping-element__info__clothes-name">Clothes Name</h5>
                <h5 className="shopping-element__info__price">$200.00</h5>
            </div>
        </div>        
    );
};

export default ShoppingElement;