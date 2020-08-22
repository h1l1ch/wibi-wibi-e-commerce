import React from 'react';
import NavigationLogin from './NavigationLogin';
import NavigationLogo from './NavigationLogo';
import Header from './Header';

const MainPage: React.FC = () => {
    
    return (
        <React.Fragment>
            <NavigationLogin/>
            <NavigationLogo/>
            <Header/>
        </React.Fragment>
    )
}

export default MainPage