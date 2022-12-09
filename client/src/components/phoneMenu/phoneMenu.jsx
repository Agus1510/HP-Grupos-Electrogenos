import React from "react";
import style from "./phoneMenu.module.css";
import {
  IoBagHandleOutline,
  IoLocationOutline,
  IoSearchOutline,
  IoPersonOutline,
  IoHomeOutline,
  IoEllipsisVertical,
  IoCloseCircleOutline,
} from "react-icons/io5";
import { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

function PhoneMenu({ handleCategory }) {
  return (
    <div className={style.flexContainer}>
      <div className={style.menu}>
        <a href="/" data-dropdown-button>
          INICIO
        </a>
        <a
          href="https://www.tienda.hpelectrogenos.com/"
          target="_blank"
          data-dropdown-button
        >
          TIENDA
        </a>
        <Link to={"/#servicios"} data-dropdown-button>
          SERVICIOS
        </Link>
        <Link to={"/#nosotros"} data-dropdown-button>
          NOSOTROS
        </Link>
        <Link to={"/#productos"} data-dropdown-button>
          OTROS PRODUCTOS
        </Link>
        <Link to={"/#contacto"} data-dropdown-button>
          CONTACTO
        </Link>
      </div>
    </div>
  );
}

export default PhoneMenu;
