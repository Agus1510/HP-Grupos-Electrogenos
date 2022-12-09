import React from "react";
import style from "./productCard.module.css";
import { useState } from "react";
import Link from "@tiptap/extension-link";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useSelector, useDispatch } from "react-redux";
import { setAddProduct } from "../../../redux/reducer/index";
import { useNavigate } from "react-router-dom";
import { deleteProduct, getProductsByName } from "../../../redux/actions";
import AddProduct from "./popUp/addProduct";

function ProductCard({ products }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, addProduct } = useSelector((state) => state.reducerCompleto);
  const token = useSelector((state) => state.reducerCompleto.authToken);
  const handleAdd = () => {
    dispatch(setAddProduct(true));
  };

  const move = async (name) => {
    const dis = await dispatch(getProductsByName(name));
    const data = dis.payload;
    if (data.success) {
      navigate(`/producto/${name}`);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.grid}>
        {products.map((p) => {
          const product = p;

          return (
            <div key={product._id}>
              <div
                className={style.productContainer}
                onClick={() => move(product.name)}
              >
                <div className={style.description}>
                  <p>{product.name}</p>
                </div>
                <div
                  className={
                    product.image.length > 1 ? style.buttons : style.notButtons
                  }
                >
                  <button value={"<"} onClick={(e) => handleClick(e, product)}>
                    {"<"}
                  </button>
                  <button value={">"} onClick={(e) => handleClick(e, product)}>
                    {">"}
                  </button>
                </div>
                <img src={product.image[0].data_url} alt="imagen" />
              </div>
            </div>
          );
        })}
      </div>
      {user.isAdmin ? (
        <div className={style.category2} onClick={() => handleAdd()}>
          <div className={style.img2}>
            <img src={"plus.png"} />
          </div>
          <div className={style.name2}>
            <h1>Agregar producto</h1>
          </div>
        </div>
      ) : null}
      {addProduct ? <AddProduct /> : null}
    </div>
  );
}

export default ProductCard;
