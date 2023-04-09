import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { endpoint } from "./Home";
import axios from "axios";
import "../styles/light-theme.css";

const Dentista = () => {
	const { id } = useParams();

	const [values, setValues] = useState(null);

	useEffect(() => {
		axios
			.get(`${endpoint}/${id}`)
			.then(({ data }) => {
				setValues(data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<div className="boxdecard">
			<div className="card">
				<h2>Datos de dentista</h2>
				<img src="../../../public/doctor.jpg" alt="company-logo" />
				<div className="boxdedatoscard">
					<p>{values?.id}</p>
					<p>{values?.name}</p>
					<p>{values?.phone}</p>
					<p>{values?.email}</p>
					<p>{values?.website}</p>
					<button>
						<Link to="/home">Regresar</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Dentista;
