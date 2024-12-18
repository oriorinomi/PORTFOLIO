function Cv() {
	return (
		<div className="flex flex-col justify-center items-center h-screen gap-6 mt-36">
			<img src="public/cv.png" alt="CV" />
			<a
				href="public/cv.pdf"
				download="cv.pdf"
				className="border-2 border-sky-400 p-2 mb-20"
			>
				Télécharger le fichier
			</a>
		</div>
	);
}
export default Cv;
