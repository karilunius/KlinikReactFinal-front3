import React, { createContext, useState } from "react";

export const LoginContext = createContext({});

const LoginContextProvider = ({ children }) => {
	const [ isLogged, setIsLogged ] = useState(localStorage.getItem("login")? true : false);

	const handleLogin = () => {
		setIsLogged(true);
		localStorage.setItem("login",true);
	}

	const propiedades = {
		isLogged,
		handleLogin,
	}

    return(
        <LoginContext.Provider value={propiedades}>
        {children}
        </LoginContext.Provider>
    );
};

export default LoginContextProvider;