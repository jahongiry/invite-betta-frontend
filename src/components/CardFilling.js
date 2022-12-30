import React, { useEffect } from 'react';
import { Form, Link } from 'react-router-dom';
import classes from './CardFilling.module.css';
import cardSample from '../img/2.png';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import { useSelector, useDispatch } from 'react-redux';
import FinalInvitation from './FinalInvitation';

function CardFilling() {
  const cardImage = useSelector((state) => state.form.cardImage);
  const card_order = useSelector((state) => state.form.formOrder);
  const card_order2 = useSelector((state) => state.form.formOrder2);
  const card_order1 = useSelector((state) => state.form.formOrder1);
  const image = useSelector((state) => state.image);
  const finalImage = useSelector((state) => state.form.finalImage);
  const dispatch = useDispatch();
  return (
    <div className={classes.cardFilling}>
      {/* {finalImage && <h1>{finalImage}</h1>} */}
      <Link to={'/'} className={classes.cardMoreDesign}>
        <div className={classes.leftIcon}>
          {' '}
          <ion-icon name='chevron-back-outline'></ion-icon>
        </div>
        <span>Boshqa tanlash</span>
      </Link>
      <div className={classes.cardBox}>
        {!finalImage && <img className={classes.image} src={cardImage}></img>}
        {finalImage && <img className={classes.image} src={finalImage}></img>}
      </div>
      <div className={classes.formBox}>
        {card_order1 && <FormOne />}
        {card_order && <FormTwo />}
        {card_order2 && <FinalInvitation />}
      </div>
    </div>
  );
}

export default CardFilling;
