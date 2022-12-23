import React, { useState } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    /*const storeIsLoggedIn = localStorage.getItem('isLoggedIn');
    useEffect(() => {
        if (storeIsLoggedIn === '1') {
            setIsLoggedIn(true);
        }
    },[isLoggedIn]);*/

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.setItem('isLoggedIn', '0');
        setIsLoggedIn(false);
    };
    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}>

            {props.children}

        </AuthContext.Provider>
    );
}

export default AuthContext;
