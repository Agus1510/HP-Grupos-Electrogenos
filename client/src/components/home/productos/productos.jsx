import React from "react";
import style from "./productos.module.css";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../products/productCard";
import { useEffect } from "react";
import { getAllProducts } from "../../../../redux/actions/index";

function Productos() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const products = useSelector(
    (state) => state.reducerCompleto.filteredProducts
  );
  return (
    <div className={style.container} id="productos">
      <div className={style.flexContainer}>
        <h1>OTROS PRODUCTOS</h1>
        <span></span>
        <div>
          <ProductCard products={products} />
        </div>
      </div>
    </div>
  );
}

export default Productos;
