import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { endpoint } from "../../../src/routes/Home";
import axios from "axios";
import "../../styles/light-theme.css";

const Card = () => {
	
    const { id } = useParams();
	const [values, setValues] = useState(null);
	
	

		useEffect(() => {
			axios
				.get(`${endpoint}/${id}`)
				.then(({ data }) => {
					console.log(data);
					setValues(data);
				})
				.catch((error) => {
					console.error(error);
				});
		}, []); 


	const addFav = () => {
		// Aqui iria la logica para agregar la Card en el localStorage
	};

	return (
		<div className="card">
			<h2>Desde la card</h2>
			<div className="boxdedatoscard">
				<p>{values?.id}</p>
				<p>{values?.name}</p>
				<p>{values?.phone}</p>
				<p>{values?.email}</p>
				<p>{values?.website}</p> 
			</div>
			<Link to="/home">Regresar</Link>

			<button onClick={addFav} className="favButton">
				Add fav
			</button>

		</div>
	);
};

export default Card;
