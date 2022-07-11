import React, { useState, useEffect } from "react";
import apiKey from "../helpers/apiKey";
import "../index.css";
import Loader from "./Loader";

const ContenedorImagenes = ({ query }) => {
	const [page, setPage] = useState(1);
	const [results, setResults] = useState([]);
	const [isload, setIsload] = useState(false);

	const url = `https://api.pexels.com/v1/search?page=${page}&query=${query}`;
	const options = {
		headers: {
			Authorization: apiKey,
		},
	};

	useEffect(() => {
		async function fetchData() {
			setIsload(true);
			let res = await fetch(url, options);
			let data = await res.json();
			await setResults([]);
			await setResults((current) => [...current, ...data.photos]);
			setIsload(false);
		}
		fetchData();
	}, [url]);

	const nextPage = () => {
		setPage(page + 1);
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const prevPage = () => {
		if (page > 0) {
			setPage(page - 1);
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};

	let Images = results.map((r) => (
		<img src={r.src.large} alt={r.alt} id={r.id} />
	));

	return (
		<div>
			{isload ? <Loader /> : false}
			<div id="container-images">{Images}</div>
			<div id="container-buttons">
				<button onClick={prevPage}>Prev</button>
				<button onClick={nextPage}>Next</button>
			</div>
		</div>
	);
};

export default ContenedorImagenes;
