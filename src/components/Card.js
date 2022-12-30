import classes from './Card.module.css';
import { Link } from 'react-router-dom';
import { chooseCard, linkCard } from '../store/formSlice';
import { useDispatch } from 'react-redux';

export default function Card(props) {
  const dispatch = useDispatch();
  return (
    <div className={classes.card}>
      <img className={classes.cardImage} src={props.image}></img>
      <Link to={'/cardfilling'}>
        <button
          onClick={() => {
            dispatch(chooseCard(props.card_id));
            dispatch(linkCard(props.image));
          }}
          className={classes.cardButton}
        >
          Tanlash
        </button>
      </Link>
    </div>
  );
}
