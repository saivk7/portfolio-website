import React from 'react';
import Terminal from './terminal/Terminal';
import Footer from './footer/Footer';
import Header from './header/Header';


const Main: React.FC = () =>{
    return(
        <div>
            <Header />
            <Terminal />
            <Footer />
        </div>
    );
}

export default Main;