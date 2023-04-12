
let usuarios = [];
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {        
    e.preventDefault();

    let inputs = formulario.getElementsByTagName('input');
    let nombre = inputs[0].value;
    let numero = inputs[1].value;
    let fecha = inputs[2].value;
    let email = inputs[3].value;
    let hora = inputs[4].value;

    let objeto = {
        'nombre': nombre,
        'email': email,
        'fecha': fecha,
        'numero': numero,
        'hora': hora,
    };
            usuarios.push(objeto);
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
});
let div = document.createElement("div");
    div.innerHTML = `<h1 class ='developedtext'>designed by zakhi</h1>
`
    document.body.append(div);
//----> Funcion Turnos sucesfull<----
turnoSucesfull();

var fechaActual = new Date();
var fechaActualString = fechaActual.toLocaleDateString();

//===========================>>> FUNCION PARA QUE MUESTRE EN PANTALLA EL WIDGET DE SE AGENDO CORRECTAMENTE EL TURNO<<<======================================
function turnoSucesfull(){
    formulario = document.getElementById("formulario")
    formulario.addEventListener("submit", (e) => {        
    e.preventDefault();   
    swal('¡Su turno fue agendado!', '', 'success')
    .then(() => {
    });
    });
};