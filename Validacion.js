const Empleado=require('./Empleado');
const Admin=require('./Administrativo.js');
const Reserva=require('./Reserva.js');
const Ventas=require('./Ventas.js');
const Factura=require('./Factura.js');
const Piezas=require('./Piezas.js');


const Validacion = (function () {
  return {
    EsPositivo: function (cantidad) {
      if (cantidad >= 0) {
        pieza.stock += cantidad;
      } else {
        throw new Error("error");
      }Piezas
    },
    esNumero: function (numero) {
      if (typeof numero!='number') {
        return true
      } else {
        throw new Error("La cantidad debe ser positiva");
      }
    },
    mirarStock: function (pieza) {
    if (pieza.stock > pieza.cantidad){
        return true;
    }else{
        throw new Error("no hay stock");
    }
      
    },
  };
})();

module.exports = Validacion