import React from 'react';
import TerminalComp from './terminal';
import NavigationBar from './header/Header';


const Main: React.FC = () =>{
    return(
        <div className="main">
            <NavigationBar />
            <TerminalComp />
            
        </div>
    );
}

export default Main;