function Piezas(Stock,PrecioCantidad,Nombre){   
    this.Nombre=Nombre;
    this.PrecioCantidad=PrecioCantidad;
    this.Stock = Stock;
    this.VenderCantdePieza=function(Cantidad)
    {
        if (Cantidad<=this.Stock){
            this.Stock=this.Stock-Cantidad
            return Cantidad*this.PrecioCantidad


        }
        else{

            throw("Stock No disponible solo hay"+this.Stock+"disponible estos momentos")
        }



    };

 
}
module.exports=Piezas