const { Router } = require("express");
const {
  registroUsuario,
  iniciarSesionUsuario,
} = require("../controllers/usuarios.controllers");
const router = Router();

router.post("/", registroUsuario);
router.post("/iniciarSesion", iniciarSesionUsuario);

module.exports = router;
