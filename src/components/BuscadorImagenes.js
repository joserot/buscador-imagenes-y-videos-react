import React, { useState } from "react";
import Imagenes from "./Imagenes";
import Videos from "./Videos";

const BuscadorImagenes = () => {
	const [buscador, setBuscador] = useState("img");

	const navMenu = (e) => {
		let id = e.target.id;
		let $images = document.getElementById("img");
		let $videos = document.getElementById("video");

		if (id === "img") {
			$images.classList.add("active");
			$videos.classList.remove("active");
			setBuscador("img");
		} else if (id === "video") {
			$videos.classList.add("active");
			$images.classList.remove("active");
			setBuscador("video");
		}
	};

	return (
		<div>
			<nav onClick={navMenu}>
				<p id="img" className="active">
					Imagenes
				</p>
				<p id="video">Videos</p>
			</nav>
			{buscador === "img" ? <Imagenes /> : null}
			{buscador === "video" ? <Videos /> : null}
		</div>
	);
};

export default BuscadorImagenes;
