import { useState, Fragment, useContext } from "react";
import LoginButton from "../Auth/LoginButton";
import AuthContext from '../../../store/auth-context';
import {Link} from 'react-router-dom';

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const [login, setLogin] = useState(false);
    const ctx = useContext(AuthContext);
    const loginHandler = () => {
        setLogin(!login);
    }
    return (
        <Fragment>
            {
                login &&
                <LoginButton onClick={loginHandler} />
            }
            {
                ctx.isLoggedIn &&
                <button onClick={ctx.logout} className={classes.button}>
                    <Link to='/'>Logout</Link>
                </button>
            }
            {
                !ctx.isLoggedIn &&
                <button onClick={loginHandler} className={classes.button}>
                    <Link to='/'>Login</Link>
                </button>
            }
        </Fragment>
    );
}

export default HeaderCartButton;