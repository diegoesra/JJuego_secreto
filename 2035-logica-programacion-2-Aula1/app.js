let numeroSecreto = 0;
let Intentos = 0;
let listaNumerosSorteados = [];
let numeroMAximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =  texto; 
    return;
}
function verificarIntento(){
    let numeroDeUsurario = parseInt(document.getElementById('valorUsuario').value);

    console.log(Intentos);
    if(numeroDeUsurario === numeroSecreto) {
        asignarTextoElemento('p',`acertaste el numero en ${Intentos} ${(Intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if(numeroDeUsurario > numeroSecreto) {
            asignarTextoElemento('p','el numero secreto es menor');
        } else {
            asignarTextoElemento('p','el numero secreto es mayor');
        }
    Intentos++;
    limpiarCaja();
    }
    return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
   
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMAximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numoeros
    if(listaNumerosSorteados.length == numeroMAximo){
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
    }
    
    //si el numero generado esta incluido en la lista se hace una operacion sino otra


    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMAximo}`);
    numeroSecreto = generarNumeroSecreto();
    Intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos 
    condicionesIniciales();
    //desabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}



condicionesIniciales();

asignarTextoElemento('h1','juego del numero secreto¡');
asignarTextoElemento('p','indica un numero del 1 al 10');

