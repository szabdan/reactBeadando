import ReactDOM from 'react-dom';
import { Fragment } from 'react';

import classes from './LoginButton.module.css';
import Login from './Login';
const LoginButton = (props) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <div className={classes.backdrop} onClick={props.onClick} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <Login onClick={props.onClick}/>,
                document.getElementById('login-root')
            )}
        </Fragment>
    );
}
export default LoginButton;