
mostrarTurnos();

function mostrarTurnos(){
    let usuarios = localStorage.getItem("usuarios");

    console.log(usuarios);
    
    let div = document.createElement("div");
    div.setAttribute("id", "datos");
    div.innerHTML = 
        `
        ${usuarios}<br>
         ${usuarios}`
    document.body.append(div);
    ;}
    let div = document.createElement("div");
    div.setAttribute("id", "datos");
    div.innerHTML = 
        `
        <h1 class="title">Prometeo tatto</h1>
        `
    document.body.append(div);
    ;


