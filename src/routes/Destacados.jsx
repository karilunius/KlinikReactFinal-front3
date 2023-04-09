import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavsContext } from "../components/utils/context/FavsContext";
import { Box, Button, TextField } from "@mui/material";



const Destacados = () => {


    const { state, dispatch } = useContext(FavsContext);

	return (
		<div className="boxdecard">
			<h1>Dentistas Favoritos</h1>
			<div className="card-grid">
				<>
					{state.data?.map((data) => (
						<div key={data.id} className="boxdedatoscard">
							<p>{data?.id}</p>
							<p>{data?.name}</p>
							<p>{data?.phone}</p>
							<p>{data?.email}</p>
							<p>{data?.website}</p>
						</div>
					))}
				</>
			</div>
			<Button
				sx={{ marginTop: "10px", backgroundColor: "dodgerblue" }}
				type="submit"
				size="small"
			>
				<Link to="/home">Regresar</Link>
			</Button>
		</div>
	);
};

export default Destacados;


