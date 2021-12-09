import React from 'react';
import DropdownMenuElement from './DropdownMenuElement';

const DropdownMenu: React.FC = () => {

    return (
        <ul className="dropdown-menu visible">
            <DropdownMenuElement>Shop</DropdownMenuElement>
            <DropdownMenuElement>%Featured%</DropdownMenuElement>
            <DropdownMenuElement>Staff Edit</DropdownMenuElement>
            <DropdownMenuElement>Contact</DropdownMenuElement>
        </ul>
    )
}

export default DropdownMenu;
