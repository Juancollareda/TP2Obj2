const Empleado=require('./Empleado');

function Administrativo(nombre,apellido,dni,sueldo){
    this.base=Empleado;
    this.base(nombre,apellido,dni);
    this.sueldo=sueldo;

    this.correspondeSueldo=function(horasEnUnMes){
        //** horas aproximadas correspondientes a un mes */
        var horario=8*5*((365/7)/12);
        if (horasEnUnMes>=horario){
            return false;
        } else {
            return true;
        }
    };
    this.pagarSueldo=function(horasEnUnMes){
        if (correspondeSueldo(horasEnUnMes)){
            return this.sueldo;
        } else {
            return 0;
        }
    };

    Administrativo.prototype.existencia=function(empleados){
        if (empleados instanceof Array){
            array.forEach(element => {
                if (element instanceof Administrativo){
                    return true;
                }
            });
            return false;
        } else {
            throw("No se puede comprobar la presencia del personal solicitado.");
        }
    }
    
    Empleado.prototype.nombreCompleto=function(){
        return this.nombre+" | "+this.apellido+" | ("+this.dni+")";
    }
}

module.export=Administrativo
