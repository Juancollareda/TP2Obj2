const Admin=require('./Administrativo.js');
const Reserva=require('./Reserva.js');
const Ventas=require('./Ventas.js');
const Factura=require('./Factura.js');
const Piezas=require('./Piezas.js');




let EmpleadoVendedor=new Ventas('andy','Luza',20999432,12)
console.log(EmpleadoVendedor.nombreCompleto())