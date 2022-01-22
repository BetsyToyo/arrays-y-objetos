//Ejercicio 1

var numero1= prompt("ingrese primer numero para operaciones aritmeticas",""); //se le piden al usuario el primer numero


var numero2= prompt("ingrese segundo numero para operaciones aritmeticas",""); //se le piden al usuario el segundo numero

var suma= parseFloat(numero1) + parseFloat(numero2); //se realiza la suma
var resta= parseFloat(numero1) - parseFloat(numero2); //se realiza la resta
var multiplicacion= parseFloat(numero1) * parseFloat(numero2); //se realiza la multiplicacion
var division= parseFloat(numero1) / parseFloat(numero2); //se realiza la division
var modulo= parseFloat(numero1) % parseFloat(numero2); //se realiza el modulo

//se envian a pantalla los resultados
document.getElementById('tabla').innerHTML += `
    <tr>
        <td>${numero1}</td>
        <td>${numero2}</td>
        <td>${suma}</td>
        <td>${resta}</td>
        <td>${multiplicacion}</td>
        <td>${division}</td>
        <td>${modulo}</td>
    </tr>
`;



//Ejercicio 2
var temperaturaCelsius= prompt("ingrese la temperatura en Celsius para tranformar","");//se le piden al usuario el primer numero

var temperaturaFahrenheit= parseFloat(temperaturaCelsius) * parseFloat(9/5) + 32 //se transforma la temperatura de Celsius a Fahrenheit

var temperaturaKelvin= parseFloat(temperaturaCelsius) + parseFloat(273.15) //se transforma la temperatura de Celsius a Kelvin

//se envian a pantalla los resultados
document.getElementById('tabla-temperaturas').innerHTML +=`
<tr>
    <td>${temperaturaCelsius}</td>
    <td>${temperaturaFahrenheit}</td>
    <td>${temperaturaKelvin}</td>
    
</tr>`;



//Ejercicio 3

var dias= prompt("ingrese el numero de dias para transformar a semanas y años",""); //se le piden al usuario el numero de dias

var años = Math.floor(dias/365); //se transforma los dias a años
var semanas = Math.floor((dias%365)/7)  //se transforma los dias a semanas
var diasFinal = Math.floor(((dias%365)%7)) //se transforma los dias a dias

//se envian a pantalla los resultados
document.getElementById('tabla-tiempo').innerHTML +=`
<tr>
    <td>${años}</td>
    <td>${semanas}</td>
    <td>${diasFinal}</td>    
</tr>`;




//Ejercicio 4

var primerNumero= prompt("ingrese el primer numero para suma y promedio",""); //se le piden al usuario el primer numero
var segundoNumero= prompt("ingrese el segundo numero para suma y promedio",""); //se le piden al usuario el primer numero
var tercerNumero= prompt("ingrese el tercer numero para suma y promedio",""); //se le piden al usuario el primer numero
var cuartoNumero= prompt("ingrese el cuarto numero para suma y promedio",""); //se le piden al usuario el primer numero
var quintoNumero= prompt("ingrese el quinto numero para suma y promedio",""); //se le piden al usuario el primer numero

    //se realiza la suma
var sumaNumeros= parseFloat(primerNumero)+parseFloat(segundoNumero)+parseFloat(tercerNumero)+parseFloat(cuartoNumero)+parseFloat(quintoNumero);

    //se calcula el promedio
var promedioNumeros= (parseFloat(primerNumero)+parseFloat(segundoNumero)+parseFloat(tercerNumero)+parseFloat(cuartoNumero)+parseFloat(quintoNumero))/5

//se envian a pantalla los resultados
document.getElementById('tabla-promedio').innerHTML +=`
<tr>
    <td>${primerNumero}, ${segundoNumero}, ${tercerNumero}, ${cuartoNumero}, ${quintoNumero}</td>
    <td>${sumaNumeros}</td>
    <td>${promedioNumeros.toFixed(2)}</td>    
</tr>`;