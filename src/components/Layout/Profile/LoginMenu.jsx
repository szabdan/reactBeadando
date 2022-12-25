import { Fragment, useContext } from "react";
import AuthContext from '../../../store/AuthContext/auth-context';
import { Link } from 'react-router-dom';

import classes from "./LoginMenu.module.css";

const UserProfile = () => {
    const ctx = useContext(AuthContext);
    const loggedIn = ctx.isLoggedIn;
    return (
        <Fragment>
            <nav className={classes.nav}>
                {
                    loggedIn ?
                        <ul>
                            <li>
                                <Link to='/rendeles'>Rendelés</Link>
                            </li>
                            <li>
                                <Link to='/foglalas'>Foglalas</Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    Profile
                                </Link>
                            </li>
                        </ul> :
                        <span></span>
                }
            </nav>
        </Fragment>
    );
}

export default UserProfile;