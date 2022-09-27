const Empleado=require('./Empleado');

function Reserva(nombre,apellido,dni,sueldo){
    this.base=Empleado;
    this.base(nombre,apellido,dni);
    /** sueldo correspondiente a una hora de trabajo */
    this.sueldo=sueldo;


    this.pagarSueldo=function(horasTotales){
        if (typeof horasTotales == 'number'){
            if (horasTotales>0){
                return (this.sueldo)*horasTotales;
            } 
        } else {
            return 0;
        }
    };


}
module.export=Reserva
