import { Fragment, useContext } from "react";
import HeaderCartButton from "./HeaderCartButton";
import AuthContext from '../../../store/AuthContext/auth-context';
import UserProfile from "../Profile/LoginMenu";
import { Link } from "react-router-dom";
import CartForm from "../../Cart/CartForm"
import {useSelector, useDispatch} from "react-redux";
import { uiActions } from '../../../store/ItemRedux/ui-slice';

import classes from "./Header.module.css";

const Header = (props) => {
    const dispatch = useDispatch();
    const ctx = useContext(AuthContext);
    const loggedIn = ctx.isLoggedIn;
    const showCart = useSelector(state => state.ui.carIsVisible);


    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
      }


    return (
        <Fragment>
            <header className={classes.header}>
                <Link to="/"> <h1>Reacto Italiano Restauranto</h1></Link>
                {loggedIn && <UserProfile />}
                <HeaderCartButton onShowBasket={props.onShowBasket} />
            </header>
            <div className={classes['main-image']} >
                <h1 className={classes.text}>„Fai pace con il tuo pasato cosi non rovinerá il tuo presente”</h1>
            </div>
            {showCart && <CartForm onClick={toggleCartHandler}/>}
        </Fragment>
    );

}

export default Header;