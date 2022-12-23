import { Fragment, useContext } from "react";
import HeaderCartButton from "./HeaderCartButton";
import AuthContext from '../../../store/auth-context';
import UserProfile from "../Profile/LoginMenu";

import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props)=>{
    const ctx = useContext(AuthContext);
    const loggedIn = ctx.isLoggedIn;
    return (
        <Fragment>
            <header className={classes.header}>
                <Link to="/"> <h1>Reacto Italiano Restauranto</h1></Link>
                {loggedIn && <UserProfile/>}
                <HeaderCartButton onShowBasket={props.onShowBasket}/>
            </header>
            <div className={classes['main-image']} >
                <h1 className={classes.text}>„Fai pace con il tuo pasato cosi non rovinerá il tuo presente”</h1>
            </div>
        </Fragment>
    );

}

export default Header;