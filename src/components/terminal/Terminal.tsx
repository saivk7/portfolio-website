import { makeStyles } from '@material-ui/core';

import React, { ReactHTMLElement, useState } from 'react';


import homeArray from './info/index';


import { File } from './File';
import { parseCommandLine } from 'typescript';

const useStyles = makeStyles(theme=> ({
    terminalContainer: {
        backgroundColor: "#1e1e1e",
        display: "flex",
        margin:"auto",
        width: "80%",
        border:"1px solid black",
        color:"white",
        outline: "none",
        textShadow: "0 0 0 gray",
        fontSize: "18px",
        fontFamily: "Consolas",
        fontWeight: 200,
    
    },
    commandInput: {
        background: "#1e1e1e",
        outline: "none",
        border: "none",
        color: "white",
        textShadow: "0 0 0 gray",
        fontSize: "18px",
        fontFamily: "Consolas",
        fontWeight: 200,
        "&:focus": {
          outline: "0px solid transparent;",
          border: "none"
        }
      }
}));

const Terminal: React.FC = () => {
    const classes = useStyles({});
    const [cmdInput,setCmdInput] = useState('/help');
    const [results,setResults] = useState('/');

    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key==="Enter"){
            e.preventDefault();

            //parseCommand(cmdInput); complete this function
            setCmdInput('');
            console.log("Enter key is pressed")
        }
    }
    const handleInputChange = (e:any)=>{
        console.log(e.target.value);
        setCmdInput(e.target.value);
        e.target.style.width = e.target.value.length+10 + "ch";
    };

    

    const parseCommand = (command:string) => {
        
    }

    


    function terminalOutput(homeArray : File[]): JSX.Element[]  {

        const arr = homeArray.map((file:File)=>{
            return (
                <div>
                     <p>location : {file.getLocation()}{file.getName()}</p>
                </div>
                   
            )
        })

        return arr;

    }

    return (
    
        <div>
            <h1> Terminal</h1>
            <div className={classes.terminalContainer}>
            <input type="text"
            id="cmdInput"
            className = {classes.commandInput} 
            onChange={handleInputChange} value={cmdInput}
            onKeyDown = {e=>handleKeyDown(e)}></input>
            </div>  
            <h2>Testing terminal</h2>
            
            <div className={classes.terminalContainer}>
                
                <div style={{display:"inline-flex"}}>
                    { terminalOutput(homeArray) }
                </div>
            </div>
        </div>
    );
}

export default Terminal;