const Validacion= (function () {
    return {
     
      sueldoValido: function (sueldo) {
        if (sueldo <= 0) {
          throw new Error("El sueldo incorrecto");
        } else {
          return true;
        }
      },
      precioCantValido: function (precioUnidad) {
        if (precioUnidad < 0) {
          throw new Error("El precio incorrecto.");
        } else {
          return true;
        }
      },
    
      comisionValida: function (valor) {
        if (valor >= 0 ) {
          return true;
          
        } else {
          
          throw new Error(
            "El valor incorrecto"
          );
        }
      },
      horasValidas: function (horasTrabajadas, valorHora) {
        if (horasTrabajadas >= 0 || valorHora >= 0) {
          return true;
        } else {
          throw new Error("horas incorrecta");
        }
      },
    };
  })();
  
  module.exports = Validacion;