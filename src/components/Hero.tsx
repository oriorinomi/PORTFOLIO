import datas from "../datas/datas.json";
import moi from "/moi.jpg";
import "../App.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container-image">
        <div className="cadre" />
        <img src={moi} alt={datas.nom} />
      </div>

      <div className="description">
        <h1>{datas.titre}</h1>
        <p>
          {datas.description} <br />
          <br /> {datas.description2} <br />
          <br /> {datas.description3} <br />
          <br /> {datas.description4} <br />
          <br /> {datas.description5} <br />
          <br /> {datas.description6} <br />
          <br /> {datas.description7}
        </p>
      </div>
    </section>
  );
}

export default Hero;
