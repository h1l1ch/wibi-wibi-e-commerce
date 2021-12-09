import React  from 'react';
import { connect } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { AppState } from './store/configureStore';

const NavigationLogo: React.FC = (props) =>  {

    return (
        <div className={["navigation-logo", `${props.isSticky ? 'sticky' : ''}`].join(' ')}>
            <ul>
                <li className="navigation-logo__basket-icon"><FaShoppingCart/></li>
                <li className="navigation-logo__logo">wibi - wibi</li>
                <li className="navigation-logo__burger-icon"><FaBars/></li>
            </ul>
        </div>
    )
}

interface LinkStateProp {

}

// Function responsible for passing state to the reducer
const mapStateToProps = (state: AppState) => {
    return {
      isSticky: state.navigation.isSticky
    };
};

export default connect(mapStateToProps)(NavigationLogo);