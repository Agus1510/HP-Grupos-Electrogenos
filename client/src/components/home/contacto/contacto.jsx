import style from "./contacto.module.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_helmkzc",
        "template_jhehn0o",
        form.current,
        "m8RFxJUS6RRdRE433"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={style.form}>
      <label>Nombre</label>
      <input type="text" name="from_name" id="from_name" />
      <label>Email</label>
      <input type="email" name="reply_to" id="reply_to" />
      <label>Teléfono</label>
      <input type="phone" name="to_phone" id="to_phone" />
      <label>Mensaje</label>
      <textarea name="message" id="message" />
      <input type="submit" value="Enviar" />
    </form>
  );
};

function Contacto() {
  return (
    <div className={style.container} id="contacto">
      <div className={style.flexContainer}>
        <h1>CONTACTO</h1>
        <span></span>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.7190766172607!2d-58.17636338434091!3d-34.8883999803867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2d9c44e133235%3A0x384b6f984baec0a6!2sHP%20Grupos%20Electr%C3%B3genos!5e0!3m2!1ses!2sus!4v1669234405106!5m2!1ses!2sus"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={style.contact}>
          <div className={style.text}>
            <h1>Oficina principal</h1>
            <p>
              Calle 621 Nº 2949e/ colectora y 529 El Pato partido de Berazategui
              Buenos Aires Argentina C.P. 1893
            </p>
            <p>Tel: 02229-491022</p>
            <p>Cel: (011) 15-4069-6613</p>
            <p>Email: grupos@hpelectrogenos.com</p>
          </div>
          <div className={style.text}>
            <h1>Preguntas</h1>
            <p>
              Para todo tipo de preguntas o presupuestos; por favor llamanos:
              (02229)491-022 o completa el formulario a continuación
            </p>
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
