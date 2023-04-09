import React, { useState, useEffect } from "react";
import axios from "axios";
export const endpoint = "https://jsonplaceholder.typicode.com/users";
import "../styles/light-theme.css";
import Card from "../components/gen/Card";

const Home = () => {


	const [values, setValues] = useState([]);

	useEffect(() => {
		axios
			.get(endpoint)
			.then(({ data }) => {
				setValues(data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	console.log(values);

	return (
		<div className="containerhome">
			<h1>Listado de Dentistas</h1>
			{values.length ? values?.map((item) => (
				<Card
					key={item.id}
					name={item.name}
					username={item.username}
					id={item.id}
					phone={item.phone}
					email={item.email}
					website={item.website}
				
				/>))
					: null
			}
		</div>
	);
};

export default Home;


