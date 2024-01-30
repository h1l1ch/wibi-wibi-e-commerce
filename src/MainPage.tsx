import React from 'react';
import NavigationLogin from './NavigationLogin';
import NavigationLogo from './NavigationLogo';
import Header from './Header';
import Featured from './Featured';
import Promotion from './Promotion';
import About from './About';
import Footer from './Footer';

const MainPage: React.FC = () => {
    
    return (
        <div className="home-page">
            <NavigationLogin/>
            <NavigationLogo/>
            <Header/>
            <Featured/>
            <Promotion/>
            <About/>
            <Footer/>
        </div>
    )
}

export default MainPage;