function mostrarHora(){
    momentoActual = new Date();
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinuts();
    horaImprimible = hora + " : " + minuto;
    document.getElementById('mostrarHora').innerHTML = horaImprimible;
    console.log(minuto);
};

fetch('https://frontend-3-javascript-coder.vercel.app/')
.then(res => console.log(res));

// const url = 'https://frontend-3-javascript-coder.vercel.app/';
// const data = { nombre: , edad: ,};

// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error('Error en la solicitud: ' + response.statusText);
//     }
//   })
//   .then((data) => {
//     console.log('Solicitud exitosa:', data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });