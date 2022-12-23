import AuthContext from '../../../store/auth-context';
import { useReducer, useState, useEffect, useContext } from 'react';

import classes from './Login.module.css';

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.includes('@') };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: action.value, isValid: action.value.includes('@') };
    }
    return { value: '', isValid: false };
}

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.length > 6 };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: action.value, isValid: action.value.length > 6 };
    }
    return { value: '', isValid: false };
}

const Login = (props) => {

    const ctx = useContext(AuthContext);

    const [formIsValid, setFormIsValid] = useState(false);
    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: false });


    const emailChangeHandler = (event) => {
        dispatchEmail({ type: 'USER_INPUT', value: event.target.value })

        setFormIsValid(
            event.target.value.includes('@') && passwordState.value.trim().length > 6
        );
    };

    const validateEmailHandler = (event) => {
        dispatchEmail({ type: 'INPUT_BLUR', value: event.target.value });
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: 'USER_INPUT', value: event.target.value });
        setFormIsValid(
            event.target.value.trim().length > 6 && emailState.isValid
        );
    };

    const validatePasswordHandler = (event) => {
        dispatchPassword({ type: 'INPUT_BLUR', value: event.target.value });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        ctx.onLogin(emailState, passwordState);
        props.onClick();
    };

    useEffect(() => {
        const identify = setTimeout(() => {
            setFormIsValid(emailState.value.includes('@') && passwordState.value.trim().length > 6)
        }, 1000);
        return () => {
            clearTimeout(identify);
        }
    },[emailState, passwordState]);

    return (
        <div className={classes.modal}>
            <form onSubmit={submitHandler}>
                <header className={classes.header}>
                    <h2>Login - Bejelentkezés</h2>
                </header>
                <div
                    className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="password">Your password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <button type="submit" className={classes.button} disabled={!formIsValid}>
                        Bejelentekezés
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;