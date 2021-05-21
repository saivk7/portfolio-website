import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import './styles.css';

const Terminal: React.FC = () =>{
    const handleInputChange = (e:any)=>{
        console.log(e.target.value);
        setSearchCmd(e.target.value);   
    }
    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key==="Enter"){
            e.preventDefault();
            console.log("Enter key is pressed")
        }
    }

    const [searchCmd,setSearchCmd] = useState('/')

    return(
        <>
        <Container className="terminal-container">
            Terminal
        </Container>

        <input type="text" 
        placeholder="input any command" 
        onChange={handleInputChange} value={searchCmd}
        onKeyDown = {e=>handleKeyDown(e)}
        >

        </input>
        
        </>
    );
}

export default Terminal;