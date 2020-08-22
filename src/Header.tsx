import React from 'react';

const Header: React.FC = () => {
    
    return (
        <div className="header">
            <p className="header__promotion">Autumn Collection up to 60% off</p>
            <a className="header__shop-now-btn" href='#hello'>Shop now</a>
        </div>
    );
};

export default Header;