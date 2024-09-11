const { Schema, model } = require("mongoose");

const UsuarioSchema = new Schema({
  nombreUsuario: {
    type: String,
    required: true,
    unique: true,
  },
  celular: {
    type: Number,
    required: true,
    max: [15, "El maximo de caracteres es 15 "],
    min: [10, "El minimo de caracteres es 10"],
  },
  contrasenia: {
    type: String,
    required: true,
    max: [45, "El maximo de caracteres es 45"],
    min: [8, "El minimo de caracteres es 8"],
  },
  rol: {
    type: String,
    default: "usuario",
  },
  bloqueado: {
    type: Boolean,
    default: false,
  },
  idCarrito: {
    type: String,
  },
  idFavorito: {
    type: String,
  },
});

UsuarioSchema.methods.toJSON = function () {
  const { contrasenia, ...usuario } = this.toObject();
  return usuario;
};

const UsuarioModel = model("users", UsuarioSchema);
module.exports = UsuarioModel;
