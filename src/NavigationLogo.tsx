import React  from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const NavigationLogo: React.FC = () =>  {

    return (
        <div className="navigation-logo">
            <ul>
                <li className="navigation-logo__basket-icon"><FaShoppingCart/></li>
                <li className="navigation-logo__logo">wibi - wibi</li>
                <li className="navigation-logo__burger-icon"><FaBars/></li>
            </ul>
        </div>
    )
}

export default NavigationLogo;