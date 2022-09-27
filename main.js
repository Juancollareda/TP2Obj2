const Admin=require('./Administrativo.js');
const Reserva=require('./Reserva.js');
const Ventas=require('./Ventas.js');
const Factura=require('./Factura.js');
const Piezas=require('./Piezas.js');
const Stock=require('./Stock.js');
const { mirarStock } = require('./Stock.js');

let stock=Stock

let EmpleadoVendedor=new Ventas('andy','Luza',20999432,12,2)
console.log(EmpleadoVendedor.nombreCompleto())
let Tornillo= new Piezas(12,"Tornillo")
stock.sumarStock(Tornillo,11111)
console.log(Tornillo.stock)
console.log(Stock.mirarStock(Tornillo))
let Factura1=new Factura(EmpleadoVendedor,123)
Factura1.agregarProducto(Tornillo,100)
console.log("se le pagara :"+EmpleadoVendedor.pagarSueldo())
Factura1.agregarProducto(Tornillo,100)
console.log("se le pagara :"+EmpleadoVendedor.pagarSueldo())
Factura1.Factura()
console.log(Tornillo.cantidad)
console.log(Stock.mirarStock(Tornillo))
/* var empleados=new Array();
    empleados.push( Ventas("d","w",659,10,2));
    Ventas.prototype.antiguedadRequerida(2);
    Ventas.prototype.sueldoPorAntiguedad(0.5);
    empleados.forEach(element => {
  //      console.log(element.nombreCompleto());
        console.log(element.pagarSueldo(55));
    });
 */
//Factura1.agregarProducto(Tornillo,10000)


