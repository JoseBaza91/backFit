/*esto es para levantar el servidor */
/* const Server = require("./server/server");
const server = new Server();
server.listen();
 */
const express = require("express");
const app = express();

const productos = [
  {
    id: 1,
    nombre: "spinning",
    precio: 1500,
  },
  {
    id: 2,
    nombre: "crossfit",
    precio: 1600,
  },
];

/* el midlleware se utiliza USE  */
app.use(express.json());
/**RUTA PARA TODOS LOS PRODUCTOS */
app.get("/api/productos", (req, res) => {
  res.json(productos);
});

/**UN PRODUCTO */
app.get("/api/productos/:idProductos", (req, res) => {
  const id = Number(req.params.idProducto);
  const producto = productos.find((product) => product.id === id);
  res.json(producto);
});

app.post("/api/productos", (req, res) => {
  console.log(req.body);
  const nuevoProducto = {
    id: crypto.randomUUID(),
    ...req.body,
  };

  productos.push(nuevoProducto);
  res.json(nuevoProducto);
});

app.put("/api/productos/idProducto", (req, res) => {
  const id = Number(req.params.idProducto);
  console.log(id);
  const body = req.body;
  const posicionProductoArray = productos.findIndex(
    (producto) => producto.id === id
  );

  const productoModificado = {
    id,
    ...body,
  };

  productos[posicionProductoArray] = productoModificado;
  res.json(productos[posicionProductoArray]);
});

app.delete("/api/producto/isProductos", (req, res) => {
  const id = Number(req.params.idProducto);
  const posicionProductoArray = productos.findIndex(
    (productos) => productos.id === id
  );

  productos.splice(posicionProductoArray, 1);
  res.json({ msg: "Producto eliminado" });
});

app.listen(3002, () => {
  console.log("server ok", 3002);
});
