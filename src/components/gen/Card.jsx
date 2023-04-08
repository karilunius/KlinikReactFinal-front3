import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { endpoint } from "../../../src/routes/Home";
import axios from "axios";
import { IconButton } from "@mui/material";
import "../../styles/light-theme.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavsContext } from "../utils/context/favsContext";
import { initialState } from "./../utils/context/globalcontext";
import Destacados from "../../routes/Destacados";

const Card = () => {
	const { id } = useParams();
	const [values, setValues] = useState(null);
	const [like, setLike] = useState(false);
	const [color, setColor] = useState("gray");

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

	

	const handleLike = (e) => {
		e.preventDefault();

		if (like === false && color === "gray") {
			setLike(true);
			setColor("red");
		} else if (like === true && color === "red") {
			setLike(false);
			setColor("gray");
		} else {
			setLike(false);
			setColor("gray");
		}

			console.log(like);
			console.log(color);
	};

    

	return (
		<div className="boxdecard" >
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
				{like && color ? (
					<IconButton className="fav" onClick={handleLike}>
						<FavoriteIcon
							sx={{
								fontSize: "40px",
								cursor: "pointer",
								color: { color },
							}}
							alt="like"
						/>
					</IconButton>
				) : (
					<IconButton className="fav" onClick={handleLike}>
						<FavoriteIcon
							sx={{
								fontSize: "40px",
								cursor: "pointer",
								color: { color },
							}}
							alt="like"
						/>
					</IconButton>
				)}
			</div>
		</div>
	);
};

export default Card;

{
	/* {(like && (console.log("me gusta"), true)) ||
						console.log("no me gusta")} */
}
{
	/* {like} */
}

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
