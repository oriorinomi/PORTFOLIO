import Projets from "../Projets";
import EnCours from "./EnCours";
import Hero from "./Hero";

function Accueil() {
	return (
		<div>
			<EnCours />
			<Hero />
			<Projets />
		</div>
	);
}
export default Accueil;
