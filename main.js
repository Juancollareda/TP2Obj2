const Admin=require('./Administrativo.js');
const Reserva=require('./Reserva.js');
const Ventas=require('./Ventas.js');
const Factura=require('./Factura.js');
const Piezas=require('./Piezas.js');
const Stock=require('./Stock.js');

let stock=Stock

let EmpleadoVendedor=new Ventas('andy','Luza',20999432,12)
console.log(EmpleadoVendedor.nombreCompleto())
let Tornillo= new Piezas(12,"Tornillo")
stock.sumarStock(Tornillo,1000)
console.log(Tornillo.stock)
let Factura1=new Factura(EmpleadoVendedor,123)
Factura1.agregarProducto(Tornillo,10)
console.log(Tornillo.stock)

Factura1.Factura()
Factura1.agregarProducto(Tornillo,10000)
console.log(stock.mirarStock(Tornillo))