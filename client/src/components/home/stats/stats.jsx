import React from "react";
import style from "./stats.module.css";

function Stats() {
  return (
    <div className={style.container}>
      <div className={style.flexContainer}>
        <div className={style.text}>
          <h1>1973</h1>
          <p>Año de Establecimiento</p>
        </div>
        <span></span>
        <div className={style.text}>
          <h1>+500</h1>
          <p>Proyectos Completados</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
