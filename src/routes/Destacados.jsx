import React, {useContext} from "react";
import Card from "../components/gen/Card.jsx";
import { FavsContext } from "../components/utils/context/favsContext.jsx";



const Destacados = (/* {id,name,phone,email,website} */) => {


	/* const { state, dispatch } = useContext(FavsContext); */



	return (
		<div className="boxdecard">
			<h1>Dentistas Favoritos</h1>
			<div className="card-grid">
				<div>hola</div>
				{/* {
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
				} */}
			</div>
		</div>
	);
};

export default Destacados;
