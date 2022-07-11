import React, { useState, useEffect } from "react";
import apiKey from "../helpers/apiKey";
import "../index.css";
import Loader from "./Loader";

const ContenedorVideos = ({ query }) => {
	const [page, setPage] = useState(1);
	const [results, setResults] = useState([]);
	const [isload, setIsload] = useState(false);

	const url = `https://api.pexels.com/v1/videos/search?page=${page}&query=${query}`;
	const options = {
		headers: {
			Authorization: apiKey,
		},
	};

	useEffect(() => {
		setResults([]);
		async function fetchData() {
			await setIsload(true);
			let res = await fetch(url, options);
			let data = await res.json();
			await setResults((current) => [...current, ...data.videos]);
			await setIsload(false);
		}
		fetchData();
	}, [url]);

	const nextPage = async () => {
		await setResults([]);
		await setPage(page + 1);
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const prevPage = async () => {
		if (page > 0) {
			await setResults([]);
			await setPage(page - 1);
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};

	return (
		<div>
			{isload ? <Loader /> : false}
			<div id="container-images">
				{results.length > 0
					? results.map((r) => (
							<video controls>
								<source
									src={r.video_files[0].link}
									id={r.id}
									type="video/mp4"
								/>
							</video>
					  ))
					: null}
			</div>
			<div id="container-buttons">
				<button onClick={prevPage}>Prev</button>
				<button onClick={nextPage}>Next</button>
			</div>
		</div>
	);
};

export default ContenedorVideos;
