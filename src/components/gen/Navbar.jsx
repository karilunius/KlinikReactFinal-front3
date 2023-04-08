import React, { useState, useEffect, useContext } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
import "../../styles/light-theme.css";
import { ThemeContext } from "../utils/context/themecontext.jsx";


const Navbar = () => {

	const { theme, setTheme } = useContext(ThemeContext);


	const handleTheme = () => {
		if (theme) {
			setTheme(false);
		} else {
			setTheme(true);
		}
	};


	return (
		/* className={theme ? "dark" : "app"} */
			<div className="Navbar">
				<img src="./logoklinik.jpg" alt="company-logo" />

				<img src="./logo-n-b.jpg" alt="company-logo" />
				<h5>DASHBOARD CLINIKA</h5>
				<nav className="mul">
					<Link style={{ color: "gray" }} to="/home">
						Home
					</Link>
					<Link style={{ color: "gray" }} to="/contactos">
						Contactos
					</Link>
					<Link style={{ color: "gray" }} to="/destacados">
						Favoritos
					</Link>
				</nav>
				<div className="icons">
					<DarkModeIcon
						className="darkthemeicon"
						alt="darkmodeicon"
						onClick={handleTheme}
					/>
					<Link to="/">
						<LogoutIcon className="logout" alt="logouticon" />
					</Link>
				</div>
			</div>
	);
};

export default Navbar;
