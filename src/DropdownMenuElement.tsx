import React from 'react';

const DropdownMenuElement: React.FC = (props) => {

    return (
        <li className="dropdown-menu__element">{props.children}</li>    
    )
}

export default DropdownMenuElement;