import React, { useEffect, useState } from 'react';
import classes from './FormTwo';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { moveCard, formTwo } from '../store/formSlice';
import { fetchCreateInvitations } from '../store/formSlice';

function FinalInvitation() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.form);
  const state2 = useSelector((state) => state.form.formOrder2);
  useEffect(() => {
    dispatch(fetchCreateInvitations(state));
  }, [state2]);
  return (
    <div>
      <Link onClick={() => dispatch(moveCard())} className={classes.ortga}>
        <div className={classes.icon}>
          {' '}
          <ion-icon name='chevron-back-outline'></ion-icon>
        </div>
        <h5>Ortga qaytish</h5>
      </Link>
      <div className={classes.details}>
        <h1>final invitaion</h1>
      </div>
    </div>
  );
}

export default FinalInvitation;
