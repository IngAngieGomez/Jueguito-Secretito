//let titulo = document.querySelector('h1');
//titulo.innerHTML ='Juego del número secretito';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10, por favor';

let numeroSecreto=0;
let intentos = 0;
let ListaNumerosSorteados = [] ;
let NumeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML =texto;
return;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*NumeroMaximo)+1;

  
//Si el numero generado esta incluido en la lista 
  console.log(numeroGenerado);
  console.log(ListaNumerosSorteados);
  
//Preguntar si ya sorteamos todos los numeros posibles dentro de nuestro programa
  if (ListaNumerosSorteados.length == NumeroMaximo) {
    asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
  } else {
  
    if (ListaNumerosSorteados.includes(numeroGenerado)) {
     return generarNumeroSecreto();
    } else {
     ListaNumerosSorteados.push(numeroGenerado);
     return numeroGenerado;
    }
  }
}

function condicionesIniciales (){
  asignarTextoElemento('h1','Juego de numero secreto');
  asignarTextoElemento('p',`Indica un número del 1 al ${NumeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos= 1;
  console.log(numeroSecreto);
}



function VerificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   // console.log (typeof(numeroDeUsuario));
    console.log(intentos);
    //console.log(typeof(numeroSecreto));
   
    //console.log(numeroDeUsuario === numeroSecreto);

      if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
      } else {
      if (numeroDeUsuario > numeroSecreto){
          asignarTextoElemento('p','El número secreto es menor');

       } else {
           asignarTextoElemento('p','El número secreto es mayor'); 
       }
        intentos++;
        limpiarCaja();
      return;
      }
    }

function limpiarCaja(){
  document.querySelector('#valorUsuario').value='';
}



function ReiniciarJuego(){
  //limpiarcaja
  limpiarCaja();
  //indicarmensaje de inicio
  //Generar numero aleatorio
  condicionesIniciales();
  //Deshabilitar boton de reinicio
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}


condicionesIniciales();