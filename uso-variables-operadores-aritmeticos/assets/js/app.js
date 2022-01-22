//Ejercicio 1

var numero1= prompt("ingrese primer numero para operaciones aritmeticas",""); 

var numero2= prompt("ingrese segundo numero para operaciones aritmeticas","");

var suma= parseFloat(numero1) + parseFloat(numero2);
var resta= parseFloat(numero1) - parseFloat(numero2);
var multiplicacion= parseFloat(numero1) * parseFloat(numero2);
var division= parseFloat(numero1) / parseFloat(numero2);
var modulo= parseFloat(numero1) % parseFloat(numero2);

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
var temperaturaCelsius= prompt("ingrese la temperatura en Celsius para tranformar","");

var temperaturaFahrenheit= parseFloat(temperaturaCelsius) * parseFloat(9/5) + 32 

var temperaturaKelvin= parseFloat(temperaturaCelsius) + parseFloat(273.15) 

document.getElementById('tabla-temperaturas').innerHTML +=`
<tr>
    <td>${temperaturaCelsius}</td>
    <td>${temperaturaFahrenheit}</td>
    <td>${temperaturaKelvin}</td>
    
</tr>`;

//Ejercicio 3

var dias= prompt("ingrese el numero de dias para transformar","");

var semanas= Math.floor(parseFloat(dias)/7) 

var años=parseFloat(dias)/365

document.getElementById('tabla-tiempo').innerHTML +=`
<tr>
    <td>${dias}</td>
    <td>${semanas}</td>
    <td>${años.toFixed(2)}</td>    
</tr>`;

//Ejercicio 4

var primerNumero= prompt("ingrese el primer numero para suma y promedio","");
var segundoNumero= prompt("ingrese el segundo numero para suma y promedio","");
var tercerNumero= prompt("ingrese el tercer numero para suma y promedio","");
var cuartoNumero= prompt("ingrese el cuarto numero para suma y promedio","");
var quintoNumero= prompt("ingrese el quinto numero para suma y promedio","");

var sumaNumeros= parseFloat(primerNumero)+parseFloat(segundoNumero)+parseFloat(tercerNumero)+parseFloat(cuartoNumero)+parseFloat(quintoNumero);

var promedioNumeros= (parseFloat(primerNumero)+parseFloat(segundoNumero)+parseFloat(tercerNumero)+parseFloat(cuartoNumero)+parseFloat(quintoNumero))/5


document.getElementById('tabla-promedio').innerHTML +=`
<tr>
    <td>${primerNumero}, ${segundoNumero}, ${tercerNumero}, ${cuartoNumero}, ${quintoNumero}</td>
    <td>${sumaNumeros}</td>
    <td>${promedioNumeros.toFixed(2)}</td>    
</tr>`;