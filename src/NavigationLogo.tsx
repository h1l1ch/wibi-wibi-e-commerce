import React, { useState }  from 'react';
import { Drawer } from '@material-ui/core';
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import DrawerNavigation from "./DrawerNavigation";

const NavigationLogo: React.FC = () =>  {

    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
    };

    return (
        {['top'].map((anchor : any) => (<div className="navigation-logo" key={anchor}>
            <ul>
                <li className="navigation-logo__basket-icon"><FaShoppingCart/></li>
                <li className="navigation-logo__logo">wibi - wibi</li>
                <li className="navigation-logo__burger-icon" onClick={toggleDrawer(anchor, true)}><FaBars/></li>
            </ul>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {/* {list(anchor)} */}
                <DrawerNavigation/>
            </Drawer>
        </div>))}
    )
}

export default NavigationLogo;