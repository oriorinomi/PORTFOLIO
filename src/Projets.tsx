import datas from "./datas/datas.json";
import './App.css';
import { useState } from 'react';

function Projets () {

    const [opacityDescription, setOpacityDescription] = useState(false); 

    const handleMouseEnter = () => {
        setOpacityDescription(true);
    }

    const handleMouseLeave = () => {
        setOpacityDescription(false);
    }

    return(

        <section className="container-projets">

        <div className="projets">
        <h2>{datas.titreProjets}</h2>
         {opacityDescription && (
                    <p className="descCookie">{datas.descriptionCookie} <br /> {datas.descriptionCookie2} <br /><br />{datas.descriptionCookie3} <br />{datas.descriptionCookie4}</p>
                )};
        </div>

        <div className="container-btn">
            <div className="second-cadre"></div>
            <button className="btnCookie"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <a href={datas.lienCookie} target="_blank" rel="noopener noreferrer">Cookie Clicker</a> <img src={datas.arrow} alt="Cookie-Icon" /></button>
        </div>
        
        </section>
    );
}

export default Projets;