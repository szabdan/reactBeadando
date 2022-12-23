import Card from '../../UI/Card';
import { useDispatch } from "react-redux";
import { cartActions } from '../../../store/PizzaRedux/cart-slice';
import { useContext } from 'react';
import AuthContext from '../../../store/auth-context';

import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const ctx = useContext(AuthContext);
  const { name, price, description, id } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id, name, price
      }),
    )
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        {ctx.isLoggedIn &&
          <div className={classes.actions}>
            <button onClick={addToCartHandler}>Add to Cart</button>
          </div>}
      </Card>
    </li>
  );
};

export default ProductItem;
