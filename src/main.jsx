import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/styles/light-theme.css'
import "../src/main.css"
import ThemeContextProvider from './components/utils/context/themecontext'
import FavsContextProvider from './components/utils/context/favsContext'


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
			<ThemeContextProvider>
				<App />
			</ThemeContextProvider>
	</React.StrictMode>
);

/* ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<FavsContextProvider>
		<ThemeContextProvider>
			<App />
		</ThemeContextProvider>
		</FavsContextProvider>
	</React.StrictMode>
); */
