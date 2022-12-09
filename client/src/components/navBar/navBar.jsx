import React from "react";
import style from "./navBar.module.css";
import { HashLink as Link } from "react-router-hash-link";
import PhoneMenu from "../phoneMenu/phoneMenu";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useEffect } from "react";
function NavBar() {
  const [activePhone, setActivePhone] = useState(false);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      const isDropdownPhone = e.target.matches("[data-dropdown-phone]");
      if (!isDropdownPhone && e.target.closest("[data-dropdownPhone]") != null)
        return;
      let currentDropdown;
      if (isDropdownPhone) {
        setActivePhone(!activePhone);
      }
      if (!isDropdownPhone) {
        setActivePhone(false);
      }
    });
  }, []);
  return (
    <div className={style.flexContainer}>
      <div className={style.logoContainer}>
        <img src="logo.webp" />
        <p>Grupos Electrógenos</p>
      </div>
      <div className={activePhone ? style.phoneMenuActive : style.phoneMenu}>
        <PhoneMenu data-dropdownPhone />
      </div>
      <div className={style.buttonsContainer}>
        <a href="/">INICIO</a>
        <a href="https://www.tienda.hpelectrogenos.com/" target="_blank">
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
