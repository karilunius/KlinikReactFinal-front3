import React, { createContext, useState } from "react";

export const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState(false);

	const State = {
		theme, //uno lo crea
		setTheme, //uno lo activa
	};

	/* const handleThemeContext = () => {
		setTheme(theme);
	}; */
	
	return (
		<ThemeContext.Provider value={State}>{children}</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;

//importo el useContext en navbar
//importo el { ThemeContext} 
//le pong las dos variables e inicializo el usecontext
//creo el manejador