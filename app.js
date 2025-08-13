let amigos=[];
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo() {
    let amigoIngresado=document.getElementById('amigo').value;
    // console.log (amigoIngresado);
    if (amigoIngresado == ""){
        alert ('POR FAVOR INGRESA UN NOMBRE');
        return;
    } else {
        amigos.push(amigoIngresado);
        document.querySelector(`#amigo`).value='';
        console.log (amigos);
     //   asignarNombreAmigo(amigoIngresado);
        cargaListaAmigo();
    }
}

function cargaListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];
    let listaAmigoHTML = document.createElement("li");
    // console.los (element);
    listaAmigoHTML.textContent = element;
    listaAmigos.appendChild(listaAmigoHTML);
  }
}

function sortearAmigo(){
    let numeroAmigo= amigos.length;
    if (numeroAmigo==0){
        alert ('DEBE INGRESAR AMIGOS');
        return;
    }
    else {
    let numeroSorteado = Math.floor(Math.random()*numeroAmigo);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = `TU AMIGO SECRETO ES ${amigos[numeroSorteado]}`;
    // console.log amigos[numeroSorteado];
    }
 
}