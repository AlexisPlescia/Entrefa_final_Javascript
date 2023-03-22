let usuarios = [];
let formulario = document.getElementById("formulario")
formulario.addEventListener("submit", (e) => {        
    e.preventDefault();

//----->>>>>PREGUNTAR PARA QE SIRVE ADDEVENTLISTENER <-----
    let inputs = formulario.getElementsByTagName('input')
    let nombre = inputs[0].value;
    let numero  = inputs[1].value;
    let fecha = inputs[2].value;
    let email = inputs[3].value;
    let hora = inputs[4].value;
    let objeto = {
        'nombre': nombre,
        'numero': numero,
        'fecha': fecha,
        'email': email,
        'hora': hora,
    };
    usuarios.push(objeto);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    validarHora();
});
let div = document.createElement("div");
    div.innerHTML = `<h1 class ='developedtext'>designed by zakhi</h1>
`
    document.body.append(div);

//----> Funcion <----
turnoSucesfull();
//---->
var fechaActual = new Date();
var fechaActualString = fechaActual.toLocaleDateString();

 // Mostrará la fecha actual en formato de cadena de caracteres
 if(inputs[3].value < fechaActual){
    formulario = document.getElementById("formulario")
    formulario.addEventListener("submit", (e) => {        
    e.preventDefault();   
    swal('La fecha es incorrecta', '', 'error')
    .then(() => {
});
});
 }
//----------------------------> Funcion - Solucionar error horario del turno <-------------
//nombre: hora
//input[4]
function validarHora(){
    let horaInput = document.getElementById('horaInput').value;
    
let partesHora = horaInput.split(':');
let hora = new Date();
hora.setHours(partesHora[0]);

if (partesHora[1] >= 0 && partesHora[1] <= 59) {
    hora.setMinutes(partesHora[1]);
} else {
    console.log('El valor ingresado para los minutos no es válido');
    // Puedes agregar aquí el código para notificar al usuario del error
}


}
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
// const div = document.getElementById("formulario");

// fetch("http://127.0.0.1:5501/index.html", {
//   method: "POST",
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(objeto)
// })
// .then(response => response.json())
// .then(data => {
//   console.log("Respuesta del servidor:", data);
// })
// .catch(error => {
//   console.error("Error al enviar los datos:", error);
// });



// const listado = document.getElementById("grupo");

// fetch('./data.json')
// .then(response => response.json())
// .then(data => {

//     data.forEach(element => {
//         const div = document.createElement("div"); 
//         div.innerHTML = `
//         <p>${listado.nombre}</p>
//         <p>${listado.numero}</p>
//         <p>${listado.precio}</p>
//         `
//     });
// listado.append(p);

// })