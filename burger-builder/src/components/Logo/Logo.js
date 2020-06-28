import React from 'react';
import classes from './Logo.css';
import burgerLogo from '../../../src/assets/images/burger-logo.png'

const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="Burger Logo "/>
        </div>
    )
}
export default logo;