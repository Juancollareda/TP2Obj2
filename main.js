const Admin=require('./Administrativo.js');
const Reserva=require('./Reserva.js');
const Ventas=require('./Ventas.js');
const Factura=require('./Factura.js');
const Piezas=require('./Piezas.js');

let tornillo=new Piezas(2000,20,'tornillo')
console.log(tornillo.Stock)
console.log(tornillo.VenderCantdePieza(1000))
console.log(tornillo.Stock)
console.log(tornillo.VenderCantdePieza(2000))
console.log(tornillo.Stock)