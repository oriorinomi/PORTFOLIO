import datas from "./datas/datas.json";
import "./App.css";

function NavBar() {
	return (
		<nav>
			<ul>
				<li>
					<a href="#">{datas.lienAccueil}</a>
				</li>
				<li>
					<a href="#">{datas.lienCV}</a>
				</li>
				<li>
					<a href="#">{datas.lienContact}</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
