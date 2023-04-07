import React from "react";
import { Link } from "react-router-dom";
import "../../styles/light-theme.css";

const Card = ({ name, phone,id, email, website }) => {
	
    

	const addFav = () => {
		// Aqui iria la logica para agregar la Card en el localStorage
	};

	return (
		<div className="card">
			<h2>Desde la card</h2>
			<div className="boxdedatoscard">
				<p>{id}</p>
				<p>{name}</p>
				<p>{phone}</p>
				<p>{email}</p>
				<p>{website}</p> *
			</div>
			<Link to="/home">Regresar</Link>

			<button onClick={addFav} className="favButton">
				Add fav
			</button>

		</div>
	);
};

export default Card;
