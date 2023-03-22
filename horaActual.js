function mostrarHora(){
    momentoActual = new Date();
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinuts();
    horaImprimible = hora + " : " + minuto ;
    document.getElementById('mostrarHora').innerHTML = horaImprimible;

    console.log(minuto);
};

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data => console.log(data))

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data => console.log(data))