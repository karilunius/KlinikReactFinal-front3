import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { endpoint } from "../../../src/routes/Home";
import axios from "axios";
import { IconButton } from "@mui/material";
import "../../styles/light-theme.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavsContext } from "../utils/context/favsContext";

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
					<IconButton className="fav">
						<FavoriteIcon
							sx={{
								fontSize: "40px",
								cursor: "pointer",
								color: "gray",
							}}
							alt="like"
						/>
					</IconButton>
			</div>
		</div>
	);
};

export default Card;



/* const Card = () => {
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


	//fav logic but nt so logic

    const {state,dispatch} = useContext(FavsContext);
    
	const addFav = () => {
		dispatch({ type: "LIKEADDED", payload: {id, name, phone, email, website}})
	
	};
    
	const removeLike = () => {
    
		dispatch({ type: 'DISLIKE', payload: {id, name, phone, email, website}})
	};

	

	return (
		<div className="boxdecard">
			<div className="card">
				<h2>Datos de dentista</h2>
				<img src="../../../public/doctor.jpg" alt="company-logo" />
				<div className="boxdedatoscard">
					<p>{id}</p>
					<p>{name}</p>
					<p>{phone}</p>
					<p>{email}</p>
					<p>{website}</p>
					<button>
						<Link to="/home">Regresar</Link>
					</button>
				</div>
				{state.data.some((favs) => favs.id === id) ? (
					<IconButton onClick={removeLike} className="fav">
						<FavoriteIcon
							sx={{
								fontSize: "40px",
								cursor: "pointer",
								color: "gray",
							}}
							alt="like"
						/>
					</IconButton>
				) : (
					<IconButton onClick={addFav} className="fav">
						<FavoriteIcon
							sx={{
								fontSize: "40px",
								cursor: "pointer",
								color: "red",
							}}
							alt="like"
						/>
					</IconButton>
				)}
			</div>
		</div>
	);
};

export default Card; */
