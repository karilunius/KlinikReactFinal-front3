import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../components/gen/Card.jsx";
import { FavsContext } from "../components/utils/context/favsContext.jsx";



const Destacados = (/* props */) => {



	return (
		<div className="boxdecard">
			<h1>Dentistas Favoritos</h1>
			<div className="card-grid">
				<div>Dentista-...</div>
						<>
							{/* <p>{id}</p> */}
							<div className="boxdedatoscard">
								{/* <p>{props.name}</p>
								<p>{props.phone}</p>
								<p>{props.email}</p>
								<p>{props.website}</p> */}
								<button>
									<Link to="/home">Regresar</Link>
								</button>
							</div>
						</>
			</div>
		</div>
	);
};

export default Destacados;



/* 

const Destacados = ({id,name,phone,email,website}) => {


	const { state, dispatch } = useContext(FavsContext); 



	return (
		<div className="boxdecard">
			<h1>Dentistas Favoritos</h1>
			<div className="card-grid">
				<div>hola</div>
				{
					state.data?.map((data) => (
						<>
							<p>{data.id}</p>
							<div className="boxdedatoscard">
								<p>{data.name}</p>
								<p>{data.phone}</p>
								<p>{data.email}</p>
								<p>{data.website}</p>
								<button>
									<Link to="/home">Regresar</Link>
								</button>
							</div>
						</>
					))
				}
			</div>
		</div>
	);
};

export default Destacados; */