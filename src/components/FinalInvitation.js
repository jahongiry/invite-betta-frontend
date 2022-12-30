import React, { useEffect, useState } from 'react';
import classes from './FinalInvitation.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { moveCard, formTwo } from '../store/formSlice';
import { fetchCreateInvitations, reset } from '../store/formSlice';

function FinalInvitation() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.form);
  const state2 = useSelector((state) => state.form.formOrder2);
  useEffect(() => {
    dispatch(fetchCreateInvitations(state));
  }, [state2]);
  return (
    <div>
      <Link to='/' className={classes.ortga} onClick={() => dispatch(reset())}>
        <div className={classes.icon}>
          {' '}
          <ion-icon name='home-outline'></ion-icon>
        </div>
        <h5>Boshidan yaratish</h5>
      </Link>
      <div className={classes.details}>
        <h1>Baxtli onigiz uchun taklifnomaniz tayyor!</h1>
      </div>
    </div>
  );
}

export default FinalInvitation;
