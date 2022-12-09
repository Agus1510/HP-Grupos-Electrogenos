import React from "react";
import Contacto from "./contacto/contacto";
import CreatedBy from "./createdBy/createdBy";
import style from "./home.module.css";
import Nosotros from "./nosotros/nosotros";
import Productos from "./productos/productos";
import Servicios from "./servicios/servicios";
import Stats from "./stats/stats";

function Home() {
  return (
    <div className={style.flexContainer} id="top">
      <div className={style.videoContainer}>
        <div className={style.text1}>
          <h1>La</h1>
          <h1>Mejor energía</h1>
          <div className={style.scrollDown}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <video autoPlay={true} loop={true} muted={true}>
          <source src="timelapse.mp4" type="video/mp4" />
        </video>
      </div>
      <Servicios />
      <Nosotros />
      <Stats />
      <Productos />
      <Contacto />
      <CreatedBy />
    </div>
  );
}

export default Home;
