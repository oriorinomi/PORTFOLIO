import datas from "./datas/datas.json";
import "./App.css";
import { useState } from "react";

function Projets() {
	const [opacityDescription, setOpacityDescription] = useState(false);

	const handleMouseEnter = () => {
		setOpacityDescription(true);
	};

	const handleMouseLeave = () => {
		setOpacityDescription(false);
	};

	return (
		<section className="container-projets">
			<div className="projets">
				<h2>{datas.titreProjets}</h2>
				{opacityDescription && (
					<div className="descCookie">
						<p>{datas.descriptionCookie}</p>
						<p>{datas.descriptionCookie2}</p>
						<p>{datas.descriptionCookie3}</p>
						<p>{datas.descriptionCookie4}</p>
					</div>
				)}
			</div>

			<div className="container-btn">
				<div className="second-cadre" />
				<button
					type="button"
					className="btnCookie"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<a href={datas.lienCookie} target="_blank" rel="noopener noreferrer">
						Cookie Clicker
					</a>{" "}
					<img src={datas.arrow} alt="Cookie-Icon" />
				</button>
			</div>
		</section>
	);
}

export default Projets;
