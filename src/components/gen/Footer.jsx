import React, { useContext } from "react";
import "../../styles/light-theme.css";
import { ThemeContext } from "../utils/context/themecontext.jsx";

const Footer = () => {

	const { theme } = useContext(ThemeContext);
   

	return (
		 /* className={theme ? "dark" : "app"} */
			<footer className="foot"  >
				<p>Powered by</p>
				<img src="./logoklinik.jpg" alt="company-logo" />
				<img src="./logo-n.jpg" alt="company-logo" />
				<p>© copyright 2023</p>
			</footer>
	);
};

export default Footer;
