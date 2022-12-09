const { json } = require("body-parser");
const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es requerido"],
    },
    image: {
      type: Array,
      required: [true, "La imagen es requerida"],
    },
    about: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = model("Product", productSchema);
