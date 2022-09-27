const Stock = (function () {
  return {
    sumarStock: function (producto, cantidad) {
      if (cantidad >= 0) {
        producto.stock += cantidad;
      } else {
        throw "error";
      }
    },
    restarStock: function (producto, cantidad) {
      if (cantidad > 0) {
        producto.stock -= cantidad;
      } else {
        throw new Error("La cantidad a quitar de stock debe ser positiva");
      }
    },
    mirarStock: function (producto) {
      return producto.stock > 0 ? true : false;
    },
  };
})();

module.exports = Stock