import React from 'react';
import NavigationLogin from './NavigationLogin';
import NavigationLogo from './NavigationLogo';

const MainPage: React.FC = () => {
    
    return (
        <React.Fragment>
            <NavigationLogin/>
            <NavigationLogo/>
        </React.Fragment>
    )
}

export default MainPage