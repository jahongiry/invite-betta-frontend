import React, { useEffect, useState } from 'react';
import classes from './FinalInvitation.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { moveCard, formTwo } from '../store/formSlice';
import { fetchCreateInvitations, reset } from '../store/formSlice';
import { CircleLoading } from 'react-loadingg';
import PropagateLoader from 'react-spinners/PropagateLoader';

function FinalInvitation() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.form);
  const state2 = useSelector((state) => state.form.formOrder2);
  const finalimage = useSelector((state) => state.form.finalImage);

  useEffect(() => {
    dispatch(fetchCreateInvitations(state));
  }, [state2]);
  return (
    <div>
      <Link to='/' className={classes.ortga} onClick={() => dispatch(reset())}>
        <div className={classes.icon}>
          <ion-icon name='home-outline'></ion-icon>
        </div>
        <h5>Boshidan yaratish</h5>
      </Link>
      <div className={classes.details}>
        {!finalimage && (
          <div>
            <h1 className={classes.tayyorlanmoqda}>Tayyorlanmoqda...</h1>
            <div className={classes.loader}>
              <PropagateLoader color='#1BAEB6' />
            </div>
          </div>
        )}
        {finalimage && <h1>Baxtli onigiz uchun taklifnomangiz tayyor!</h1>}
      </div>
    </div>
  );
}

export default FinalInvitation;
