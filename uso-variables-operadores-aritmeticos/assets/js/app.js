//Ejercicio 1

var numero1= prompt("ingrese primer numero",""); 

var numero2= prompt("ingrese segundo numero","");

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
var temperaturaCelsius= prompt("ingrese la temperatura en Celsius","");

var temperaturaFahrenheit= parseFloat(temperaturaCelsius) * parseFloat(9/5) + 32 

var temperaturaKelvin= parseFloat(temperaturaCelsius) + parseFloat(273.15) 

document.getElementById('tabla-temperaturas').innerHTML +=`
<tr>
    <td>${temperaturaCelsius}</td>
    <td>${temperaturaFahrenheit}</td>
    <td>${temperaturaKelvin}</td>
    
</tr>`;

//Ejercicio 3