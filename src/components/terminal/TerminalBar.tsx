import React from 'react';
import { makeStyles } from '@material-ui/core';
import { isClassExpression } from 'typescript';


const useStyles = makeStyles(theme => ({

    header: {
        background: "#e4e3e5",
        height: "28px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
      },
      termButton: {
        background: " #f96256",
        width: "14px",
        height: "14px",
        borderRadius: "15px",
        marginLeft: "8px"
      },
      exit: {
        background: "#f96256"
      },
      minimize: {
        background: "#fdbc3d"
      },
      maximize: {
        background: "#33c948"
      },
    

    
    
}));

const TerminalBar = () => {

    

    

    const classes = useStyles({});

    return (
    <div className={classes.header}>
        <div className={classes.termButton + " " + classes.exit}></div>
        <div className={classes.termButton + " " + classes.minimize}></div>
        <div className={classes.termButton + " " + classes.maximize}></div>
      </div>
    )
}


export default TerminalBar;