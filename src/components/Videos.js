import React, { useState } from "react";
import ContenedorVideos from "./ContenedorVideos";

const Videos = () => {
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
				<input value="Buscar Videos" type="submit" />
			</form>
			{query.length > 0 ? <ContenedorVideos query={query} /> : null}
		</div>
	);
};

export default Videos;
