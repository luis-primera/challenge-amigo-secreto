// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if((nombre==" ") || (nombre=="")){
        alert("Por favor ingrese un nombre.");        
    }else{
        nombreAmigos.push(nombre);
        
    }
    limpiarCaja();
    muestraListaAmigos()
}
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function muestraListaAmigos(){
    let listaUl=document.getElementById('listaAmigos');
    listaUl.innerHTML="";
    for(let i = 0; i< nombreAmigos.length; i++){
        let li=document.createElement("li");
        li.textContent=nombreAmigos[i];
        listaUl.appendChild(li);
    }
}

function sortearAmigo(){
    if(nombreAmigos.length >0){
        let indiceAleatorio = Math.floor(Math.random() *nombreAmigos.length);
        let nombreAleatorio = nombreAmigos[indiceAleatorio];
        let listaUl=document.getElementById('resultado');
        listaUl.innerHTML="";
        let li=document.createElement("li");
        li.textContent="Tu amigo sorteado es: "+nombreAleatorio;
        listaUl.appendChild(li);
        console.log(nombreAleatorio);
        return nombreAleatorio;
    }else  {
        console.log("Lista de nombres esta vacío");
        return;
    }
}
