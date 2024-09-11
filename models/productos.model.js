const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    max: [45, "Maximo de caracteres es  45 "],
    min: [10, "Minimo de carcteres es 10"],
  },
  precio: {
    type: Number,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  codigo: {
    type: String,
    required: true,
    unique: true,
  },
  imagen: {
    type: String,
    default:
      "cloudinary",
  },
  bloqueado: {
    type: Boolean,
    default: false,
  },
});

const ProductModel = mongoose.model("products", ProductSchema);
module.exports = ProductModel;
