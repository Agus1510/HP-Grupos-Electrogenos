import React from "react";
import style from "./servicios.module.css";

function Servicios() {
  return (
    <div className={style.container} id="servicios">
      <div className={style.flexContainer}>
        <h1> SERVICIOS</h1>
        <span></span>
        <div className={style.categorias}>
          <div className={style.servicio}>
            <img src="grupo1.webp" />
            <div className={style.servicioText}>
              <h3>Venta</h3>
              <h4>HP Grupo Electrógeno Diesel Gama Insonorizado:</h4>
              <p>Rango de Potencias: de 6 a 1000 Kva</p>
              <h4>HP Grupo electrógeno Gama Abierto Estándar:</h4>
              <p>Rangos de potencia: de 2 a 1000 Kva</p>
            </div>
            <a href="https://www.tienda.hpelectrogenos.com/" target="_blank">
              {" "}
              GRUPOS ELECTRÓGENOS
            </a>
          </div>
          <div className={style.servicio}>
            <img src="grupo2.webp" />
            <div className={style.servicioText}>
              <h3>Alquiler</h3>
              <p>
                Contamos con una flota de alquiler de grupos electrógenos nuevos
                con un rango de potencias entre 10 KVA hasta 550KVA, todos
                equipados con motores y generadores de primeras marcas a nivel
                mundial.
              </p>
            </div>
            <a href="#contacto"> CONSULTAR</a>
          </div>
          <div className={style.servicio}>
            <img src="service.png" />
            <div className={style.servicioText}>
              <h3>Reparación</h3>
              <p>
                Contamos con un amplio equipo de profesionales que ofrece
                soluciones a medida para cada caso.Nuestros expertos en servicio
                técnico de maquinarías, se especializan en mantenimiento y
                reparación de grupos electrógenos de cualquier tipo y marca.
                Nuestro objetivo es garantizar la mejor eficiencia de los
                generadores y extender su vida útil. Brindamos servicio tanto en
                nuestros talleres como en cualquier parte del país.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
