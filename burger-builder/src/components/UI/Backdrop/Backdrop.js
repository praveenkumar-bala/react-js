import React from 'react';
import classes from './Backdrop.css'
const backdrop = (props) =>{
    var comp = props.show ? <div 
        className={classes.Backdrop}
        onClick={props.clicked}
        >

        </div> : null

    return comp;
}
export default backdrop;