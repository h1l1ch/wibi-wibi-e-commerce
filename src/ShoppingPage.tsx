import React from 'react';
import NavigationLogin from './NavigationLogin';
import NavigationLogo from './NavigationLogo';
import Header from './Header';
import Results from './Results';
import Footer from './Footer';

const ShoppingPage: React.FC = () => {
    
    return (
        <div className="shopping-page">
            <NavigationLogin/>
            <NavigationLogo/>
            <Header/>
            <Results/>
            <Footer/>
        </div>
    )
}

export default ShoppingPage;