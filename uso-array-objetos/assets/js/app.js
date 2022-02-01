document.querySelector(".titulo").innerHTML='<h1>Estadisticas centro medico ñuñoa</h1>';

//Primer Requerimiento

const radiologia=[{hora:"11:00",
                especialista:"IGNACIO SCHULZ",
                paciente:"FRANCISCA ROJAS",
                rut:"9878782-1",
                prevision:"FONASA"},

                {hora:"11:30",
                especialista:"FEDERICO SUBERCASEAUX",
                paciente:"PAMELA ESTRADA",
                rut:"15345241-3",
                prevision:"ISAPRE"},
                
                {hora:"15:00",
                especialista:"FERNANDO WURTHZ",
                paciente:"ARMANDO LUNA",
                rut:"16445345-9",
                prevision:"ISAPRE"},
            
                {hora:"15:30",
                especialista:"ANA MARIA GODOY",
                paciente:"MANUEL GODOY",
                rut:"17666419-0",
                prevision:"FONASA"},
            
                {hora:"16:00",
                especialista:"PATRICIA SUAZO",
                paciente:"RAMON ULLOA",
                rut:"14989389-K",
                prevision:"FONASA"}];

const traumatologia=[{hora:"08:00",
                    especialista:"MARIA PAZ ALTUZARRA",
                    paciente:"PAULA SANCHEZ",
                    rut:"15554774-5",
                    prevision:"FONASA"},
                
                    {hora:"10:00",
                    especialista:"RAUL ARAYA",
                    paciente:"ANGÉLICA NAVAS",
                    rut:"15444147-9",
                    prevision:"ISAPRE"},
                
                    {hora:"10:30",
                    especialista:"MARIA ARRIAGADA",
                    paciente:"ANA KLAPP",
                    rut:"17879423-9",
                    prevision:"ISAPRE"},
                
                    {hora:"11:00",
                    especialista:"ALEJANDRO BADILLA",
                    paciente:"FELIPE MARDONES",
                    rut:"1547423-6",
                    prevision:"ISAPRE"},
                
                    {hora:"11:30",
                    especialista:"CECILIA BUDNIK",
                    paciente:"DIEGO MARRE",
                    rut:"16554741-K",
                    prevision:"FONASA"},
                
                    {hora:"12:00",
                    especialista:"ARTURO CAVAGNARO",
                    paciente:"CECILIA MENDEZ",
                    rut:"9747535-8",
                    prevision:"ISAPRE"},
                
                    {hora:"12:30",
                    especialista:"ANDRES KANACRI",
                    paciente:"MARCIAL SUAZO",
                    rut:"11254785-5",
                    prevision:"ISAPRE"},];

const dental=[{hora:"08:30",
            especialista:"ANDREA ZUÑIGA",
            paciente:"MARCELA RETAMAL",
            rut:"11123425-6",
            prevision:"ISAPRE"},
        
            {hora:"11:00",
            especialista:"MARIA PIA ZAÑARTU",
            paciente:"ANGEL MUÑOZ",
            rut:"9878789-2",
            prevision:"ISAPRE"},
        
            {hora:"11:30",
            especialista:"SCARLETT WITTING",
            paciente:"MARIO KAST",
            rut:"7998789-5",
            prevision:"FONASA"},
            
            {hora:"13:00",
            especialista:"FRANCISCO VON TEUBER",
            paciente:"KARIN FERNANDEZ",
            rut:"18887662-K",
            prevision:"FONASA"},
        
            {hora:"13:30",
            especialista:"EDUARDO VIÑUELA",
            paciente:"HUGO SANCHEZ",
            rut:"17665461-4",
            prevision:"FONASA"},
        
            {hora:"14:00",
            especialista:"RAQUEL VILLASECA",
            paciente:"ANA SEPULVEDA",
            rut:"14441281-0",
            prevision:"ISAPRE"}]

//Segundo Requerimiento

let atenciones=document.getElementById("atenciones")
atenciones.innerHTML+=`<h3 class="text-center">Atenciones Radiología<h3><hr>
                        <h5 class="text-center">Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision}| Última atención: ${radiologia[4].paciente} - ${radiologia[4].prevision}</h5><br>
                        
                        <h3 class="text-center">Atenciones Traumatología<h3><hr>
                        <h5 class="text-center">Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision}| Última atención: ${traumatologia[4].paciente} - ${traumatologia[4].prevision}</h5><br>
                        
                        <h3 class="text-center">Atenciones Dentales<h3><hr>
                        <h5 class="text-center">Primera atención: ${dental[0].paciente} - ${dental[0].prevision}| Última atención: ${dental[4].paciente} - ${dental[4].prevision}</h5>`

 //Tercer Requerimiento


 
 let cuerpoTabla=document.querySelector(".contenido1")

  
 for (const pacientes of radiologia) {
     
    cuerpoTabla.innerHTML += `
            <tr>
                <td>${pacientes.hora}</td>
                <td>${pacientes.especialista}</td>
                <td>${pacientes.paciente}</td>
                <td>${pacientes.rut}</td>
                <td>${pacientes.prevision}</td>
            </tr>
        `;
 }

 let cuerpoTabla2=document.querySelector(".contenido2")
 for (let index = 0; index < traumatologia.length; index++) {
     
     cuerpoTabla2.innerHTML += `
            <tr>
                <td>${traumatologia[index].hora}</td>
                <td>${traumatologia[index].especialista}</td>
                <td>${traumatologia[index].paciente}</td>
                <td>${traumatologia[index].rut}</td>
                <td>${traumatologia[index].prevision}</td>
            </tr>
        `;     
 }


    let cuerpoTabla3=document.querySelector(".contenido3")
    for (const key in dental) {
        cuerpoTabla3.innerHTML +=`
    <tr>
        <td>${dental[key].hora}</td>
        <td>${dental[key].especialista}</td>
        <td>${dental[key].paciente}</td>
        <td>${dental[key].rut}</td>
        <td>${dental[key].prevision}</td>
    </tr>
    `;
    }