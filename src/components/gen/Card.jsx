import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { endpoint } from "../../../src/routes/Home";
import axios from "axios";
import { IconButton } from "@mui/material";
import "../../styles/light-theme.css";
import StarOutlineSharpIcon from "@mui/icons-material/StarOutlineSharp";
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

	
    //fav logic
	

	/* const {state,dispatch} = useContext(FavsContext);
    
    
	const addFav = () => {
		dispatch({type: "LIKEADDED", payload: { name, username, id }}
	
	);
    console.log(state); */

	//
		
		
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
				{/* 

			<Link className="favButton">Add fav</Link> */}

				<IconButton /* onClick={addFav} */ className="fav">
					<FavoriteIcon
						sx={{
							fontSize: "40px",
							cursor: "pointer",
							color: "red",
						}}
						alt="like"
					/>
				</IconButton>
			</div>
		</div>
	);
};

export default Card;
