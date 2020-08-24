import React from 'react';
import NavigationLogin from './NavigationLogin';
import NavigationLogo from './NavigationLogo';
import Header from './Header';
import Featured from './Featured';
import Promotion from './Promotion';

const MainPage: React.FC = () => {
    
    return (
        <React.Fragment>
            <NavigationLogin/>
            <NavigationLogo/>
            <Header/>
            <Featured/>
            <Promotion/>
        </React.Fragment>
    )
}

export default MainPage