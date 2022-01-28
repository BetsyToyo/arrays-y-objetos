
$(function () {

  let validacion = () => {
  
    let numeroIngresado;
    
    do {
       numeroIngresado = prompt(
        "ingrese un numero del 1 al 20 para calcular multiplicaciones y factorial",
        ""
      );
      numeroIngresado = parseInt(numeroIngresado);
      if (numeroIngresado < 1 || numeroIngresado > 20) {
        alert(
          "NUMERO FUERA DE RANGO!! por favor ingrese un numero entre el 1 y el 20"
        );
      }
    } while (numeroIngresado < 1 || numeroIngresado > 20);
     
    return numeroIngresado 
  };
  
  var numero = validacion();
  let multiplicacion;
  let factorial;
    
   
  
  let ciclos=()=>{
    for (let index = 0; index < numero; index++) {
          
      multiplicacion= numero * (index+1); 
    
      $("#cuerpo").append(`
    
      <h4 class="border border-primary">${index+1} x ${numero} = ${multiplicacion}</h4>      
            
    `)              
    }

    for (let index = 1; index <= numero; index++) {
    
      factorial=1
      for (let index2 = 1; index2 <=index ; index2++) {
      
      factorial=factorial*index2   
      }
      $("#cuerpo").append(`
  
      <h4 class="border border-primary">Factorial de ${index} es: ${factorial}</h4>`)
    
    } }

  ciclos()
  
});
