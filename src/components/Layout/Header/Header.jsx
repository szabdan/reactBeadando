import { Fragment, useContext, useState } from "react";
import HeaderCartButton from "./HeaderCartButton";
import AuthContext from '../../../store/AuthContext/auth-context';
import UserProfile from "../Profile/LoginMenu";
import { Link } from "react-router-dom";
import CartForm from "../../Cart/CartForm"
import {useSelector} from "react-redux";

import classes from "./Header.module.css";

const Header = (props) => {
    const ctx = useContext(AuthContext);
    const loggedIn = ctx.isLoggedIn;
    const showCart = useSelector(state => state.ui.carIsVisible);
    const [isShowCart, setIsShowCart] = useState(showCart);

    const ShowCartHandler = () =>{
        setIsShowCart(!isShowCart);
        console.log(isShowCart);
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
            {isShowCart && <CartForm onClick={ShowCartHandler}/>}
        </Fragment>
    );

}

export default Header;