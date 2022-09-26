const Empleado=require('./Empleado');

function Ventas(nombre,apellido,dni,comision,antiguedadEnAnios){
    var antiguedadRequerida=20;
    var sueldoPorAntiguedad=200;

    this.base=Empleado;
    this.base(nombre,apellido,dni);
    this.comision=comision; /** porcentaje */
    this.antiguedadEnAnios=antiguedadEnAnios;

    Ventas.prototype.antiguedadRequerida=function(nuevaAntiguedad){
        antiguedadRequerida=nuevaAntiguedad;
    }
    Ventas.prototype.sueldoPorAntiguedad=function(nuevaSueldo){
        sueldoPorAntiguedad=nuevaSueldo;
    }
    
    this.pagarSueldo=function(venta){
        if (typeof venta=='number'){
            var retorno=0;
            if (venta>0){
                retorno+=venta*(comision/100);
            } 
            if (this.antiguedadEnAnios>=antiguedadRequerida){
                retorno+=sueldoPorAntiguedad;
            } 
            return retorno;
        } else {
            return 0;
        }
    }

}

module.export=Ventas
