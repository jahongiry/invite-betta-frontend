import React from 'react';
import classes from './Header.module.css';
import search from '../img/search-icon.png';
import Typical from 'react-typical';
import Body from './Body';

function Header() {
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.container1}>
          {/* <Typical
            className={classes.headingText}
            steps={[
              'Assalomu alekum',
              2000,
              'Taklifonomalaringizni biz bilan yasang!',
              1000,
            ]}
            loop={1}
            wrapper='p'
          /> */}
          <h1 className={classes.headingText}>
            Taklifonomalaringizni biz bilan yarating!
          </h1>
          <form className={classes.form}>
            <input
              className={classes.phoneInput}
              type='integer'
              placeholder='tel: +998...'
            ></input>
            <input
              className={classes.nameInput}
              type='name'
              placeholder='Ismingizni kiriting...'
            ></input>
            <button className={classes.submitInput} type='submit'>
              Sign in
            </button>
          </form>
        </div>
        <div className={classes.container2}></div>
      </div>
      <Body />
    </div>
  );
}

export default Header;
