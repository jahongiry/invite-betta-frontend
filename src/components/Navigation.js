import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';

function Navigation() {
  return (
    <div className={classes.NavContainer}>
      <Link className={classes.logo} to='/'>
        Logo
      </Link>
      <Link className={classes.login} to='/'>
        Log in
      </Link>
    </div>
  );
}

export default Navigation;
