import { makeStyles } from '@material-ui/core';

import React, { useState } from 'react';



const useStyles = makeStyles(theme=> ({
    terminalContainer: {
        backgroundColor: "#1e1e1e",
        display: "flex",
        margin:"auto",
        width: "80%",
        border:"1px solid black"
    
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
    const [searchCmd,setSearchCmd] = useState('/help');
    const [terminal,setTerminal] = useState({})

    const handleInputChange = (e:any)=>{
            console.log(e.target.value);
            setSearchCmd(e.target.value);
            e.target.style.width = e.target.value.length+10 + "ch";
    };
    

    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key==="Enter"){
            e.preventDefault();
            setSearchCmd("");
            console.log("Enter key is pressed")
        }
    }

    return (
    
        <div>
            <h1> Terminal</h1>
            <div className={classes.terminalContainer}>
            <input type="text"
            id="searchCmd"
            className = {classes.commandInput} 
            onChange={handleInputChange} value={searchCmd}
            onKeyDown = {e=>handleKeyDown(e)}></input>
            </div>
        </div>
    );
}

export default Terminal;