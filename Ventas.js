const Empleado=require('./Empleado');

function Ventas(nombre,apellido,dni,comision,antiguedadEnAnios){
    var antiguedadRequerida=20;
    var sueldoPorAntiguedad=200;
    this.venta=0

    this.base=Empleado;
    this.base(nombre,apellido,dni);  
    if (typeof comision!='number' || typeof antiguedadEnAnios!='number'){
        return undefined;
    } else if (comision<=0 || antiguedadEnAnios<=0){
        return undefined;
    } else if (!(this instanceof Ventas)){
        return new Ventas(nombre,apellido,dni,comision,antiguedadEnAnios);
    }

    this.comision=comision; /** porcentaje */
    this.antiguedadEnAnios=antiguedadEnAnios;

    Ventas.prototype.antiguedadRequerida=function(nuevaAntiguedad){
        antiguedadRequerida=nuevaAntiguedad;
    }
    Ventas.prototype.sueldoPorAntiguedad=function(nuevaSueldo){
        sueldoPorAntiguedad=nuevaSueldo;
    }
    
    this.pagarSueldo=function(){
        if (typeof this.venta=='number'){
            var retorno=0;
            if (this.venta>0){
                retorno+=this.venta*(comision/100);
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

Ventas.prototype.nombreCompleto=function(){
    return this.nombre+" | "+this.apellido+" | ("+this.dni+")";
}


module.exports=Ventas;
