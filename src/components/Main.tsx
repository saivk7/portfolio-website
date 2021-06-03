import React from 'react';
import TerminalComp from './terminal';
import Footer from './footer/Footer';
import Header from './header/Header';


const Main: React.FC = () =>{
    return(
        <div className="main">
            <Header />
            <TerminalComp />
            <Footer />
        </div>
    );
}

export default Main;