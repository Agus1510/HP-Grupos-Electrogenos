import React from "react";
import style from "./createdBy.module.css";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function CreatedBy() {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <p>Página web creada por Agustin Panizza</p>
        <IoLogoLinkedin />
        <IoLogoGithub />
      </div>
      <div className={style.text2}>
        <p>
          Copyright {<AiOutlineCopyrightCircle />} 2023 HP Grupos electrógenos.
          All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default CreatedBy;
