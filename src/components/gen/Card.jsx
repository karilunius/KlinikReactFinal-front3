import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import "../../styles/light-theme.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavsContext } from "../utils/context/FavsContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Card = ({ id, name, username, phone, email, website }) => {
	const { state, dispatch } = useContext(FavsContext);

	const addFav = () => {
		dispatch({
			type: "LIKEADDED",
			payload: { id, username, name, phone, email, website }})
	}

	const removeFav = () => {
		dispatch({ type: "DISLIKE", payload: { id, name,username, phone, email, website }})
	}

	return (
		<div className="containerdoc">
			<div className="iconprofile">
				<AccountCircleIcon
					sx={{ fontSize: "40px", color: "rgb(125, 208, 241)" }}
					className="imgperfil"
					alt="foto"
				/>
			</div>
			<p>{name}</p>
			<div className="iconarrow">
				{state.data.some((elemento) => elemento.id === id) ? (
					<Link  onClick={removeFav}>
						<FavoriteIcon
							sx={{
								fontSize: "40px",
								cursor: "pointer",
								color: "red",
							}}
							alt="like"
						/>
					</Link>
				) : (
					<Link onClick={addFav}>
						<FavoriteIcon
							sx={{
								fontSize: "40px",
								cursor: "pointer",
								color: "gray",
							}}
							alt="like"
						/>
					</Link>
				)}
			</div>
			<div className="iconarrow">
				<Link to={`/users/${id}`}>
						<ArrowCircleRightIcon
							sx={{
								fontSize: "40px",
								cursor: "pointer",
								color: "rgb(125, 208, 241)",
							}}
							alt="foto"
						/>
				</Link>
			</div>
		</div>
	);
};

export default Card; 


















