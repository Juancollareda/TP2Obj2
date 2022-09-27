function Factura(empleado,id,tipodepieza,cantpieza=1,valorporunidad=1){
  
        this.empleado = empleado;    
        this.cantpieza=cantpieza;    
        this.valorporunidad=valorporunidad;
        this.id = id;
        this.tipodepieza=tipodepieza;
            

   
    Montototal=function(){
        if (numeroPositivoCoherente(this.cantpieza) && numeroPositivoCoherente(this.valorporunidad)){
            return this.cantpieza*this.valorporunidad
        } else {
            return "cantdepieza o valorporunidad erroneo"
        }

    };
    DatosEmpleado=function(){
        return this.empleado.dni+" "+this.empleado.nombre+" "+this.empleado.apellido
    };

}

module.export=Factura