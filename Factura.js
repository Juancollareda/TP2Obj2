
const Stock = require("./Stock");
function Factura (vendedor,id) {
    var pieza = [];
    this.id = id;
    this.vendedor = vendedor;
    this.Factura = function () {
      console.log(
        "Factura id:" +
          this.id +
          "Vendedor: " +
          this.vendedor.nombre +
          "Monto total: " +
          this.montoTotal +
          "\n==========\n"
      );
    };
  
    this.agregarProducto = function (pieza, cantidad) {
      if (Stock.mirarStock(pieza)) {
        pieza.cantidad = cantidad;
        StockHandler.quitarStock(pieza, cantidad);
        productos.push(pieza);
        this.productos = productos;
        this.montoTotal += pieza.precioUnidad * pieza.cantidad;
      } else {
        throw new Error("No hay stock del producto" + pieza.nombre);
      }
    };
  };
  
  module.exports = Factura;