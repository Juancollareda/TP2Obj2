function Piezas(PrecioCantidad,nombre){   
    this.nombre=nombre;
    this.PrecioCantidad=PrecioCantidad;
    this.stock = 10;
    this.Cantidad=0;
    this.ObtenePrecioCant=function(){
        return this.PrecioCantidad


    }
}
module.exports=Piezas