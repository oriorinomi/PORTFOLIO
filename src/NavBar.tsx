import "./App.css";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Accueil</Link>
				</li>
				<li>
					<Link to="/cv">CV</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
