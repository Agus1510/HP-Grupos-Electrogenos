import React from "react";
import style from "./nosotros.module.css";

function Nosotros() {
  return (
    <div className={style.container} id="nosotros">
      <div className={style.flexContainer}>
        <div className={style.text}>
          <h1> NOSOTROS</h1>
          <span></span>
          <p>
            HP es una empresa de alta tecnología, con mas de 45 años en el
            mercado, especializada en la investigación, desarrollo, montaje,
            venta, alquiler y mantenimiento de grupos electrógenos. Trabajamos
            junto con fabricantes de motores reconocidos a nivel mundial como
            Cummins, Volvo, Scania, Caterpillar y Perkins. El rango de potencia
            de nuestros equipos varía de 2 a 1000 kVA. Proporcionamos soluciones
            fiables y en el plazo acordado para todo tipo de sistemas de
            suministro de energía eléctrica. Nuestros productos se utilizan con
            frecuencia en industrias como la minera, de ferrocarriles,
            petrolífera, de arrendamiento, de petrificación, de comunicación,
            gubernamental, militar, de producción y en la industria
            inmobiliaria. Hemos constituido una fábrica para responder a grandes
            volúmenes de pedidos en auge.
          </p>
        </div>
      </div>
      <img src="grupo3.jpg" />
    </div>
  );
}

export default Nosotros;
