const Stock = (function () {
  return {
    sumarStock: function (pieza, cantidad) {
      if (cantidad >= 0) {
        pieza.stock += cantidad;
      } else {
        throw "error";
      }
    },
    restarStock: function (pieza, cantidad) {
      if (cantidad > 0) {
        pieza.stock -= cantidad;
      } else {
        throw ("La cantidad debe ser positiva");
      }
    },
    mirarStock: function (pieza) {
    if (pieza.stock > 0){
        return true;
    }else{
        return false;
    }
      
    },
  };
})();

module.exports = Stock