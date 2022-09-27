const Admin=require('./Administrativo.js');
const Reserva=require('./Reserva.js');
const Ventas=require('./Ventas.js');
const Factura=require('./Factura.js');
const Piezas=require('./Piezas.js');




let EmpleadoVendedor=new Ventas('andy','Luza',20999432,12)
console.log(EmpleadoVendedor.nombreCompleto())
let Tornillo= new Piezas(12,"Tornillo")
let Factura1=new Factura(EmpleadoVendedor,123)
Factura1.agregarProducto(Tornillo,10)
Factura1.Factura()
Factura1.agregarProducto(Tornillo,10)