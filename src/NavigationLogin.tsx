import React from 'react'
import { connect } from "react-redux";

const NavigationLogin: React.FC = (props) =>  {
    return (
        <nav className={["navigation-login", `${props.isSticky ? 'sticky' : ''}`].join(' ')}>
            <ul>
                <li>login</li>
                <li>create account</li>
            </ul>
        </nav>
    )
}

// Function responsible for passing state to the reducer
const mapStateToProps = (state) => {
    return {
      isSticky: state.navigation.isSticky
    };
};

export default connect(mapStateToProps)(NavigationLogin);
