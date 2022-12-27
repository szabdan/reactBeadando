import {useDispatch} from "react-redux";
import { cartActions } from '../../store/ItemRedux/cart-slice';

import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { name, quantity, total, price, id} = props.item;

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id, name, price
      }), 
    )
  }

  const removeItemHandler = () => {
    dispatch(
      cartActions.removeItemFromCart(id, price)
    )
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
