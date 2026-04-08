import React from "react";
import style from "./navBar.module.css";
import { HashLink as Link } from "react-router-hash-link";
import PhoneMenu from "../phoneMenu/phoneMenu";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

function NavBar() {
  const [activePhone, setActivePhone] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      const isDropdownPhone = e.target.closest("[data-dropdown-phone]");

      if (isDropdownPhone) {
        setActivePhone((currentState) => !currentState);
      } else {
        setActivePhone(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className={style.flexContainer}>
      <div className={style.logoContainer}>
        <img src="logo.webp" />
        <p>Grupos Electrogenos</p>
      </div>
      <div className={activePhone ? style.phoneMenuActive : style.phoneMenu}>
        <PhoneMenu />
      </div>
      <div className={style.buttonsContainer}>
        <a href="/">INICIO</a>
        <a
          href="https://www.tienda.hpelectrogenos.com/"
          target="_blank"
          rel="noreferrer">
          TIENDA
        </a>
        <Link to={"/#servicios"}>SERVICIOS</Link>
        <Link to={"/#nosotros"}>NOSOTROS</Link>
        <Link to={"/#productos"}>OTROS PRODUCTOS</Link>
        <Link to={"/#contacto"}>CONTACTO</Link>
      </div>
      <IoMenu data-dropdown-phone className={style.menuIcon} />
    </div>
  );
}

export default NavBar;
