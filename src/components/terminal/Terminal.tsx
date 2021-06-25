import { makeStyles } from '@material-ui/core';
import { File } from './File';
import React, {  useState } from 'react';
import homeArray, { fileArr } from './info/index';

import { getRequiredArray,addFile,deleteFile } from './utils/fileInsert';
import { SkipPreviousTwoTone } from '@material-ui/icons';
import { render } from '@testing-library/react';



const useStyles = makeStyles(theme=> ({
    terminalContainer: {
        backgroundColor: "#1e1e1e",
        display: "grid",
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

    const [cmdInput,setCmdInput] = useState('/ $ help');

    const [location,setLocation] = useState('/');

    const [results,setResults] = useState([1,2]);

    
    const handleInputChange = (e:any)=>{ // for recording user input in the terminal
        //console.log(fileArr);
        //console.log(e.target.value);
        setCmdInput(e.target.value);
        e.target.style.width = e.target.value.length+10 + "ch";
    };

    function getCommandArgs(command:string):string[] {
        let arr  = command.split(" ").filter((e)=> (e!==''));
        return arr;
    }

    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key==="Enter"){
            e.preventDefault();

            //parseCommand(cmdInput); complete this function 
            //parse only if it is not empty command
            var input = cmdInput; 
            parseCommand(input);
            console.log("the cmd line input  is " , input);
            
            setCmdInput(location + ' $ ');
            console.log("Enter key is pressed")
        }
    }

    const parseCommand = (command:string) => {

        let inputs:string[] = getCommandArgs(command);
        //console.log("parsing commands" , inputs);

        const dir = inputs[0];
        const cmd = inputs[2];
        const input = inputs[3];

        console.log("input ", input, " command : " , cmd);

        switch(cmd){
            
            case 'cd':{
                break;
            }
            case 'ls':{
                break;
            }

            case 'mkdir':{
                break;
            }

            case 'touch':{
                break;
            }

            case 'cat':{

            } 
        }
        
    }

    


    function terminalOutput(homeArray : File[]): JSX.Element  {

        const arr = homeArray.map((file:File)=>{
            return (
                <div style={{margin:"5px 10px" , padding:"0px"}}>
                     <p style={{margin:"0px"}}>{file.getLocation()}{file.getName() } </p>
                </div>
            )
        })
        const arr1 = [arr];

        console.log("The arrays is " );
        console.log(arr1);

        return (
            <div style={{display:"inline-flex"}}>
                {arr}        
            </div>
        );

        

    }

    

    return (
    
        <div>
            <h1> Terminal</h1>
            
            <div className={classes.terminalContainer}>
            
                <input type="text"
                    id="cmdInput"
                    className = {classes.commandInput} 
                    onChange={handleInputChange} 
                    value={cmdInput}
                    onKeyDown = {e=>handleKeyDown(e)}>        
                </input>

            </div>  
            
            <h2>Testing terminal</h2>
            
            <div className={classes.terminalContainer}>
                {                
                    terminalOutput(homeArray)
                }
                {terminalOutput(homeArray)}      

            </div>
        </div>
    );
}

export default Terminal;