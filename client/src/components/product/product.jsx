import React from "react";
import style from "./product.module.css";
import { useSelector } from "react-redux";
import Contacto from "../home/contacto/contacto";
import Link from "@tiptap/extension-link";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import { useEffect } from "react";
import CreatedBy from "../home/createdBy/createdBy";

function Product() {
  const { filteredProducts, user } = useSelector(
    (state) => state.reducerCompleto
  );
  var product = filteredProducts[0];
  const [editable, setEditable] = useState(false);
  const editor = useEditor({
    editable,
    content: product.about,
    extensions: [
      StarterKit,
      Link.configure({
        linkOnPaste: true,
        autolink: true,
        protocols: ["ftp", "mailto"],
        HTMLAttributes: {
          class: "link",
        },
      }),
    ],
  });
  useEffect(() => {
    if (!editor) {
      return undefined;
    }

    user.isAdmin ? editor.setEditable(true) : editor.setEditable(false);
  }, [editor, editable]);

  if (!editor) {
    return null;
  }

  return (
    <div className={style.container}>
      <div className={style.flexContainer}>
        <h1>{product.name}</h1>
        <span></span>
        <div className={style.description}>
          <div className={style.text}>
            <EditorContent editor={editor} />
          </div>
          <img src={product.image[0].data_url} alt={product.name} />
        </div>
      </div>
      <Contacto />
      <CreatedBy />
    </div>
  );
}

export default Product;
