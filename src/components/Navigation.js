import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';
import logo from '../img/logo3.png';

function Navigation() {
  return (
    <div className={classes.NavContainer}>
      <Link className={classes.logo} to='/'>
        <img className={classes.logoImage} src={logo}></img>
      </Link>
      <Link className={classes.login} to='/'>
        Log in
      </Link>
    </div>
  );
}

export default Navigation;
