
const date = document.getElementById("date");
const edad = document.getElementById("edad");

const calcularEdad = (date) => {
   const fechaActual = new Date();
   const anoActual = parseInt(fechaActual.getFullYear());
   const mesActual = parseInt(fechaActual.getMonth()) + 1;
   const diaActual = parseInt(fechaActual.getDate());

   const anoNacimiento = parseInt(String(date).substring(0, 4));
   const mesNacimiento = parseInt(String(date).substring(5, 7));
   const diaNacimiento = parseInt(String(date).substring(8, 10));

   let edad = anoActual - anoNacimiento;
   if (mesActual < mesNacimiento) {
       edad--;
   } else if (mesActual === mesNacimiento) {
       if (diaActual < diaNacimiento) {
           edad--;
       }
   }
   console.log(edad)
   return edad;
};

window.addEventListener('load', function () {

   date.addEventListener('change', function () {
       if (this.value) {
        console.log(calcularEdad)
           edad.innerText = `La edad es: ${calcularEdad(this.value)} años`;
       }
   });

});

