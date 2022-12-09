import React from "react";
import style from "./addProduct.module.css";
import ImageUploading from "react-images-uploading";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setAddProduct } from "../../../../redux/reducer";
import { createProduct, getAllProducts } from "../../../../redux/actions";
import Tiptap from "../../tiptap/tiptap";

function AddProduct() {
  const [input, setInput] = useState({});
  const [logError, setLogError] = useState({});
  const [text, setText] = useState({});
  const dispatch = useDispatch();
  const [images, setImages] = React.useState([]);
  const { aboutProduct } = useSelector((state) => state.reducerCompleto);

  const handleAdd = () => {
    dispatch(setAddProduct(false));
    dispatch(getAllProducts());
  };
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const token = useSelector((state) => state.reducerCompleto.authToken);

  const workOnChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const dis = await dispatch(
      createProduct({
        productData: {
          name: input.name,
          image: images,
          about: aboutProduct,
        },
        token,
      })
    );

    var response = dis.payload;
    if (response.success === true) {
      setLogError({});
    } else {
      setLogError({ err: response.info });
    }
  };

  return (
    <div className={style.container}>
      <div className={style.flexContainer}>
        <button className={style.close} onClick={() => handleAdd()}>
          X
        </button>
        <h1> Agregar producto</h1>
        <span></span>
        <form
          className={style.form}
          onChange={(e) => workOnChange(e)}
          onSubmit={(e) => handleSubmit(e)}
          autoComplete="off"
        >
          <label className={style.title}>Nombre del producto</label>
          <div className={style.input}>
            <input type="text" placeholder="Nombre" name="name" />
          </div>
          <label className={style.title}>Imagen</label>
          <div className={style.inputImage}>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <button
                    type="button"
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </button>
                  &nbsp;
                  <button type="button" onClick={onImageRemoveAll}>
                    Remove all images
                  </button>
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image["data_url"]} alt="" width="100" />
                      <div className="image-item__btn-wrapper">
                        <button
                          type="button"
                          onClick={() => onImageUpdate(index)}
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          onClick={() => onImageRemove(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </div>
          <label className={style.title}>Descripcion</label>
          <div>
            <Tiptap />
          </div>
          <button type="submit" className={style.button2}>
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
