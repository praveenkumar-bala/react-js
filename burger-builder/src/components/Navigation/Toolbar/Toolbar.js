import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
const toolbar = (props) =>{
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle sideDrawerToggleHandler={props.sideDrawerToggleHandler} />
            <div className={classes.Logo}>
                <Logo></Logo>
            </div>
            <nav className={classes.Desktop}>
                <NavigationItems/>
            </nav>

        </header>
    );
} 

export default toolbar;