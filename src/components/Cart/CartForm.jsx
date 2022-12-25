import ReactDOM from 'react-dom';
import { Fragment } from 'react';

import classes from '../Layout/Auth/LoginButton.module.css';
import Cart from './Cart';
const CartForm = (props) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <div className={classes.backdrop} onClick={props.onClick} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <Cart onClick={props.onClick} />,
                document.getElementById('login-root')
            )}
        </Fragment>
    );
}
export default CartForm;