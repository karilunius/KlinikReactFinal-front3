import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Navigate, Router } from "react-router-dom";
import { rutas, Login } from "./navigate/Routes.js";
import { ProtectedRoute } from './components/utils/Protected/ProtectedRoute.jsx';
import LoginContextProvider from "../src/components/utils/context/loginContext.jsx";
import Footer from "./components/gen/Footer.jsx";
import Navbar from "./components/gen/Navbar.jsx";
import { ThemeContext } from './components/utils/context/themecontext';
import FavsContextProvider from './components/utils/context/FavsContext.jsx';



const App = () => {

   const { theme } = useContext(ThemeContext);


	return (
		<LoginContextProvider>
			<FavsContextProvider>
				<BrowserRouter>
					<div className={theme ? "dark" : "app"}>
						<Routes>
							<Route path="/login" element={<Login />} />
							<Route element={<ProtectedRoute />}>
								{rutas.map(({ id, path, Component }) => (
									<Route
										key={id}
										path={path}
										element={
											<>
												<Navbar />
												<Component />
												<Footer />
											</>
										}
									/>
								))}
							</Route>
							<Route path="/" element={<Navigate to="/login" />} />
						</Routes>
					</div>
				</BrowserRouter>
			</FavsContextProvider>
		</LoginContextProvider>
	);
}

export default App;

