function Piezas(PrecioCantidad,Nombre){   
    this.Nombre=Nombre;
    this.PrecioCantidad=PrecioCantidad;
    this.Stock = 0;
    this.Cantidad=0;
    this.ObtenePrecioCant=function(){
        return this.PrecioCantidad


    }
}
module.exports=Piezas