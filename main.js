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
});
let div = document.createElement("div");
    div.innerHTML = `<h1 class ='developedtext'>designed by zakhi</h1>
`
    document.body.append(div);

formulario = document.getElementById("formulario")
formulario.addEventListener("submit", (e) => {        
e.preventDefault();   
swal('¡Su turno fue agendado!', '', 'success')
.then(() => {
});
});

var fechaActual = new Date();
var fechaActualString = fechaActual.toLocaleDateString();
 // mostrará la fecha actual en formato de cadena de caracteres

 if(inputs[3].value < fechaActual){
    formulario = document.getElementById("formulario")
    formulario.addEventListener("submit", (e) => {        
    e.preventDefault();   
    swal('La fecha es incorrecta', '', 'error')
    .then(() => {
});
});
 }