import React, { useState } from "react";
import ContenedorImagenes from "./ContenedorImagenes";

const Imagenes = () => {
	const [query, setQuery] = useState("");

	const processForm = (e) => {
		e.preventDefault();
		let search = e.target.query.value;
		setQuery(search.toLowerCase());
	};

	return (
		<div>
			<form onSubmit={processForm}>
				<input name="query" type="search" />
				<input value="Buscar Imagenes" type="submit" />
			</form>
			{query.length > 0 ? <ContenedorImagenes query={query} /> : null}
		</div>
	);
};

export default Imagenes;
